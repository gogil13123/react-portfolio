import fs from 'fs';
import https from 'https';
import path from 'path';

const REPO_OWNER = 'gogil13123';
const REPO_NAME = 'react-portfolio';
const BRANCH = 'main';

const filesToDownload = [
    'public/showreel.mp4',
    'public/work/apple_ui.mp4',
    'public/work/infinity_1.mp4',
    'public/work/infinity_2.mp4',
    'public/work/jiberia_1.mp4',
    'public/work/jiberia_2.mp4',
    'public/work/social_edit.mp4'
];

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            // Handle redirects
            if (response.statusCode > 300 && response.statusCode < 400 && response.headers.location) {
                return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
            }

            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download '${url}' (status code: ${response.statusCode})`));
                return;
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

async function main() {
    console.log('Downloading media files from GitHub...');

    for (const filePath of filesToDownload) {
        const fileName = path.basename(filePath);
        const destPath = path.resolve(process.cwd(), filePath);

        // Create directory if it doesn't exist
        const dir = path.dirname(destPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        // Always fetch from git lfs raw endpoint
        const url = `https://media.githubusercontent.com/media/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/${filePath}`;

        console.log(`Downloading ${fileName}...`);
        try {
            await downloadFile(url, destPath);
            console.log(`Success: ${fileName}`);
        } catch (error) {
            console.error(`Error downloading ${fileName}:`, error.message);
            process.exit(1);
        }
    }

    console.log('All media files downloaded successfully.');
}

main();
