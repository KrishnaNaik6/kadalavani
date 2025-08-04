import router from "./routes/index.js";
function load(app) {
  app.use("/v1/news", router);
}

const News = { load };
export default News;

/*
sports
business
aggricature
entertainment

contry
states
districts

*/
