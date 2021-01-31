import { Tween } from 'react-gsap';

import styles from '../assets/css/Footer.module.css';

const Footer = () => {
  return (
    <Tween from={{ y: 30, delay: 0.5, opacity: 0 }} duration={0.7} ease="power3.out">
      <div id={styles.main_footer} className="second_level_blur">
        <h1>this is footer</h1>
      </div>
    </Tween>
  );
};

export default Footer;
