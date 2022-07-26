import images from '~/assets/images';
import Button from '../Button';
import styles from './Offer.module.scss';

function Offer() {
  return (
    <div className={styles.offer}>
      <div className={styles.offer__title}>
        <h2>Best Offer</h2>
        <p>view all</p>
      </div>
      <div>
        <div className="row gap-2">
          <div className={`col-3-xl ${styles.btn}`}>
            <Button to="/" imgLeft={images.ht2}>
              <h3 className={styles.btn_Pr}>Alexandria</h3>
              <span className={styles.btn_Title}>Best Hotel, villa</span>
            </Button>
          </div>
          <div className={`col-3-xl ${styles.btn}`}>
            <Button to="/" imgLeft={images.ht2}>
              <h3 className={styles.btn_Pr}>Alexandria</h3>
              <span className={styles.btn_Title}>Best Hotel, villa</span>
            </Button>
          </div>
          <div className={`col-3-xl ${styles.btn}`}>
            <Button to="/" imgLeft={images.ht2}>
              <h3 className={styles.btn_Pr}>Alexandria</h3>
              <span className={styles.btn_Title}>Best Hotel, villa</span>
            </Button>
          </div>
          <div className={`col-3-xl ${styles.btn}`}>
            <Button to="/" imgLeft={images.ht2}>
              <h3 className={styles.btn_Pr}>Alexandria</h3>
              <span className={styles.btn_Title}>Best Hotel, villa</span>
            </Button>
          </div>
          <div className={`col-3-xl ${styles.btn}`}>
            <Button to="/" imgLeft={images.ht2}>
              <h3 className={styles.btn_Pr}>Alexandria</h3>
              <span className={styles.btn_Title}>Best Hotel, villa</span>
            </Button>
          </div>
          <div className={`col-3-xl ${styles.btn}`}>
            <Button to="/" imgLeft={images.ht2}>
              <h3 className={styles.btn_Pr}>Alexandria</h3>
              <span className={styles.btn_Title}>Best Hotel, villa</span>
            </Button>
          </div>
          <div className={`col-3-xl ${styles.btn}`}>
            <Button to="/" imgLeft={images.ht2}>
              <h3 className={styles.btn_Pr}>Alexandria</h3>
              <span className={styles.btn_Title}>Best Hotel, villa</span>
            </Button>
          </div>
          <div className={`col-3-xl ${styles.btn}`}>
            <Button to="/" imgLeft={images.ht2}>
              <h3 className={styles.btn_Pr}>Alexandria</h3>
              <span className={styles.btn_Title}>Best Hotel, villa</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
