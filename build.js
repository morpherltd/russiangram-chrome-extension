const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

const copy = (src, dest) => {
    const stats = fs.statSync(src);
    if (stats.isDirectory()) {
        fs.mkdirSync(dest, { recursive: true });
        for (const file of fs.readdirSync(src)) {
            copy(path.join(src, file), path.join(dest, file));
        }
    } else {
        fs.copyFileSync(src, dest);
    }
};

const clean = () => {
    if (fs.existsSync(DIST_DIR)) {
        fs.rmSync(DIST_DIR, { recursive: true, force: true });
    }
};

const build = () => {
    console.log('Building the extension...');
    clean();

    fs.mkdirSync(DIST_DIR);

    ['css', 'js', 'html', 'fonts', 'icon', 'manifest.json'].forEach((item) => {
        const srcPath = path.join(SRC_DIR, item);
        const destPath = path.join(DIST_DIR, item);
        if (fs.existsSync(srcPath)) {
            copy(srcPath, destPath);
        }
    });

    const htmlDir = path.join(DIST_DIR, 'html');
    if (fs.existsSync(htmlDir)) {
        fs.readdirSync(htmlDir).forEach((file) => {
            if (file.endsWith('.hbs')) {
                fs.unlinkSync(path.join(htmlDir, file));
            }
        });
    }

    console.log("Build complete! Files are ready in the 'dist' folder.");
};

const command = process.argv[2];
if (command === 'clean') {
    clean();
    console.log("Cleaned the 'dist' folder.");
} else {
    build();
}
