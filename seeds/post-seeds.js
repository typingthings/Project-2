const { Post } = require('../models');

const postdata = [
  {
    title: 'The Shining',
    post_url: 'https://www.youtube.com/watch?v=5Cb3ik6zP2I',
    user_id: 10
  },
  {
    title: 'Iron Giant',
    post_url: 'https://www.youtube.com/watch?v=obLtyj8hfFk',
    user_id: 8
  },
  {
    title: 'Independance Day',
    post_url: 'https://www.youtube.com/watch?v=B1E7h3SeMDk',
    user_id: 1
  },
  {
    title: 'Predator',
    post_url: 'https://www.youtube.com/watch?v=_1wDBNHYDv8',
    user_id: 4
  },
  {
    title: 'Predator 2',
    post_url: 'https://www.youtube.com/watch?v=pLe_1SheJms',
    user_id: 7
  },
  {
    title: 'The Day After Tomorrow',
    post_url: 'https://www.youtube.com/watch?v=HUBDFoMNXzA',
    user_id: 4
  },
  {
    title: 'Psycho',
    post_url: 'https://www.youtube.com/watch?v=NG3-GlvKPcg',
    user_id: 1
  },
  {
    title: 'No Country for Old Men',
    post_url: 'https://www.youtube.com/watch?v=38A__WT3-o0',
    user_id: 1
  },
  {
    title: 'Arrival',
    post_url: 'https://www.youtube.com/watch?v=tFMo3UJ4B4g',
    user_id: 9
  },
  {
    title: 'Jurassic Park 3',
    post_url: 'https://www.youtube.com/watch?v=EwhpCA6Lsr0',
    user_id: 5
  },
  {
    title: 'Die Hard',
    post_url: 'https://www.youtube.com/watch?v=jaJuwKCmJbY',
    user_id: 3
  },
  {
    title: 'Blade 2',
    post_url: 'https://www.youtube.com/watch?v=vAUB7dcUn8o',
    user_id: 10
  },
  {
    title: 'The Notebook',
    post_url: 'https://www.youtube.com/watch?v=FC6biTjEyZw',
    user_id: 8
  },
  {
    title: '50 First Dates',
    post_url: 'https://www.youtube.com/watch?v=Q_2AbjYeSMI',
    user_id: 3
  },
  {
    title: 'Parasite',
    post_url: 'https://www.youtube.com/watch?v=isOGD_7hNIY',
    user_id: 3
  },
  {
    title:'King Kong',
    post_url: 'https://www.youtube.com/watch?v=AYaTCPbYGdk',
    user_id: 7
  },
  {
    title: 'Godzilla',
    post_url: 'https://www.youtube.com/watch?v=MSrUHoc9LIE',
    user_id: 6

  },
  {
    title: 'Batman Returns',
    post_url: 'https://www.youtube.com/watch?v=TlbtLfWvFbo',
    user_id: 4
  },
  {
    title: 'Insidious',
    post_url: 'https://www.youtube.com/watch?v=zuZnRUcoWos',
    user_id: 6
  },
  {
    title: "Jacob's Ladder",
    post_url: 'https://www.youtube.com/watch?v=GmuieIEV2mU',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
