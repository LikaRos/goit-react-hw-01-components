import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendsListItem/FriendsListItem';

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {' '}
      {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendListItem
          key={id}
          id={id}
          avatar={avatar}
          friendName={name}
          status={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friendName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  avatar: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
};
