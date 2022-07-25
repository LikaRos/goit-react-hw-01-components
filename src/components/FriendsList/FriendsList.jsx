import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendsListItem/FriendsListItem';
import styles from './FriendsList.module.css';

export function FriendList({ friends }) {
  return (
    <div className={styles.wrap}>
      <ul className={styles.friendList}>
        {' '}
        {friends.map(({ avatar, name, id, isOnline }) => (
          <FriendListItem
            key={id}
            id={id}
            avatar={avatar}
            friendName={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  FriendListItem: PropTypes.arrayOf(
    PropTypes.shape({
      friendName: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      avatar: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
