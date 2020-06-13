DROP DATABASE IF EXISTS Episode2DB;
CREATE database Episode2DB;

USE Episode2DB;

Create TABLE planets (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(60) Null,  
    star VARCHAR(60),
    Sector VARCHAR(20),
    moon VARCHAR(30),
    rotation INT NOT NULL,
    rebel BOOLEAN default False,
    empire BOOLEAN default False,
    blackSuns BOOLEAN default False,
    PRIMARY KEY (id)
);

CREATE TABLE locations (
    city VARCHAR(60),
    picture VARCHAR(100),
    decription VARCHAR(200),
    cost INT(15, 0),
    address VARCHAR(30),
    rating INT(10,4)
    FOREIGN KEY planetId REFERENCES planets(id),

);

