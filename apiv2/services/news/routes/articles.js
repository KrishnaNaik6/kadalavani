import Article from "../../../models/Article.js";
import upload from "../../../config/multer.js";
export default function loadRoutes(router) {
  const path = "articles";
  router.post(`/${path}`, upload.array("images", 5), async (req, res) => {
    const images = req.files.map((file) => file.path);
    console.log("the imagesaree ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((", images)
    const data = req.body;
    try {
      data.title = data.title;
      data.content = data.content;
    } catch (e) {
      console.log(e);
    }
    console.log(data);
    const result = await Article.create({ ...data, images });
    res.json(result);
  });

  // Update an article
  router.put(`/${path}/:id`, async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    console.log("put", data, id);
    const result = await Article.update({ id: parseInt(id) }, data);
    res.json(result);
  });
  // Update an article
  router.patch(`/${path}/:id`, upload.array("images", 5), async (req, res) => {
    const { id } = req.params;
    let data = req.body;
    const images = req.files.map((file) => file.path);
    if (images.length > 0) data.images = images;
    console.log("PATCH", data, id);
    const result = await Article.update({ id: parseInt(id) }, data);
    res.json(result);
  });

  // Delete an article
  router.delete(`/${path}/:id`, async (req, res) => {
    const { id } = req.params;
    const result = await Article.delete(parseInt(id));
    res.json(result);
  });

  // Get all articles with pagination
  router.get(`/${path}`, async (req, res) => {
    const { page, pageSize } = req.query;
    const result = await Article.find(
      {},
      {},
      null,
      parseInt(page),
      parseInt(pageSize)
    );
    res.json(result);
  });

  // Get a specific article by ID
  router.get(`/${path}/:id`, async (req, res) => {
    const { id } = req.params;
    const result = await Article.findById(parseInt(id));
    res.json(result);
  });
}
