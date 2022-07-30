import images from '~/assets/images';
import styles from './HotelList.module.scss';

import { IoLocation } from 'react-icons/io5';
import { MdBathtub } from 'react-icons/md';
import { GiCctvCamera } from 'react-icons/gi';
import { BiWifi } from 'react-icons/bi';
import Button from '../Button';
import { AiFillStar } from 'react-icons/ai';

function Hotel() {
  return (
    <div className={styles.hotel}>
      <div className={styles.hotel__title}>
        <h3>Hotel</h3>
        <span>Total: </span>
        <span>100 result</span>
      </div>
      <div className={styles.hotel__content}>
        <div>
          <div className="row">
            <div className="col-4-xl">
              <img className={styles.hotel__content_img} src={images.ht1} alt="anh" />
            </div>
            <div className="col-8-xl">
              <div className={`${styles.hotel__content_top} `}>
                <div>
                  <h4>Taj Fort Aguada Resort & SpaCandolin, Goa</h4>
                  <p>Near railway staton, Shirdi</p>
                </div>
                <span>
                  rate <AiFillStar />
                </span>
              </div>

              <div className={`${styles.hotel__content_icon} `}>
                <p>
                  <IoLocation />
                  <span>Parking</span>
                </p>
                <p>
                  <MdBathtub />
                  <span>Attached Bathroom</span>
                </p>
                <p>
                  <GiCctvCamera />
                  <span>CCTV camera</span>
                </p>
                <p>
                  <BiWifi />
                  <span>Wifi</span>
                </p>
                <p>More+</p>
              </div>

              <div className={`${styles.hotel__content_bottom} d-flex`}>
                <span>25% off</span>
                <h4>$473</h4>
                <div>
                  <Button>View Details</Button>
                  <Button>BOOK NOW</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
