import styles from './Sidebar.module.scss';
import Button from '~/components/Button';
import logo from '~/assets/images/logo.svg';

import { CgMenuRight } from 'react-icons/cg';
import { AiTwotoneHome } from 'react-icons/ai';
import { FaWallet } from 'react-icons/fa';
import { TbBrandBooking } from 'react-icons/tb';
import { BiWorld } from 'react-icons/bi';
import { MdSupportAgent } from 'react-icons/md';
import { BsFillAwardFill } from 'react-icons/bs';

function Sidebar() {
  return (
    <div className={styles.wrap}>
      <div className={styles.wrap_item}>
        <div className={styles.sidebar}>
          <div className={styles.sidebar__title}>
            <h2>Bookler</h2>
            <CgMenuRight size={28} />
          </div>
          <div className={styles.sidebar__menu}>
            <Button size="small" rounded leftIcon={<AiTwotoneHome />} to="/">
              Home
            </Button>
            <Button size="small" rounded leftIcon={<FaWallet />} to="/Detail">
              Wallet
            </Button>
            <Button size="small" rounded leftIcon={<TbBrandBooking />} to="/Search">
              Booking
            </Button>
            <Button size="small" rounded leftIcon={<BiWorld />} to="/Search">
              Explore
            </Button>
            <Button size="small" rounded leftIcon={<MdSupportAgent />} to="/Search">
              Support
            </Button>
          </div>
          <div>
            <Button className="premium" avtLeft={<BsFillAwardFill />} secondary rounded to="/">
              Get Premium
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
