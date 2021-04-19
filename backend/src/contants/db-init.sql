create database birdie-dev;
use birdie-dev;

create table users(
    id int auto_increment primary key,
    phone int 
    email text not null,
    password text not null,
    createdAt datetime,
    updatedAt datetime
);

create table visits(
    id int auto_increment primary key,
);
