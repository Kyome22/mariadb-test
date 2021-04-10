const { DBUtils } = require("../db-utils");

// console.error() の mock
jest.spyOn(console, "error").mockImplementation((...args) => {
  console.log(args.join(", "));
});

const sut = new DBUtils();

afterAll(() => {
  sut.poolEnd();
});

describe("DBの初期化の確認", () => {
  it("Database: testdb が存在する", (done) => {
    sut
      .postQuery("SHOW databases")
      .then((actual) => {
        expect(actual).toEqual(
          expect.arrayContaining([
            {
              Database: "testdb",
            },
          ])
        );
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it("Table: table1 が存在する", (done) => {
    sut
      .postQuery("SHOW tables FROM testdb")
      .then((actual) => {
        expect(actual).toEqual(
          expect.arrayContaining([
            {
              Tables_in_testdb: "table1",
            },
          ])
        );
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it("table1 の中のデータが格納されている", (done) => {
    sut
      .postQuery("SELECT * FROM testdb.table1")
      .then((actual) => {
        expect(actual).toEqual(
          expect.arrayContaining([
            {
              user_id: "A0001",
              user_name: "Mike",
            },
            {
              user_id: "A0002",
              user_name: "Jhon",
            },
            {
              user_id: "A0003",
              user_name: "Caitlyn",
            },
          ])
        );
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
