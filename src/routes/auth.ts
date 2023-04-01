import * as auth from "../methods/auth";
import { IAppRoute } from "../utils/types";

const authRoutes: IAppRoute = {
  private(app) {
    app.get("/api/auth", auth.get);
  },
  public(app) {
    app.post("/api/auth/signin", auth.signin);
    app.post("/api/auth/signout", auth.signout);
    app.post("/api/auth/signup", auth.signup);
  },
};

export default authRoutes;
