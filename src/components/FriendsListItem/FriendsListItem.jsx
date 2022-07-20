import PropTypes from 'prop-types';

export function FriendListItem({ avatar, friendName, isOnline }) {
  return (
    <li class="item">
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{friendName}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  friendName: PropTypes.string.isRequired,
  avatar: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
};
