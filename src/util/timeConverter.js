//Timer COnversion utlity functions

export function convertMinSec(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
  
    return `${minutes} minutes and ${seconds} seconds.`;
}