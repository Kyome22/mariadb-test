USE testdb;

CREATE TABLE table1
(
  user_id   VARCHAR(8)  UNIQUE NOT NULL,
  user_name VARCHAR(20) UNIQUE NOT NULL
);

INSERT INTO table1
  (user_id, user_name)
values("A0001", "Mike");
INSERT INTO table1
  (user_id, user_name)
values("A0002", "Jhon");
INSERT INTO table1
  (user_id, user_name)
values("A0003", "Caitlyn");
