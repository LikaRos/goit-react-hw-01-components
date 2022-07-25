import styles from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.transactionTitle}>
        <tr className={styles.transactionRow}>
          <th className={styles.transactionHead}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={styles.tableRow} key={id}>
            <td className={styles.transactionData}>{type}</td>
            <td className={styles.transactionData}>{amount}</td>
            <td className={styles.transactionData}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Comment
