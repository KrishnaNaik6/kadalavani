import Tag from "../../../models/Tag.js";
const path = "tags";

export default function loadTagRoutes(router) {
  router.post(`/${path}`, async (req, res) => {
    const data = req.body;

    console.log(data);
    const result = await Tag.create(data);
    res.json(result);
  });

  // Update an Tag
  router.patch(`/${path}/:id`, async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const result = await Tag.update({ id: parseInt(id) }, data);
    res.json(result);
  });

  // Delete an Tag
  router.delete(`/${path}/:id`, async (req, res) => {
    const { id } = req.params;
    const result = await Tag.delete(parseInt(id));
    res.json(result);
  });

  // Get all Tag with pagination
  router.get(`/${path}`, async (req, res) => {
    const { limit, skip } = req.query;
    console.log("tag loading");
    const result = await Tag.find(
      {},
      {},
      null,
      parseInt(limit) || 10,
      parseInt(skip) || 0
    );
    res.json(result);
  });
  router.get(`/${path}.meta`, async (req, res) => {
    const result = await Tag.meta({});
    res.json(result);
  });

  // Get a specific Tag by ID
  router.get(`/${path}/:id`, async (req, res) => {
    const { id } = req.params;
    const result = await Tag.findById(parseInt(id));
    res.json(result);
  });
}
