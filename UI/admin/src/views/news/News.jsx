import { useEffect } from 'react';
import { Button } from 'antd';
import { CategoriesProvider, useCategory } from './NEWS.context';
import CategoryDrawer from './NEWSDrawer';

const NEWS = () => {
  return (
    <CategoriesProvider>
      <NewsPage />
    </CategoriesProvider>
  );
};
export default NEWS;

const NewsPage = () => {
  const { categories, actions, data, exec } = useCategory();
  useEffect(() => {
    // loadCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div style={{ overflow: 'scroll', flex: 1, padding: 10 }}>
      <div style={{ display: 'flex' }}>
        <h2>News page </h2>

        {/* <button
          onClick={(e) => {
            exec();
          }}
        >
          Text
        </button> */}
        <div style={{ flex: 1 }}></div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button onClick={(e) => actions.openCreateCategoryDrawer()}>
            Create News
          </Button>
        </div>
      </div>
      <div>
        <table border='0' style={{ width: '100%' }}>
          <tbody>
            {categories &&
              categories
                .filter((d) => !d.parent_id)
                .map((category, i) => (
                  <>
                    <tr key={category.id} style={{ background: '#f1f1f1' }}>
                      <td style={{ width: 23 }}>{i + 1}</td>
                      <td style={{ padding: 5 }}>
                        {category.description?.en}
                        <span style={{ fontSize: 13 }}>
                          {/* ({JSON.stringify(category.images)}) */}
                        </span>
                        <img
                          src={'http://localhost:5001/' + category.images[0]}
                          width='100'
                        />
                      </td>
                      <td style={{ padding: 5 }}>{category.title}</td>
                      <td style={{ padding: 5 }}>{category.content}</td>

                      <td>
                        <Button
                          size='small'
                          style={{
                            fontSize: 12,
                            color: 'blue',
                            background: '#fff',
                            border: '1px solid #ccc',
                          }}
                          onClick={(e) => {
                            actions.openEditCategoryDrawer(category);
                          }}
                        >
                          Edit
                        </Button>
                      </td>
                    </tr>
                    {categories
                      .filter((d) => d.parent_id === category.id)
                      .map((scategory, j) => (
                        <tr
                          key={scategory.id}
                          style={{
                            background: j % 2 === 0 ? '#f1f1f1' : '#fff',
                          }}
                        >
                          <td>{scategory.parent_id}</td>
                          <td
                            style={{
                              padding: 5,
                              paddingLeft: 20,
                              fontSize: 14,
                            }}
                          >
                            {scategory.name?.en}
                            {scategory.name?.ka && (
                              <span style={{ fontSize: 13 }}>
                                ({scategory.name?.ka})
                              </span>
                            )}
                          </td>
                          <td style={{ padding: 5 }}>
                            {scategory.description?.en}
                            {scategory.description?.ka && (
                              <span style={{ fontSize: 13 }}>
                                ({scategory.description?.ka})
                              </span>
                            )}
                          </td>
                          <td>
                            <Button
                              size='small'
                              style={{
                                fontSize: 12,
                                color: 'blue',
                                background: '#fff',
                                border: '1px solid #ccc',
                              }}
                              onClick={(e) => {
                                actions.openEditCategoryDrawer(scategory);
                              }}
                            >
                              Edit
                            </Button>
                          </td>
                        </tr>
                      ))}
                  </>
                ))}
          </tbody>
        </table>
      </div>
      <CategoryDrawer />
    </div>
  );
};
