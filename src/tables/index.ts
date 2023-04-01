import User from "./user";

const initRelations = () => {
  // User.hasMany(Product, {
  //     as: "product",
  //     foreignKey: "userId"
  // });
};

const initTables = async () => {
  await User.sync({ alter: true });
  initRelations();
};

export { initTables };
