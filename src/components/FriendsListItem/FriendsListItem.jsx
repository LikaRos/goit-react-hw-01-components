import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';

export function FriendListItem({ avatar, friendName, isOnline }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.onLine : styles.offLine} />

      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{friendName}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  friendName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
