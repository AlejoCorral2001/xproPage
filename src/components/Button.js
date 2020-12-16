import React from 'react';
import {Link} from 'gatsby'
const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({  children, className = '', size, link }) => {
  return (
    <Link to={link?link:'/'}>
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
     
        bg-primary
        hover:bg-primary-darker
        rounded
        text-white
        ${className}
    `}
    >
      {children}
    </button>
    </Link>
  );
};

export default Button;
