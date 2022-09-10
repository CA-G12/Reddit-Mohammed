insert into users (
    username,
    email,
    password
    ) 
    values 
    (
    'said',
    'mohmaed@gmail.com',
    'moh12345'
);
insert into users (
    username,
    email,
    password
    ) 
    values 
    (
    'sami',
    'mohamme2kkk2d@gmail.com',
    'moh12345'
);
insert into users (
    username,
    email,
    password
    ) 
    values 
    (
    'rafi',
    'mohamm22e22d@gmail.com',
    'moh12345'
);
insert into users (
    username,
    email,
    password
    ) 
    values 
    (
    'mohammed',
    'mohammekk2211d@gmail.com',
    'moh12345'
);
insert into users (
    username,
    email,
    password,
    image
    ) 
    values 
    (
    'mustafa',
    'mustafa@gmail.com',
    'mustafa12345',
    'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'

);
insert into users (
    username,
    email,
    password,
    image
    ) 
    values 
    (
    'Lina',
    'lina@gmail.com',
    'lina12345',
    'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'

);
insert into users (
    username,
    email,
    password,
    about
    ) 
    values 
    (
    'hmza',
    'hmza@gmail.com',
    'moh12345',
    'Hello I am hamza, l love programming and I hate design and css'
);
insert into users (
    username,
    email,
    password
    ) 
    values 
    (
    'hmza123',
    'hmza@gm22ail.com',
    'moh1234$$5'
);

--**************************************************************************
insert into posts (
    title,
    content,
    user_id
    ) 
    values 
    (
    'Ronaldo is not best player',
    'Ronaldo is not best player',
    1
);
insert into posts (
    title,
    content,
    user_id
    ) 
    values 
    (
    'this is the second post',
    'Ronaldo is not best player',
    1
);
insert into posts (
    title,
    content,
    image,
    user_id
    ) 
    values 
    (
    'messi is not best player',
    'messi is not best player',
    'https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-05/CristianoRonaldo%20-%20cropped.jpg?itok=zey63ZFY',
    2

);

insert into comments (
    content,
    user_id,
    post_id
    ) 
    values 
    (
    'comment from user 1 to post 2',
    1,
    2
);
insert into comments (
    content,
    user_id,
    post_id
    ) 
    values 
    (
    'comment from user 2 to post 1',
    2,
    1
);


insert into votes (
   user_id,
   post_id,
   vote
)
values (
    2,
    1,
    0
);
insert into votes (
   user_id,
   post_id,
   vote
)
values (
    3,
    1,
    1
);

insert into votes (
   user_id,
   post_id,
   vote
)
values (
    2,
   2,
   1
);
insert into votes (
   user_id,
   post_id,
   vote
)
values (
    1,
   2,
   -1
);

insert into votes (
   user_id,
   post_id,
   vote
)
values (
    4,
    3,
   -1
);
insert into votes (
   user_id,
   post_id,
   vote
)
values (
    4,
    1,
   -1
);
