import Article from "../../../models/Article";
export default class ArticleController {
  static find(req, res, next) {}
  static async create(req, res, next) {
    //   const images = req.files.map((file) => file.path);
    req.send(await Article.create(req.body));
  }
}
