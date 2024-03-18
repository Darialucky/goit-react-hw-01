import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FrendList = ({ friends }) => (
  <ul className={styles.friendlist}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className={styles.friendCard}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);
export default FrendList;
