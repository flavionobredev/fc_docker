CREATE DATABASE IF NOT EXISTS fcdockerdb;
CREATE USER 'fcdockerdbuser'@'%' IDENTIFIED BY 'fcdockerdbpwd';
GRANT CREATE, ALTER, INDEX, LOCK TABLES, REFERENCES, UPDATE, DELETE, DROP, SELECT, INSERT ON `fcdockerdb`.* TO 'fcdockerdbuser'@'%';
FLUSH PRIVILEGES;

USE fcdockerdb;

DROP TABLE IF EXISTS people;

CREATE TABLE people (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(150) NOT NULL DEFAULT '',
  PRIMARY KEY (id)
);

INSERT INTO people (name) VALUES ('John Doe'), ('Jane Doe'), ('John Smith'), ('Jane Smith');