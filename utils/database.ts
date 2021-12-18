// // import { DB } from "@env/index";
// export const sequelize = new Sequelize(DB!, { logging: true });

// sequelize
//   .authenticate()
//   .then((res) => {
//     console.log("Database is connected");
//   })
//   .catch((reason) => {
//     console.log("database connection failed");
//     console.log(reason);
//   });

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("saas", "ramees", "cool", {
  schema: "custom",
  host: "localhost",
  dialect: "postgres",
});
