import styles from './Card.module.scss';
import images from '~/assets/images';
import Button from '../Button';

import { FaStar } from 'react-icons/fa';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';

function Card({ onClickFavorite, favorite }) {
  const [width, setWidth] = useState('');
  const ref = useRef();

  useEffect(() => {
    setWidth(ref.current.clientWidth);
    const changeWidth = () => {
      setWidth(ref.current.clientWidth);
    };
    window.addEventListener('resize', changeWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    //cleanup function
    return () => window.addEventListener('resize', changeWidth);
  }, [width]);
  return (
    <div className="col-4-xl">
      <div ref={ref} className={styles.featured__content}>
        <span onClick={onClickFavorite} className={styles.featured__content_favorite}>
          {favorite ? <MdFavorite size={20} color="red" /> : <MdFavoriteBorder size={20} />}
        </span>
        <img
          style={{ height: `calc(${width}px + 20px)` }}
          className={styles.featured__content_img}
          src={images.ht}
          alt="img"
        />
        <div className={`${styles.featured__content_booking} row`}>
          <div className={`col-6-xl ${styles.featured__content_booking_title}`}>
            <h3>Art Hotel asldkfj alskdf jalskd jfals;k jfasl;jf</h3>
            <p>$200/night </p>
          </div>
          <div className="col-6-xl">
            <span className={styles.icon}>
              <span>4.98</span>
              <FaStar size={13} color={'yellow'} />
            </span>

            <Button to="/">Booking now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
