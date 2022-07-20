import user from '../data/user.json';
import friends from '../data/friends.json';
import data from '../data/data.json';
import transactions from '../data/transactions';
import { Section } from './Section/Section';
import { Profile } from './Profile/Profile';
import { StatList } from './StatList/StatList';
import { FriendList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    //  <div
    //    style={{np
    //      height: '100vh',
    //      display: 'flex',
    //      justifyContent: 'center',
    //      alignItems: 'center',
    //      fontSize: 40,
    //      color: '#010101'
    //    }}
    //  >
    //    React homework template
    //  </div>

    <div>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followerStat={user.stats.followers}
        viewsStat={user.stats.views}
        likesStat={user.stats.likes}
      />
      <Section title="Upload stats">
        <StatList
          items={data}
          //  key={data.id}
          //  id={data.id}
          //  label={data.label}
          //  percentage={data.percentage}
        />
      </Section>
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
