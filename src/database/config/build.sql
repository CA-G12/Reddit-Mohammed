BEGIN ;

drop table if exists users, posts, comments, communities, user_community, votes cascade;

create table users (
    id serial primary key,
    username varchar(20) not null,
    email  varchar(255) not null unique, 
    password text  not null,
    about text, 
    image text default 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
);

create table communities (
  id serial primary key,
  name varchar(21),
  created_at timestamp not null default CURRENT_TIMESTAMP,
  about text,
  image text default 'https://miro.medium.com/max/1200/1*M-b093jQIpmapIIaxH7N7g.jpeg'
);
create table user_community(
  id serial primary key,
  user_id int,
  community_id int,
  foreign key (user_id) references users(id) on delete cascade,
  foreign key (community_id) references communities(id) on delete cascade
);

create table posts (
    id serial primary key,
    title text  not null,
    content text  not null, 
    image text,
    created_at timestamp not null default CURRENT_TIMESTAMP,
    user_id int not null, 
    community_id int not null,
    foreign key (user_id) references users(id) on delete cascade,
    foreign key (community_id) references communities(id) on delete cascade

);
create table comments (
    id serial primary key ,
    content text  not null , 
    user_id int, 
    post_id int, 
    foreign key (user_id) references users(id) on delete cascade,
    foreign key (post_id) references posts(id) on delete cascade
);
CREATE TABLE votes(
    user_id int not null,
    post_id int not null,
    PRIMARY KEY(user_id, post_id),
    foreign key (post_id) references posts(id) on delete cascade,
    foreign key (user_id) references users(id) on delete cascade
);
COMMIT;