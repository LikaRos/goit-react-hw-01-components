// export const Section = ({ title, children }) => {
//   return (
//     <>
//       {title && <h2>{title}</h2>}
//       <div>{children}</div>
//     </>
//   );
// };

import PropTypes from 'prop-types';
import styles from './Section.module.css';

export function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
