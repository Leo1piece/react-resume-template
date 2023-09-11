import {FC, memo} from 'react';

import {socialLinks} from '../data/data';

const Socials: FC = memo(() => {
  return (
    <>
      {socialLinks.map(({label, Icon, href}) => (
        <a
          aria-label={label}
          className=" transform scale-100 hover:scale-110 transition-transform -m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 sm:-m-3 sm:p-3"
          href={href}
          key={label}>
          <Icon className="h-7 w-7 sm:h-8 sm:w-8 p-1 inline-block" />
          {label}
        </a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
