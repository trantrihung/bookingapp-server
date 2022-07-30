import { useState } from 'react';

import Card from '../Card';
import styles from './Featured.module.scss';

function Featured() {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className={styles.featured}>
      <div className={styles.featured__title}>
        <h2> Popular places</h2>
        <p>View all</p>
      </div>
      <div className="row gap-2">
        <Card onClickFavorite={handleFavorite} favorite={favorite} />
        <Card onClickFavorite={handleFavorite} favorite={favorite} />
        <Card onClickFavorite={handleFavorite} favorite={favorite} />
        <Card onClickFavorite={handleFavorite} favorite={favorite} />
        <Card onClickFavorite={handleFavorite} favorite={favorite} />
      </div>
    </div>
  );
}

export default Featured;
