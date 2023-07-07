const fs = require('fs');
const path = require('path');

function addPage(pagePath) {
	const relativePath = path.relative('./src', pagePath);
	const url = `http://jakessteamer.com/${relativePath}`; // Replace with your website's URL
	const lastMod = fs.statSync(pagePath).mtime.toISOString();
	const changeFreq = 'monthly';
	const priority = '1.0';

	return `<url>
    <loc>${url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSitemap(srcPath, distPath) {
	const siteMap = [];

	function traverseDirectory(currentPath) {
		const files = fs.readdirSync(currentPath);

		files.forEach((file) => {
			const filePath = path.join(currentPath, file);
			const stats = fs.statSync(filePath);

			if (stats.isDirectory()) {
				traverseDirectory(filePath);
			} else if (stats.isFile() && path.extname(file) === '.html') {
				siteMap.push(addPage(filePath));
			}
		});
	}

	traverseDirectory(srcPath);

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${siteMap.join('\n')}
</urlset>`;

	fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap); // Output to dist/sitemap.xml
}

// Usage example:
const srcFolderPath = './src'; // Specify the path to your src folder
const distFolderPath = './dist'; // Specify the path to your dist folder
generateSitemap(srcFolderPath, distFolderPath);
