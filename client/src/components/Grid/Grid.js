import Button from '../Button';
import styles from './Grid.module.scss';

function Grid() {
  return (
    <div>
      <Button>
        <div className={styles.test}>
          <p>hung</p>
          <p>dai ca</p>
        </div>
      </Button>
    </div>
  );
}

export default Grid;
