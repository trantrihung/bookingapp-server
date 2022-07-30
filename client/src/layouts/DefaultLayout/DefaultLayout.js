import React from 'react';
import Header from '../components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import images from '~/assets/images';
import Footer from '~/layouts/components/Footer';
import Banner from './Banner';

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <img className={styles.clouds} src={images.clouds} alt="clouds" />
      <div className={styles.wrap}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={`${styles.content} container`}>
          <Header />
          <div className={styles.content__item}>{children}</div>
          <Banner />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
