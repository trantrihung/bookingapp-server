import images from '~/assets/images';
import Button from '../Button';
import styles from './Carousel.module.scss';

function Carousel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__title}>
        <h2>Trip Package</h2>
        <p>View all</p>
      </div>
      <div className="row gap-2">
        <div className="col-4-lg">
          <div className={`${styles.carousel__items}`}>
            <img className={styles.carousel__background} src={images.ht1} alt="ht" />
            <div className={`${styles.carousel__item}`}>
              <div>
                <span className={`${styles.carousel__item_title} `}>START FROM</span>
                <h3 className={styles.carousel__item_titlePr}>$599</h3>
              </div>
              <div className={`${styles.btn}`}>
                <Button to="/" imgLeft={images.ht2}>
                  <h3 className={styles.btn_Pr}>Alexandria</h3>
                  <span className={styles.btn_Title}>Best Hotel, villa</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4-lg">
          <div className={`${styles.carousel__items}`}>
            <img className={styles.carousel__background} src={images.ht1} alt="ht" />
            <div className={`${styles.carousel__item}`}>
              <div>
                <span className={`${styles.carousel__item_title} `}>START FROM</span>
                <h3 className={styles.carousel__item_titlePr}>$599</h3>
              </div>
              <div className={`${styles.btn}`}>
                <Button to="/" imgLeft={images.ht2}>
                  <h3 className={styles.btn_Pr}>Alexandria</h3>
                  <span className={styles.btn_Title}>Best Hotel, villa</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4-lg">
          <div className={`${styles.carousel__items}`}>
            <img className={styles.carousel__background} src={images.ht1} alt="ht" />
            <div className={`${styles.carousel__item}`}>
              <div>
                <span className={`${styles.carousel__item_title} `}>START FROM</span>
                <h3 className={styles.carousel__item_titlePr}>$599</h3>
              </div>
              <div className={`${styles.btn}`}>
                <Button to="/" imgLeft={images.ht2}>
                  <h3 className={styles.btn_Pr}>Alexandria</h3>
                  <span className={styles.btn_Title}>Best Hotel, villa</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
