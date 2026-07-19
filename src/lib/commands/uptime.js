import { localesFetcher } from '../LocalesFetcher.js';

export const uptimeCommand = async (args, terminal) => {
  const sys = await localesFetcher.fetchSystem() || {};
  const ms = performance.now();
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

  let upStr = '';
  if (days > 0) {
    const dayStr = days > 1 ? (sys.uptime_days_plural || 'days') : (sys.uptime_days || 'day');
    upStr += `${days} ${dayStr}, `;
  }
  upStr += `${hours}:${minutes.toString().padStart(2, '0')}`;

  const format = sys.uptime_format || " {time} up {upStr},  1 user,  load average: 0.00, 0.00, 0.00";
  terminal.printLine(format.replace('{time}', timeStr).replace('{upStr}', upStr));
};

export const uptimeMetadata = {
  description: 'Tells the user how long the system has been running.',
  args: []
};
