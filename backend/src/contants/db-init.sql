create database birdie_dev;
use birdie_dev;

create table users(
    id varchar(36) primary key,
    names varchar(100) not null,
    email varchar(255),
    password varchar(255),
    phone int(10),
    role varchar(25) not null,
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
    visits text,
    names varchar(255)
)
