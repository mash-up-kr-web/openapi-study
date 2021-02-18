import firebase from 'firebase/app';
import 'firebase/database';

import PostInterface from 'types/Post';

export async function getNextPostId() {
  const database = firebase.database().ref('/nextPostId');
  const snapshot = await database.once('value');

  return snapshot.val();
}

export async function increaseNextPostId() {
  const database = firebase.database().ref('/');
  const nextPostId = await getNextPostId();

  let updates = {};
  updates['nextPostId'] = nextPostId + 1;
  database.update(updates);
}

export async function createPost(post) {
  const database = firebase.database().ref('/posts');
  const postKey = database.push().key || '';

  let updates = {};
  updates[postKey] = post;
  await database.update(updates);
  increaseNextPostId();
}

export async function fetchPosts() {
  const NOW = new Date().getTime();
  const HOLDING_TIME = 5 * 60 * 1000;

  const database = firebase.database().ref('/posts');
  const filteredDatabase = database
    .orderByChild('date')
    .startAt(NOW - HOLDING_TIME);
  const snapshot = await filteredDatabase.once('value');

  let posts: PostInterface[] = [];
  snapshot.forEach(childSnapshot => {
    posts.push(childSnapshot.val());
  });

  return posts;
}
