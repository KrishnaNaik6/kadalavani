import Article from "../../../models/Article";
export default class ArticleController {
  static find(req, res, next) {}
  static create(req, res, next) {
    Article.create();
  }
}
