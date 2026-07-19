const fs = require('fs');

const targetFile = 'C:\\\\Users\\\\thy\\\\Projects\\\\gewoonthy\\\\src\\\\data\\\\lyrics.ts';

function main() {
  let fileContent = fs.readFileSync(targetFile, 'utf8');

  const startStr = '  "San Joe - Desculpa Ai Doutor.mp4": {';
  const startIdx = fileContent.indexOf(startStr);
  
  if (startIdx === -1) {
    console.error("Could not find San Joe entry!");
    return;
  }

  // Find the next song entry to know where San Joe ends
  const nextSongStr = '  "VIDEOCLUB - Roi.mp4": {';
  const nextSongIdx = fileContent.indexOf(nextSongStr, startIdx);
  
  if (nextSongIdx === -1) {
    console.error("Could not find next song entry!");
    return;
  }

  // The San Joe entry ends right before the next song entry
  const newContent = fileContent.substring(0, startIdx) + fileContent.substring(nextSongIdx);
  
  fs.writeFileSync(targetFile, newContent);
  console.log("Successfully removed San Joe - Desculpa Ai Doutor.mp4");
}

main();
