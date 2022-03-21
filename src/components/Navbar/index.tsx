import React from 'react';

export default ({ children, className = '' }) => (
  <nav
    className={
      'relative select-none bg-grey lg:flex lg:items-stretch w-full text-white bg-gray-900 ' +
      className
    }
  >
    <div className='lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow'>
      {children}
    </div>
  </nav>
);
