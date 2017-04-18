DROP TABLE users;

create table users (
   user_id serial primary key,
   user_name varchar(255),
   loginid varchar(255),
   mail varchar(255),
   pw varchar(255),
   firiends int[],
   icon varchar(255),
   status int,
   memo varchar(255)
);
