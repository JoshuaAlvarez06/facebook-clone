import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <h1>header</h1>

      {/* Left */}
      <div>
        <Image
          src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png'
          width={40}
          height={40}
          layout='fixed'
          alt='Facebook Logo'
        />
        <div>
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>

      {/* Center */}

      {/* Right */}
    </div>
  );
};

export default Header;
