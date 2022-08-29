const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'A terrifying vision of isolation and violence!',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'This tense thriller provides a feast of interesting characters.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'A fun movie with a fair amount of heart, but not as strong as previous entries...',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'A movie so strange it becomes some sort of goth camp!',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'LA becomes the battleground of a fierce hunt in this satisfactory sequel.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'A heartwrenching, even gutwrenching horror thriller.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'An iconic scary movie if there ever was one!',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'A squad of action heroes are outnumbered in this iconic action movie.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Vampires have evolved into something more, and only Blade can stop them in this exciting sequel!',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'I have read that this movie has inspired other horror franchises and I am not surprised!',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'This movie was silly but I remember it fondly.',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'I think I prefer the new one, but this is a classic!',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'This is one of my favorite sci-fi alien stories now, honestly.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'It is a fun good time! I do not see the problem with it.',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'I love this robot so much you guys.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'I really felt the heart this movie had, it made mine swell up.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'I really appreciate the impact this movie had, even if it was understated.',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'Everyone always says this movie is overrated and I hugely disagree!',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      'I remember seeing this in theaters and bawling my eyes out!!',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      'If you ask me, the Peter Jackson remake is the best remake of this story.',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'Predators are my favorite sci-fi monster!',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'I love how the spinosaurus becomes the new villain immediately.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Best villain in movies tbh.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'People underrate this movie and I do not understand why!',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      'This movie deserved all the praise it got!',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Such a stupid movie, I love it though.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'I have never met anyone who disliked this movie.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'My least favorite remake, I think.',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'I think this movie is overrated!',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'I prefer the second one!',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'I love Danny Glover in this!',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'I think this is my favorite Kubrick film.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'This movie has an iconic jump scare and that is about all it has.',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'I love the speech at the end.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'I felt like I forgot everything about this movie when it ended.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'People do not get what makes this movie great and I think it is sad.',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'Easily my favorite action hero!',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'I think the first one is better.',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'I do not like horror movies made like this one at all!',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'Horror movies like this one are my absolute favorite!!',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text:
      'I think the new remake is better than the original.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Most overrated action flick.',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'This is my least favorite disaster movie...',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: "I love this director's movies.",
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      'I thought this movie was too slow!',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Overrated horror schlock',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'I think this movie is overhyping itself.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:
      'I am just not a fan of this movie no matter how much I try to enjoy it!',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'All time greats!',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'I love this movie!',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
