import Category from "../../../models/Category.js";
const path = "categories";

export default function loadCategoryRoutes(router) {
  router.post(`/${path}`, async (req, res) => {
    const data = req.body;

    console.log(data);
    const result = await Category.create(data);
    res.json(result);
  });

  // Update an category
  router.patch(`/${path}/:id`, async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const result = await Category.update({ id: parseInt(id) }, data);
    res.json(result);
  });

  // Delete an category
  router.delete(`/${path}/:id`, async (req, res) => {
    const { id } = req.params;
    const result = await Category.delete(parseInt(id));
    res.json(result);
  });

  // Get all category with pagination
  router.get(`/${path}`, async (req, res) => {
    const { limit, skip } = req.query;
    const result = await Category.find(
      {},
      {},
      null,
      parseInt(limit) || 10,
      parseInt(skip) || 0
    );
    res.json(result);
  });
  router.get(`/${path}.meta`, async (req, res) => {
    const result = await Category.meta({});
    res.json(result);
  });

  // Get a specific category by ID
  router.get(`/${path}/:id`, async (req, res) => {
    const { id } = req.params;
    const result = await Category.findById(parseInt(id));
    res.json(result);
  });
}
