import images from '~/assets/images';
import styles from './HotelList.module.scss';

import { IoLocation } from 'react-icons/io5';
import { MdBathtub } from 'react-icons/md';
import { GiCctvCamera } from 'react-icons/gi';
import { BiWifi } from 'react-icons/bi';

function Hotel() {
  return (
    <div className={styles.hotel}>
      <div className={styles.hotel__title}>
        <h3>Hotel</h3>
        <span>Total </span>
      </div>
      <div classname={styles.hotel__content}>
        <div>
          <div className="row">
            <div className="col-4-xl">
              <img className={styles.hotel__content_img} src={images.ht1} alt="anh" />
            </div>
            <div className="col-8-xl">
              <h4>Taj Fort Aguada Resort & SpaCandolin, Goa</h4>
              <p>Near railway staton, Shirdi</p>
              <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
