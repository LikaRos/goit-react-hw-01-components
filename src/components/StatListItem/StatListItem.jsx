import PropTypes from 'prop-types';
import styles from './StatListItem.module.css';

export const StatListItem = ({ label, percentage }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage} % </span>
    </li>
  );
};

StatListItem.prototype = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
