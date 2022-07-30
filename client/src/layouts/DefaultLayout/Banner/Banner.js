import images from '~/assets/images';
import Button from '~/components/Button';
import styles from './Banner.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__title}>
        <h3>Book Your Perfect Deals</h3>
        <h1>
          $547 <span>starting at</span>
        </h1>
      </div>
      <Button to="/">BOOK NOW</Button>
      <img src={images.book} alt="footer" />
    </div>
  );
}

export default Footer;
