'use client'; 

import { useEffect, useState } from 'react';

export default function DiscordPresence() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.lanyard) {
      window.lanyard({
        userId: '830771139486679100',
      }).then((data) => {
        setStatus(data.discord_status); 
      });
    }
  }, []);

  return (
    <div>
      Discord Status: <strong>{status}</strong>
    </div>
  );
}
