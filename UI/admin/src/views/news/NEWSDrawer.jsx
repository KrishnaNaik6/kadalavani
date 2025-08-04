import { Drawer, Input, Button, Select, DatePicker, Upload } from 'antd';
import { Card } from 'antd';
import { useCategory } from './NEWS.context';
import { Form, message } from 'antd';
import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
export default function CategoryDrawer() {
  const { actions, states } = useCategory();
  const handleFormSubmit = (formData) => {
    console.log('states.categoryDrawerState.mode, states.editData.id');
    console.log(states.categoryDrawerState.mode, states.editData?.id);

    if (states.categoryDrawerState.mode === 'create')
      actions.createNews(formData);
    if (states.categoryDrawerState.mode === 'edit')
      actions.editNews({
        id: states?.editData.id,
        formData,
      });
    // Here you can define logic to create or update based on the form data
  };

  return (
    <Drawer
      title={
        // 'create'
        states.categoryDrawerState?.mode === 'create'
          ? 'Create News'
          : 'Edit News'
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
        <ArticleForm onSave={handleFormSubmit} article={states.editData} />
      </div>
    </Drawer>
  );
}
// import React from 'react';
// import { Form, Input, Button, DatePicker } from 'antd';

const ArticleForm = ({ article, onSave }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Since images are expected to be an array but are entered as a comma-separated string, we convert them here
    // const processedValues = {
    //   ...values,
    //   images: values.images.split(',').map((image) => image.trim()),
    // };
    const formData = new FormData();
    // Append fields to formData
    formData.append('title', values.title);
    formData.append('content', values.content);

    // Assuming images are uploaded and stored in the 'images' field
    if (values.images && values.images.fileList) {
      values.images.fileList.forEach((file) => {
        // Append each file under the 'images' key
        formData.append('images', file.originFileObj);
      });
    }

    // Here you would submit the formData to your server endpoint
    onSave(formData);
    console.log('Submitted Data', formData);
    // Example submission (replace with your ac
    console.log(values);
  };

  const normFile = (e) => {
    // If you're using a file server that requires the files to be uploaded as part of the form
    // you might need to transform the file list to match your backend expectations
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Form
      form={form}
      name='article_form'
      initialValues={{
        title: article?.title || '',
        content: article?.content || '',
        images: article?.images.join(', ') || '', // Assuming images to be comma-separated URLs
        published_at: article?.published_at || '',
      }}
      onFinish={onFinish}
      autoComplete='off'
      layout='vertical'
    >
      <Form.Item
        label='Title'
        name='title'
        rules={[{ required: true, message: 'Please input the article title!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Content'
        name='content'
        rules={[
          { required: true, message: 'Please input the article content!' },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name='images'
        label='Upload Image'
        // valuePropName='fileList'
        // getValueFromEvent={(e) => ({ fileList: e.fileList })}
        // extra='Select image for the article'
      >
        <Upload name='images' listType='picture' beforeUpload={() => false}>
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item label='Published At' name='published_at'>
        <DatePicker format='YYYY-MM-DD' />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Create Article
        </Button>
      </Form.Item>
    </Form>
  );
};

ArticleForm.propTypes = {
  article: propTypes.node.isRequired,
  onSave: propTypes.node.isRequired,
};
