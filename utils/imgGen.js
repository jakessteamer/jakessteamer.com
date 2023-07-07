const sharp = require('sharp');
const path = require('path');

const images = {
	s1: './src/assets/images/carousel/s143.jpg',
	s2: './src/assets/images/carousel/s243.jpg',
	s3: './src/assets/images/carousel/s343.jpg',
	s4: './src/assets/images/carousel/s443.jpg',
};

const outputDimensions = [
	{ width: 550, height: 413 },
	{ width: 320, height: 240 },
];

const outputFormats = ['jpg', 'webp', 'avif'];

Object.entries(images).forEach(([key, inputImagePath]) => {
	outputDimensions.forEach((dimensions) => {
		outputFormats.forEach((format) => {
			const { width, height } = dimensions;
			const fileName = `${key}_${width}x${height}.${format}`;
			const outputPath = path.join(__dirname, 'imgs', fileName);

			sharp(inputImagePath)
				.resize(width, height)
				.toFormat(format)
				.toFile(outputPath)
				.then(() => {
					console.log(`Image ${outputPath} generated successfully.`);
				})
				.catch((error) => {
					console.error(`Error generating ${outputPath}:`, error);
				});
		});
	});
});
