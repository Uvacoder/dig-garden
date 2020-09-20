import React from 'react';
import { Link } from '@components';

function Branding() {
  return (
    <Link href="/" as="/" passHref>
      <span role="img" aria-label="seedling">
        🌱
      </span>
    </Link>
  );
}

export default Branding;
