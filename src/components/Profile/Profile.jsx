import PropTypes from 'prop-types';
// import { Profile } from './Profile.styled';
import styles from './Profile.module.css';

export function Profile({
  username,
  tag,
  location,
  avatar,
  followerStat,
  viewsStat,
  likesStat,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <img
          src={avatar}
          width="250"
          height="300"
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.label}>Followers </span>
          <span className={styles.quantity}>{followerStat}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views </span>
          <span className={styles.quantity}>
            {viewsStat.toLocaleString('en-US')}
          </span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes </span>
          <span className={styles.quantity}>{likesStat}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.prototype = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followerStat: PropTypes.number,
  viewsStat: PropTypes.number,
  likesStat: PropTypes.number,
};
