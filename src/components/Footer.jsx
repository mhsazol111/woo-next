import { motion } from 'framer-motion';

import styles from '../assets/css/Footer.module.css';

const Footer = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
      id={styles.main_footer}
      className="second_level_blur"
    >
      <h1>this is footer</h1>
    </motion.div>
  );
};

export default Footer;
