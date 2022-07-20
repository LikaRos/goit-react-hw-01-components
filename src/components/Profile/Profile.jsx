import PropTypes from 'prop-types';

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
    <div className="profile">
      <div className="description">
        <img src={avatar} width="200" alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{followerStat}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{viewsStat}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{likesStat}</span>
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
