DROP DATABASE IF EXISTS werewolfdb;

CREATE DATABASE werewolfdb;
USE werewolfdb;

DROP TABLE IF EXISTS Room;
DROP TABLE IF EXISTS User;

CREATE TABLE Room (
    roomCode int AUTO_INCREMENT,
    roomName varchar(100),
    PRIMARY KEY (roomCode)
);

CREATE TABLE User (
    userCode int AUTO_INCREMENT,
    userName varchar(100) NOT NULL,
    socketId varchar(100) NOT NULL,
    creator boolean NOT NULL,
    roomCode int NOT NULL,
    PRIMARY KEY (userCode),
    FOREIGN KEY (roomCode) REFERENCES Room(roomCode)
);
