import Button from '~/components/Button';
import styles from './Header.module.scss';

import { BiHome } from 'react-icons/bi';
import { FaTaxi } from 'react-icons/fa';
import { MdHolidayVillage, MdHotel } from 'react-icons/md';
import { RiFlightTakeoffLine } from 'react-icons/ri';
function Header() {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div>
          <div className={styles.nav__profile}>
            <button className={styles.nav__profile_item}>
              <BiHome size={36} />
              <span>Become a Partner</span>
            </button>
            <button className={styles.nav__profile_item}>
              <img src="https://i.pinimg.com/550x/f1/5c/8e/f15c8e9aed7beb6b8fb5c4b95dcb3e6b.jpg" alt="avt" />
              <span>Become a Partner</span>
            </button>
          </div>
        </div>

        <Button>hung dai ca</Button>
        <div>
          <button>
            <RiFlightTakeoffLine size={36} />
            <p>FLIGHTS</p>
          </button>
          <button>
            <MdHotel size={36} />
            <p>HOTEL</p>
          </button>
          <button>
            <MdHolidayVillage size={36} />
            <p>VILLA</p>
          </button>
          <button>
            <FaTaxi size={36} />
            <p>TAXI</p>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
