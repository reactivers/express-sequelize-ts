import type { Express } from "express";
import authRoutes from "./auth";
import authorizationRoutes from "./authorization";

const initRoutes = async (app: Express) => {
  authRoutes.public(app);
  authorizationRoutes.public(app);
  authorizationRoutes.private(app);
  authRoutes.private(app);
};

export { initRoutes };
