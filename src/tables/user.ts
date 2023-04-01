import { STRING, UUID, UUIDV4 } from "sequelize";
import { sequelize } from "../sequelize";
import { getPostgresSchema } from "../utils/functions";

const User = sequelize.define(
  "user",
  {
    id: {
      type: UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    username: {
      type: STRING,
      unique: true,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    firstname: {
      type: STRING,
      allowNull: false,
    },
    lastname: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    schema: getPostgresSchema(),
  },
);

export default User;
