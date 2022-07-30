import styles from './SearchMenu.module.scss';
import Button from '../Button';

import { GiPositionMarker } from 'react-icons/gi';
import { MdEmojiPeople } from 'react-icons/md';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Search() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  return (
    <div>
      <div className={`${styles.search} `}>
        <div className="row gap-1">
          <div className="col-6-lg col-4-xl">
            <div className={`${styles.searchItem} `}>
              <p className={styles.searchItem_icon}>
                <GiPositionMarker />
                <label htmlFor="">FORM</label>
              </p>
              <input className={styles.searchItem_content} type="text" placeholder="Where are you want to go?" />
              <p className={styles.searchItem_icon}>Address</p>
            </div>
          </div>

          <div className="col-6-lg col-4-xl">
            <div className={`${styles.searchItem} `} onClick={() => setOpenDate(!openDate)}>
              <p className={styles.searchItem_icon}>
                <GiPositionMarker />
                <label htmlFor="">CHECK IN - OUT</label>
              </p>
              <span className={styles.searchItem_content}>
                {format(date[0].startDate, 'MM/dd/yyyy')} to {format(date[0].endDate, 'MM/dd/yyyy')}
              </span>
              <p className={styles.searchItem_icon}>Address</p>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              )}
            </div>
          </div>

          <div className="col-6-lg col-4-xl">
            <div className={`${styles.searchItem} `}>
              <p className={styles.searchItem_icon}>
                <MdEmojiPeople />
                <label htmlFor="">TO</label>
              </p>
              <span className={styles.searchItem_content}>3 adult - 1 children - 2 room</span>
              <p className={styles.searchItem_icon}>Address</p>
            </div>
          </div>
        </div>
        <div className="row gap-1 align-items-flex-end justify-space-between">
          <div className="col-2-xl">
            <div className={`${styles.searchItem} `}>
              <p className={styles.searchItem_icon}>
                <MdEmojiPeople />
                <label htmlFor="">RETURN</label>
              </p>
              <span className={styles.searchItem_content}>More</span>
              <p className={styles.searchItem_icon}>...</p>
            </div>
          </div>
          <div className={`${styles.btn}`}>
            <Button onClick={() => console.log('button')}>SEARCH FLIGHT</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
