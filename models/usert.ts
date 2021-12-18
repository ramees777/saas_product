import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "utils/database";
import { Users2 } from "./users2";

export const Users = sequelize.define(
  "users",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },

  {
    schema: "users_tenant1",
  }
);

Users.hasOne(Users2, { onDelete: "CASCADE", onUpdate: "CASCADE" });

Users2.belongsTo(Users);

// export async function TestTable() {
//   try {
//     await sequelize
//       // .createSchema("test1", { logging: true })
//       // sequelize
//       .query(`CREATE SCHEMA IF NOT EXISTS test1;`)
//       .then(async (e) => {
//         console.log(e);

//         const TestTable = sequelize.define(
//           "test_table1",
//           {
//             id: {
//               primaryKey: true,
//               type: DataTypes.INTEGER,
//               autoIncrement: true,
//             },
//             name: {
//               type: DataTypes.STRING,
//             },
//             email: {
//               type: DataTypes.STRING,
//             },
//           },

//           {
//             schema: "test1",
//           }
//         );

//         return await TestTable.sync({ force: true });
//       })
//       .catch(console.log);
//   } catch (err) {
//     console.log(err);
//   }
// }
