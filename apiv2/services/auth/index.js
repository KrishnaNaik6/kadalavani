import router from "./routes/index.js";
function load(app) {
  app.use("/v1/auth", router);
}

const Auth = { load };
export default Auth;
