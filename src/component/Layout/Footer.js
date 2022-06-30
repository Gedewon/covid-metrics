import React from 'react';
import { CodeIcon } from '@heroicons/react/solid';

function Footer() {
  return (
    <footer className="flex w-full justify-around fixed bottom-0 bg-redBackground font-primary flex-1">
      <a href='https://github.com/Gedewon/covid-metrics' target={'_blank'}>
        <CodeIcon className="h-6 w-6" />
      </a>
    </footer>
  );
}

export default Footer;
