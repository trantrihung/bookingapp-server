import React from 'react';
import Header from '../components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.wrap}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
