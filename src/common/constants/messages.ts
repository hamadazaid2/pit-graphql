export const ERRORS = {
  USER_ALREADY_EXISTS: 'User with the same email or username already exists',
  INCORRECT_DATA: 'Incorrect user data',
  QUESTION_NOT_FOUND: 'Question not found',
  INVALID_ROLE: 'Invalid role, user must be either user or admin',
  PASSWORD_VALIDATION_ERROR:
    'Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and must be at least 8 characters long',
  POST_NOT_FOUND: 'Post with that id is not founded',
  POST_WATCHERS_ERROR: "Can't delete post. Number of watcher is greater than 0",
  USER_NOT_AUTHORIZED: 'User not authorized to perform this action',
  USER_NOT_FOUNDED: 'User with this id is not founded',
  PASSWORD_IS_INCORRECT: 'Your current password is wrong',
  ALREADY_BLOCKED_USER: 'You have already blocked this user!',
  IS_NOT_BLOCKED_USER: 'You have already blocked this user!',
  USER_TRIED_TO_BLOCK_HIM_SELF: 'You are trying to block ur self!',
  BLOCK_IS_NOT_FOUNDED: 'There is no block with that id!',
  UNAUTHORIZED_BLOCK_REMOVE: 'You are not authorized to remove this block',
  BLOCKED_RESOURCE: "You can't see this resource because you are blocked",
  SENDING_FRIEND_REQUEST_TO_HIMSELF:
    'You are trying to send a friend request to yourself',
  REQUEST_FOR_ALREADY_FRIEND:
    'You are trying to send a friend request to a friend!',
  ALREADY_PENDING_REQUEST:
    'You are trying to send an already pending friend request',
  ALREADY_PENDING_REQUEST_NEED_TO_BE_ACCEPTED:
    'You are trying to send an already pending friend request, accept it to be friends',
  ALREADY_FRIEND: 'User already in your friend list',
  FRIENDSHIP_REQUEST_NOT_FOUNDED:
    'There is no a friendship request with that id!',
  FRIENDSHIPT_REQUEST_SENT_BY_YOU_ACCEPT_OR_DECLINE_MESSAGE:
    "This friendship request is sent by you! You can't accept/decline it!",
  FRIENDSHIPT_REQUEST_SENT_BY_YOU_CANCEL_MESSAGE:
    "This friendship request is sent by you! You can't cancel it!",
  FRIENDSHIPT_REQUEST_DOES_NOT_BELONGS_TO_YOU:
    "This friendship doesn't belongs to you!",
  FRIENDSHIPT_REQUEST_STATUS_IS_NOT_PENDING:
    'This request status is not pending!',
  ALREADY_FRIENDSHIP_REQUEST_REJECTED: 'This request already rejected !',
  FRIENDSHIPT_IS_NOT_EXISIS: 'Freindship with that id is not founded !',
  FRIENDSHIPT_DOES_NOT_BELONGS_TO_YOU: 'This friendship is not belongs to you!',
  FRIENDSHIPT_IS_NOT_ACCEPTED_YET: 'This friendship is not in accepted status!',
};
export const SUCCESS = {};
