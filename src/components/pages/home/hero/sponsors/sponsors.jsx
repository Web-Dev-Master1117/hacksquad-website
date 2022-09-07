import React from 'react';

import amplicationLogo from './images/amplication.url.svg';
import dailyDevLogo from './images/daily-dev.url.svg';
import medusaLogo from './images/medusa.url.svg';
import vercelLogo from './images/vercel.url.svg';

const title = 'Sponsored by';

const Sponsors = () => (
  <div className="mt-20 w-full pt-20" id="sponsors">
    <h2 className="text-center font-mono uppercase">{title}</h2>

    <div className="mx-auto mt-10 flex max-w-[1220px] items-center justify-between md:flex-wrap md:justify-center md:gap-8">
      <img src={dailyDevLogo} height={42} width={240} loading="eager" alt="Daily.dev logo" />
      <img src={vercelLogo} height={40} width={179} loading="eager" alt="Vercel logo" />
      <img src={amplicationLogo} height={44} width={211} loading="eager" alt="Amplication logo" />
      <img src={medusaLogo} height={44} width={186} loading="eager" alt="Medusa logo" />
    </div>
  </div>
);

export default Sponsors;
