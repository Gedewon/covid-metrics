import React from 'react';
import { CodeIcon } from '@heroicons/react/solid';

function Footer() {
  return (
    <footer className="flex w-full justify-around fixed bottom-0 bg-redBackground font-primary flex-1">
      <p>
        <CodeIcon className="h-6 w-6" />
      </p>
    </footer>
  );
}

export default Footer;
