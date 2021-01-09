import Image from 'next/image';

const Header = () => {
  return (
    <header id="main-header">
      <div className="top-header">
        <div className="top-header-inner xl:pl-10 xl:pr-10 md:pl-6 md:pr-6 pl-4 pr-4 border-b border-gray-200 flex justify-between items-center">
          <div className="header-icons flex items-center">
            <div className="hi-item pr-5 pb-2 pt-2 border-r border-gray-200">
              <a href="mailto:user@domain.com" className="no-underline flex items-center">
                <Image src="/images/email.svg" width={17} height={17} />
                <span className="text-xs pl-2">user@domain.com</span>
              </a>
            </div>
            <div className="hi-item pr-5 pl-5 pb-2 pt-2 border-r border-gray-200">
              <a href="tel:+123456790" className="no-underline flex items-center">
                <Image src="/images/telephone.svg" width={17} height={17} />
                <span className="text-xs pl-2">+1234567890</span>
              </a>
            </div>
          </div>

          <div className="header-icons flex items-center">
            <div className="hi-item pr-5 pl-5 pb-2 pt-2 border-l border-gray-200">
              <a href="#" className="no-underline flex items-center">
                <Image src="/images/password.svg" width={17} height={17} />
                <span className="text-xs pl-2">Login</span>
              </a>
            </div>
            <div className="hi-item pl-5 pb-2 pt-2 border-l border-gray-200">
              <a href="tel:+123456790" className="no-underline flex items-center">
                <Image src="/images/password.svg" width={17} height={17} />
                <span className="text-xs pl-2">Register</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
