import PropTypes from 'prop-types';
import { StatListItem } from 'components/StatListItem/StatListItem';
import styles from './StatList.module.css';
export const StatList = ({ items }) => {
  return (
    <ul className={styles.statList}>
      {items.map(({ id, label, percentage }) => (
        <StatListItem key={id} id={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

StatList.propTypes = {
  StatListItem: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
