const knex = require("knex");

PGHOST = "ep-winter-sun-a8a8qcji-pooler.eastus2.azure.neon.tech";
PGDATABASE = "neondb";
PGUSER = "neondb_owner";
PGPASSWORD = "npg_uJf3Tm5YAdws";
const PGPORT = 5432;

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});

async function getVersion() {
  try {
    const result = await db.raw("select version()");
    console.log(result.rows);
  } catch (error) {
    console.log(error);
  }
}
getVersion();
// query
// db.raw("select id, name, price from products where id= ?", [2])
//   .then((data) => {
//     console.log(data.rows);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// SELECT query with the builder
// db("products")
//   .select("id", "name", "price")
//   //   .where({id:2})
//   .orderBy("name")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//INSERT, i dont see the data in the console
// db("products")
//   .insert({name:"prod 1", price: "111"})
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//INSERT returning data in the console
// db("products")
//   .insert([
//     { name: "prod 1", price: "111" },
//     { name: "prod 1", price: "111" },]
//     ["id", "name"],
//   )
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//INSERT in a diff way but also returning data in the console
// db("products")
//   .insert([
//     { name: "prod 1", price: "111" },
//     { name: "prod 1", price: "111" },
//   ])
//   .returning(["id", "price"])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//UPDATE
// db("products")
//   .update({ name: "iphone15" }, ["id", "name", "price"])
//   .where({ id: 14 })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//DELETE
// db("products")
//   .where({ id: 12 })
//   .del()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const test = async () => {
  const trx = await db.transaction();
  try {
    const [prod] = await db("products")
      .insert({ name: "F21", price: 1234567 }, ["id"])
      .transacting(trx);
    await trx.commit();
    // await trx.rollback();
  } catch (error) {
    console.log(error);
    await trx.rollback();
  }
};

test();
