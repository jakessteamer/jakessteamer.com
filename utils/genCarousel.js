const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './src/assets/images/carousel';
const outputDir = './dist/images';
const sizes = [1080, 640];
const formats = ['png', 'webp', 'avif'];

fs.readdirSync(inputDir)
  .filter(file => path.extname(file).toLowerCase() === '.png')
  .forEach(file => {
    const inputFile = path.join(inputDir, file);
    const baseName = path.basename(file, '.png');

    sizes.forEach(size => {
      const height = Math.round(size * 3 / 4);  // Maintain aspect ratio 4:3

      formats.forEach(format => {
        const outputFile = path.join(outputDir, `${baseName}-${size}.${format}`);
        sharp(inputFile)
          .resize(size, height)
          .toFile(outputFile, err => {
            if (err) {
              console.error(`Error processing ${file}: ${err.message}`);
            }
          });
      });
    });
  });
