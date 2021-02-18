import firebase from 'firebase/app';
import 'firebase/database';

import CommentInterface from 'types/Comment';

export async function getNextCommentId() {
  const database = firebase.database().ref('/nextCommentId');
  const snapshot = await database.once('value');

  return snapshot.val();
}

export async function increaseNextCommentId() {
  const database = firebase.database().ref('/');
  const nextCommentId = await getNextCommentId();

  let updates = {};
  updates['nextCommentId'] = nextCommentId + 1;
  database.update(updates);
}

export async function createComment(comment) {
  const database = firebase.database().ref('/comments');
  const commentKey = database.push().key || '';

  let updates = {};
  updates[commentKey] = comment;
  await database.update(updates);
  increaseNextCommentId();
}

export async function fetchComments(postId) {
  console.log(postId);
  const database = firebase.database().ref('/comments');
  const filteredDatabase = database.orderByChild('postId').equalTo(postId);
  const snapshot = await filteredDatabase.once('value');

  let comments: CommentInterface[] = [];
  snapshot.forEach(childSnapshot => {
    comments.push(childSnapshot.val());
  });

  return comments;
}
