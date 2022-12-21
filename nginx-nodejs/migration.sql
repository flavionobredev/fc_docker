USE fcdockerdb;

DROP TABLE IF EXISTS books;

CREATE TABLE people (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(150) NOT NULL DEFAULT '',
  PRIMARY KEY (id)
);

INSERT INTO people (name) VALUES ('John Doe'), ('Jane Doe'), ('John Smith'), ('Jane Smith');