create database birdie-dev;
use birdie-dev;

create table users(
    id varchar(36) primary key,
    names varchar(100) not null,
    email varchar(255),
    password varchar(255),
    role varchar(25),
    address varchar(255)
);

create table visits(
    id varchar(36) primary key,
    date datetime,
    care_giver_id varchar(36),
    care_recipient_id varchar(36),
    note text,
    event_type varchar
);

create table care_recipient(
    id varchar(36),
    familly_members text,
    visits text
)
