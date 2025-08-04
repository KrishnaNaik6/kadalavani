import { Drawer, Input, Button, Select } from 'antd';
import { Card } from 'antd';
import { useCategory } from './Tag.context';
import { Form, message } from 'antd';
import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
export default function CategoryDrawer() {
  const { actions, states } = useCategory();
  const handleFormSubmit = (formData) => {
    console.log('states.categoryDrawerState.mode, states.editData.id');
    console.log(states.categoryDrawerState.mode, states.editData?.id);

    if (states.categoryDrawerState.mode === 'create')
      actions.createCategory({
        name: { ka: formData.kaName, en: formData.enName },
        description: { ka: formData.kaDescription, en: formData.enDescription },
        parent_id: formData.parent_id,
        status: 1,
      });
    if (states.categoryDrawerState.mode === 'edit')
      actions.editCategory({
        id: states?.editData.id,
        name: { ka: formData.kaName, en: formData.enName },
        description: { ka: formData.kaDescription, en: formData.enDescription },
        parent_id: formData.parent_id,
        status: 1,
      });
    // Here you can define logic to create or update based on the form data
  };

  return (
    <Drawer
      title={
        // 'create'
        states.categoryDrawerState?.mode === 'create'
          ? 'Create Tag'
          : 'Edit Tag'
      }
      placement='right'
      onClose={(e) => {
        actions.closeCategoryDrawer();
      }}
      style={{
        display: 'flex',
        overflow: 'hidden',
      }}
      width='500'
      // open={drawerService.isOpen}
      open={states.categoryDrawerState?.isOpen}
    >
      <div style={{ margin: '20px' }}>
        <MyForm onSubmit={handleFormSubmit} initialValues={states.editData} />
      </div>
    </Drawer>
  );
}

const MyForm = ({ initialValues, onSubmit }) => {
  const [form, state] = Form.useForm();
  const { categories, states, actions } = useCategory();

  useEffect(() => {
    console.log(initialValues);
    if (
      states.categoryDrawerState?.isOpen &&
      states.categoryDrawerState?.mode === 'create'
    ) {
      form.resetFields();
    }
    if (
      initialValues &&
      states.categoryDrawerState?.isOpen &&
      states.categoryDrawerState?.mode === 'edit'
    ) {
      console.log('initialValues', initialValues);
      form.setFieldsValue({
        // ...initialValues,
        kaName: initialValues?.name?.ka,
        enName: initialValues?.name?.en,
        kaDescription: initialValues?.description?.ka,
        enDescription: initialValues?.description?.en,
        parent_id: initialValues?.parent_id,
      });
    }
  }, [
    initialValues,
    form,
    states.categoryDrawerState?.mode,
    states.categoryDrawerState?.isOpen,
  ]);

  const onFinish = (values) => {
    onSubmit(values);
    message.success('Category successfully!');
    actions.closeCategoryDrawer();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Form submission failed!');
  };

  return (
    <Form
      form={form}
      name='basic'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        label='Name(EN)'
        name='enName'
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Name(KA)'
        name='kaName'
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Description(EN)'
        name='enDescription'
        rules={[{ required: true, message: 'Please input the description!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Description(KA)'
        name='kaDescription'
        rules={[{ required: true, message: 'Please input the description!' }]}
      >
        <Input />
        {JSON.stringify(state)}
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

MyForm.propTypes = {
  initialValues: propTypes.node.isRequired,
  onSubmit: propTypes.node.isRequired,
};
