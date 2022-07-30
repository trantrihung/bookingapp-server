import styles from './Header.module.scss';

import { ImHome3 } from 'react-icons/im';
import Navbar from '~/components/Navbar';
import Search from '~/components/SearchMenu';

function Header() {
  return (
    <div className={styles.nav}>
      <div className={styles.profile}>
        <button className={styles.profile_item}>
          <ImHome3 size={36} />
          <span>Become a Partner</span>
        </button>

        <button className={styles.profile_item}>
          <img src="https://i.pinimg.com/550x/f1/5c/8e/f15c8e9aed7beb6b8fb5c4b95dcb3e6b.jpg" alt="avt" />
          <span>Become a Partner</span>
        </button>
      </div>

      <Navbar />
      <Search />
    </div>
  );
}

export default Header;
