DROP DATABASE IF EXISTS werewolfdb;

CREATE DATABASE werewolfdb;
USE werewolfdb;

DROP TABLE IF EXISTS Room;
DROP TABLE IF EXISTS User;

CREATE TABLE User (
    userCode int AUTO_INCREMENT,
    userName varchar(100) NOT NULL,
    socketId varchar(100) NOT NULL,
    PRIMARY KEY (userCode)
);

CREATE TABLE Room (
    roomCode int AUTO_INCREMENT,
    creator int NOT NULL,
    PRIMARY KEY (roomCode),
    FOREIGN KEY (creator) REFERENCES User(userCode)
);

CREATE TABLE UserInRoom (
    userCode int,
    roomCode int,
    PRIMARY KEY (roomCode, userCode),
    FOREIGN KEY (userCode) REFERENCES User(userCode),
    FOREIGN KEY (roomCode) REFERENCES Room(roomCode)
);