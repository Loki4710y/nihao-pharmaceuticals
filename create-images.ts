import fs from 'fs';
import path from 'path';

const pngBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
const jpegBase64 = "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=";

const pngBuffer = Buffer.from(pngBase64, 'base64');
const jpegBuffer = Buffer.from(jpegBase64, 'base64');

const dir = path.join(process.cwd(), 'src/pages/Products');
fs.mkdirSync(dir, { recursive: true });

const files = [
  'glutamide1.png', 'glutamide2.png', 'glutamide3.png', 'glutamide4.png',
  'agelio1.png', 'agelio2.png', 'agelio3.png', 'agelio4.png',
  'follihao2.png', 'follihao3.png', 'follihao4.png',
  'angeliosachet1.jpeg', 'angeliosachet2.jpeg', 'angeliosachet3.jpeg', 'angeliosachet4.jpeg',
  'd3tablet2.png', 'd3tablet3.png',
  'vitc1.png', 'vitc2.png', 'vitc3.png'
];

for (const file of files) {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, file.endsWith('.jpeg') ? jpegBuffer : pngBuffer);
    console.log('Created: ', file);
  }
}
