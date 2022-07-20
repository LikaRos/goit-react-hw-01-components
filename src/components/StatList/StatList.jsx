import PropTypes from 'prop-types';
import { StatListItem } from 'components/StatListItem/StatListItem';

export const StatList = ({ items }) => {
  return (
    <ul className="stat-list">
      {items.map(({ id, label, percentage }) => (
        <StatListItem key={id} id={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

StatList.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
