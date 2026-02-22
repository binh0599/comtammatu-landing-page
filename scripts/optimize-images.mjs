import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '..', 'public', 'images');

async function optimizeImages() {
    const files = fs.readdirSync(imagesDir);

    for (const file of files) {
        if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
            const filePath = path.join(imagesDir, file);
            const parsedPath = path.parse(filePath);
            const outputPath = path.join(imagesDir, `${parsedPath.name}.webp`);

            console.log(`Processing ${file}...`);

            try {
                await sharp(filePath)
                    .webp({ quality: 80, effort: 6 })
                    .toFile(outputPath);

                const oldStats = fs.statSync(filePath);
                const newStats = fs.statSync(outputPath);

                console.log(`✅ Converted ${file} -> ${parsedPath.name}.webp`);
                console.log(`   Size: ${(oldStats.size / 1024 / 1024).toFixed(2)}MB -> ${(newStats.size / 1024 / 1024).toFixed(2)}MB`);
            } catch (err) {
                console.error(`❌ Failed to process ${file}:`, err);
            }
        }
    }
}

optimizeImages();
