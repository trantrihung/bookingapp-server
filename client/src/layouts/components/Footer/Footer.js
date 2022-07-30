import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <div className="container">
        <div className="row">
          <div className="col-3-xl">
            <h2>Booking app</h2>
          </div>
          <div className="col-3-xl">
            <ul>
              <li>
                <Link to="/">Cách đặt chỗ</Link>
              </li>
              <li>
                <Link to="/">Liên hệ chúng tôi</Link>
              </li>
              <li>
                <Link to="/"> Trợ giúp</Link>
              </li>
              <li>
                <Link to="/">Tuyển dụng</Link>
              </li>
              <li>
                <Link to="/">Về chúng tôi</Link>
              </li>
            </ul>
          </div>
          <div className="col-3-xl">
            <ul>
              <li>
                <Link to="/">Vé máy bay</Link>
              </li>
              <li>
                <Link to="/">Khách sạn</Link>
              </li>
              <li>
                <Link to="/">JR pass</Link>
              </li>
              <li>
                <Link to="/">Combo tiết kiệm</Link>
              </li>
              <li>
                <Link to="/">Xperience</Link>
              </li>
              <li>
                <Link to="/">Car Rental</Link>
              </li>
              <li>
                <Link to="/">Biệt thự</Link>
              </li>
              <li>
                <Link to="/">Căn hộ</Link>
              </li>
              <li>
                <Link to="/">Đưa đón sân bay</Link>
              </li>
            </ul>
          </div>
          <div className="col-3-xl">
            <ul>
              <li>
                <Link to="/">Booking Affiliate</Link>
              </li>
              <li>
                <Link to="/">Bookng Blog</Link>
              </li>
              <li>
                <Link to="/">Chính sách quyền riêng tư</Link>
              </li>
              <li>
                <Link to="/">Điều khoản và điều kiện</Link>
              </li>
              <li>
                <Link to="/">Quy chế hoạt động</Link>
              </li>
              <li>
                <Link to="/">Đăng ký nơi nghỉ của bạn</Link>
              </li>
              <li>
                <Link to="/">Đăng ký doanh nghiệp hoạt động của du lịch của bạn</Link>
              </li>
              <li>
                <Link to="/">Khu vực báo chí</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
