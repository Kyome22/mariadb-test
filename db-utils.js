require("dotenv").config({ path: "docker/.env" });
const mariadb = require("mariadb");

class DBUtils {
  constructor() {
    this.pool = mariadb.createPool({
      host: "localhost",
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    });
  }

  poolEnd() {
    this.pool.end();
  }

  async postQuery(queryStr) {
    let conn;
    try {
      conn = await this.pool.getConnection();
      return await conn.query(queryStr).then((array) => {
        delete array.meta;
        return array;
      });
    } catch (error) {
      throw error;
    } finally {
      conn.end();
    }
  }
}

module.exports = {
  DBUtils: DBUtils,
};
