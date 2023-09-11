import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const BlogIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M25.3 13.3H24c-.7 0-1.3-.6-1.3-1.3 0-3.7-3-6.7-6.7-6.7h-4c-3.7 0-6.7 3-6.7 6.7v8c0 3.7 3 6.7 6.7 6.7h8c3.7 0 6.7-3 6.7-6.7v-5.3c0-.8-.6-1.4-1.4-1.4zm-13.4-2.6h4.8c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3h-4.8c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3zm8.2 10.6H12c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3h8.1c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3z"
      fill="currentColor"></path>
  </Icon>
));

export default BlogIcon;
