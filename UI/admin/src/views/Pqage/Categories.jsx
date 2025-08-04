import { useEffect } from 'react';
import { useApi } from '../../api/hooks';
import { CategoriesProvider, useCategory } from './Categories.context';

const Categories = () => {
  return (
    <CategoriesProvider>
      <CategoriesPage />
    </CategoriesProvider>
  );
};
export default Categories;

const CategoriesPage = () => {
  const { data, status, exec } = useApi(() => {
    return ['name', 'age', 'address'];
  });
  const { categories, loadCategories } = useCategory();
  useEffect(() => {
    loadCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div style={{ overflow: 'scroll', flex: 1, padding: 10 }}>
      {/* <h2>Categories page-- </h2> */}
      <div>{status}</div>
      {JSON.stringify(data)}
      <button onClick={(e) => {}}>Text</button>
      <div>
        {categories
          .filter((d) => !d.parent_id)
          .map((d, i) => (
            <div key={i} style={{ padding: 5 }}>
              <div style={{ marginBottom: 5 }}>
                <div style={{ fontSize: 14, color: '#444' }}>Name:</div>
                <div>
                  {d.name.en}( {d.name.ka})
                </div>
              </div>
              <div
                style={{
                  marginBottom: 5,
                  color: '#444',
                  borderBottom: '1px solid #444',
                }}
              >
                <div style={{ fontSize: 14 }}>description:</div>
                <div>{d.description?.en}</div>
                <div>{d.description?.ka}</div>
              </div>
            </div>
          ))}

        {/* <table border={1}>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td></td>
          </tr>
          {categories
            .filter((d) => !d.parent_id)
            .map((d, i) => (
              <>
                <tr key={i}>
                  <td>
                    <div>{d.name?.en}</div>
                    <div style={{ fontSize: 12 }}>{JSON.stringify(d.name)}</div>
                  </td>
                  <td>
                    <div>{d.description?.en}</div>
                    <div style={{ fontSize: 12 }}>
                      {JSON.stringify(d.description)}
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Sub category</td>
                  <td>Name</td>
                  <td>Description</td>
                </tr>
                {categories
                  .filter((sd) => sd.parent_id === d.id)
                  .map((sd, j) => (
                    <>
                      <tr key={j}>
                        <td></td>
                        <td>
                          <h3>{sd.name?.en}</h3>
                          <div style={{ fontSize: 12 }}>
                            {JSON.stringify(sd.name)}
                          </div>
                        </td>
                        <td>
                          <h4>{sd.description?.en}</h4>
                          <div style={{ fontSize: 12 }}>
                            {JSON.stringify(sd.description)}
                          </div>
                        </td>
                      </tr>
                    </>
                  ))}
              </>
            ))}
        </table> */}
      </div>
    </div>
  );
};
