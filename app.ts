import express, { Application } from "express";
import morgan from "morgan";
import { PORT } from "@env/index";
import { sequelize } from "utils/database";
import { Users } from "@models/usert";
import { Users2 } from "@models/users2";
const app: Application = express();

// Express configs
app.use(express.json({ limit: "100mb" }));
app.use(morgan("combined"));
sequelize
  .authenticate({})
  .then((res) => {
    console.log("Database is connected");
  })
  .catch((reason) => {
    console.log("database connection failed");
    console.log(reason);
  });

app.listen(PORT, () => {
  console.log("@Server connected at");
  console.log(`http://localhost:${PORT}`);
});

// add_user();
// async function add_user() {
//   const category = await Users2.create({
//     name: "test user4",
//     email: "test4@gmail.com",
//   });
// }

// update_user();
// async function update_user() {
//   const response1 = await Users.update(
//     {
//       name: "test user1 update",
//     },
//     {
//       where: { id: 1 },
//     }
//   );
// }
// delete_user();
// async function delete_user() {
//   const response = await Users.destroy({
//     where: {
//       id: 1,
//     },
//   });
// }
// get_user();
// async function get_user() {
//   const response = await Users.findAll({
//     include: [
//       {
//         model: Users2,
//         required: true,
//         // attributes: ["product_name"],
//       },
//     ],
//     logging: true,
//   }).catch(console.log);
//   console.log(response);
// }
// TestTable();

// Users.sync({ alter: true }).catch(console.log);
Users2.sync({ alter: true }).catch(console.log);

// sequelize.createSchema("users", {}).then(() => {
//   // new schema is created
//   console.log("shema created succesfully");
// });

// sequelize.createSchema("users_tenant2", { logging: true });
