export function calculateTimeLeft(targetDate: Date) {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  
  if (difference <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      milliseconds: '000'
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);
  const milliseconds = Math.floor((difference % 1000));

  return {
    days: days.toString().padStart(2, '0'),
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0'),
    milliseconds: milliseconds.toString().padStart(3, '0')
  };
}

