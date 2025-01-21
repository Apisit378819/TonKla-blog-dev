import * as pg from "pg";
const { Pool } = pg.defailt;

const connectionPool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
})

export default connectionPool;