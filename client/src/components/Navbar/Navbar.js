import images from '~/assets/images';
import styles from './Navbar.module.scss';

import { FaTaxi } from 'react-icons/fa';
import { MdHolidayVillage, MdHotel } from 'react-icons/md';
import { RiFlightTakeoffLine } from 'react-icons/ri';
import Button from '../Button';
function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__menu}>
        <Button to="/" topIcon={<RiFlightTakeoffLine size={30} />}>
          <p>FLIGHT</p>
        </Button>
        <Button to="/" topIcon={<MdHotel size={30} />}>
          <p>HOTEL</p>
        </Button>
        <Button to="/" topIcon={<MdHolidayVillage size={30} />}>
          <p>VILLA</p>
        </Button>
        <Button to="/" topIcon={<FaTaxi size={30} />}>
          <p>TAXI</p>
        </Button>
        {/* <button>
          <RiFlightTakeoffLine size={36} />
          <p>FLIGHTS</p>
        </button> */}
        {/* <button>
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
        </button> */}
      </div>
      <img className={styles.flight} src={images.flight} alt="flight" />
    </nav>
  );
}

export default Navbar;
