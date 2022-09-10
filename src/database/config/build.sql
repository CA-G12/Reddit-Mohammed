BEGIN ;

drop table if exists users, posts, comments, votes cascade;

create table users (
    id serial primary key,
    username varchar(20) not null,
    email  varchar(255) not null unique, 
    password text  not null,
    about text, 
    image text default 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg',
    has_Image boolean not null default false
);


create table posts (
    id serial primary key,
    title text  not null,
    content text  not null, 
    image text,
    created_at timestamp not null default CURRENT_TIMESTAMP,
    user_id int not null, 
    foreign key (user_id) references users(id) on delete cascade

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
    vote int not null default 0,
    PRIMARY KEY(user_id, post_id),
    foreign key (post_id) references posts(id) on delete cascade,
    foreign key (user_id) references users(id) on delete cascade
);

COMMIT;