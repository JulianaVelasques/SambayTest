import Cart from '../assets/cart.svg';
import Bell from '../assets/bell.svg';
import Search from '../assets/search.svg';

import Styles from '../styles/components/Header.module.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className={Styles.container}>
      <div className={Styles.blockContainer}>
        <div className={Styles.imageContainer}>
          <Link to="/">
            <img src="https://sambayexpress.com.br/static/media/logo.131f71d4.svg" alt="Sambay's logo" width="100px" />
          </Link>
        </div>
        <div className={Styles.inputContainer}>
          <img src={Search} alt="Search icon" />
          <input type="text" className={Styles.input} placeholder="Busque aqui seu produto" />
        </div>
      </div>

      <div className={Styles.blockContainer}>
        <div className={Styles.iconsContainer}>
          <img src={Bell} alt="Bell Icon" />
          <img src={Cart} alt="Cart Icon" />
        </div>
        <div className={Styles.profileContainer}>
          <img src="https://github.com/JulianaVelasques.png" alt="" />
        </div>
      </div>
    </div>
  );
}
