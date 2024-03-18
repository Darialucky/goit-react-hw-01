import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.head}>Type</th>
          <th className={styles.head}>Amount</th>
          <th className={styles.head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
