import verifyJWTToken from "../middleware/authorization";
import { IAppRoute } from "../utils/types";

const authorizationRoutes: IAppRoute = {
  private(app) {
    app.all("*", verifyJWTToken);
  },
  public() {
    // For possible implementations
  },
};

export default authorizationRoutes;
