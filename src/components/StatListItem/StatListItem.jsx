import PropTypes from 'prop-types';

export const StatListItem = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

StatListItem.prototype = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
