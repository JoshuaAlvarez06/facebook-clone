import Image from 'next/image';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  UserGroupIcon,
  HomeIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import HeaderIcon from './HeaderIcon';

const Header = () => {
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
      {/* Left */}
      <div className='flex items-center'>
        <Image
          src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png'
          width={40}
          height={40}
          layout='fixed'
          alt='Facebook Logo'
        />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='text-gray-600 h-6' />
          <input
            className='hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink'
            type='text'
            placeholder='Search Facebook'
          />
        </div>
      </div>

      {/* Center */}
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className='flex items-center sm:space-x-2 justify-end'>
        {/* Profile picture */}
        <p className='font-semibold pr-3 whitespace-nowrap'>Joshua Alvarez</p>
        <ViewGridIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
      </div>
    </div>
  );
};

export default Header;
