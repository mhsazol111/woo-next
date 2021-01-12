import Image from 'next/image';
import Link from 'next/link';

import styles from '../assets/css/Header.module.css';

const Header = () => {
  return (
    <header id={styles.main_header}>
      <div className={`second_level_blur ${styles.top_header}`}>
        <div className="top_header_inner pl-4 pr-4 flex justify-between items-center">
          <div className="header_icons flex items-center">
            <div className="hi_item pr-5 pb-2 pt-2 border-r border-gray-50">
              <a href="mailto:user@domain.com" className="no-underline flex items-center">
                <Image src="/images/email.svg" width={17} height={17} />
                <span className="text-xs pl-2">user@domain.com</span>
              </a>
            </div>
            <div className="hi_item pr-5 pl-5 pb-2 pt-2 border-r border-gray-50">
              <a href="tel:+123456790" className="no-underline flex items-center">
                <Image src="/images/telephone.svg" width={17} height={17} />
                <span className="text-xs pl-2">+1234567890</span>
              </a>
            </div>
          </div>

          <div className="header_icons flex items-center">
            <div className="hi_item pr-5 pl-5 pb-2 pt-2 border-l border-gray-50">
              <a href="#" className="no-underline flex items-center">
                <Image src="/images/login.svg" width={17} height={17} />
                <span className="text-xs pl-2">Login</span>
              </a>
            </div>
            <div className="hi_item pl-5 pb-2 pt-2 border-l border-gray-50">
              <a href="tel:+123456790" className="no-underline flex items-center">
                <Image src="/images/register.svg" width={17} height={17} />
                <span className="text-xs pl-2">Register</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="primary_header">
        <div className="primary_header_inner flex justify-between">
          <div className="site-logo">
            <Link href="/">
              <a>
                <Image src="/vercel.svg" width={282} height={64} layout="intrinsic" alt="Logo" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
