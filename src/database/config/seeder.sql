insert into users (
    username,
    email,
    password
    ) 
    values 
    (
    'mohammed12',
    'mohammed@gmail.com',
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
    password
    ) 
    values 
    (
    'hmza',
    'hmza@gmail.com',
    'moh12345'
);
insert into communities (
    name,
    about,
    image
     )
    values 
     (
   'Real Mardrid Lovers', --1
   'Madriesta only',
   'https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-05/CristianoRonaldo%20-%20cropped.jpg?itok=zey63ZFY'
    );

insert into communities (
    name,
    about,
    image 

    )
    values 
   (
  'Barclona Lovers', --2
  'Feseca Barca',
  'https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-05/CristianoRonaldo%20-%20cropped.jpg?itok=zey63ZFY'
   );

insert into communities (
    name,
    about
    )
    values 
   (
  'Byren Lovers',
  'Byren munch'  --3
   );
insert into communities (
    name,
    about
    )
    values 
   (
  'Munshiseter Lovers',
  'Munshiseter city'  --4
   );
   insert into communities (
    name,
    about
    )
    values 
   (
  'Liverpool Lovers',
  'Liverpool'  --5
   );
   insert into communities (
    name,
    about
    )
    values 
   (
  'cheelse Lovers',
  'cheelse' --6
   );
insert into user_community (
    user_id,
    community_id    
     )
    values
    (
     1,
     2 --barc
     );
insert into user_community (
    user_id,
    community_id
   )
   values
   (
   2,
   1  --real
   );
   insert into user_community (
    user_id,
    community_id
    
   )
   values
   (
   3,
   1 --rea

   );
      insert into user_community (
    user_id,
    community_id
    
    )
    values
    (
    1,
    1  --rea
    );
  insert into user_community (
    user_id,
    community_id
    
    )
    values
    (
    1,
    3 --byren
    );
      insert into user_community (
    user_id,
    community_id
    
    )
    values
    (
    1,
    3  --byern
    );
          insert into user_community (
    user_id,
    community_id
    )
    values
    (
    1,
   5 --liver
    );
             insert into user_community (
    user_id,
    community_id
    )
    values
    (
    2,
   5 --liver
    );
                 insert into user_community (
    user_id,
    community_id
    )
    values
    (
    2,
   4 --manc
    );
            insert into user_community (
    user_id,
    community_id
    )
    values
    (
    3,
   5 --liver
    );
                insert into user_community (
    user_id,
    community_id
    )
    values
    (
    4,
   1 --real
    );

--**************************************************************************
insert into posts (
    title,
    content,
    user_id,
    community_id
    ) 
    values 
    (
    'Ronaldo is not best player',
    'Ronaldo is not best player',
    1,
    2 
);
insert into posts (
    title,
    content,
    user_id,
    community_id
    ) 
    values 
    (
    'this is the second post',
    'Ronaldo is not best player',
    1,
    2
);
insert into posts (
    title,
    content,
    image,
    vote,
    user_id,
    community_id
    ) 
    values 
    (
    'messi is not best player',
    'messi is not best player',
    'https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-05/CristianoRonaldo%20-%20cropped.jpg?itok=zey63ZFY',
    5,
    2,
    1

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
