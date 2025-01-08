# Russiangram Chrome Extension
This document is here to help you understand the project structure and guide you through development, building, and deployment.

## **Project Overview**

This extension uses:
- **Handlebars** for templating.
- **Bootstrap** for styling.
- **jQuery** for DOM manipulation.
- **Precompiled templates** for compatibility with Manifest V3 (no `'unsafe-eval'`).

---

## **Folder Structure**

Here’s what the folders and files mean:

```
project/
├── src/               # Source files for development
│   ├── html/          # Popup HTML + Handlebars templates (.hbs files)
│   ├── css/           # Stylesheets (CSS)
│   ├── js/            # JavaScript files (core functionality) + libs
│   ├── manifest.json  # Chrome extension manifest
│
├── dist/              # Final extension files for deployment (auto-generated)
│   ├── css/           # CSS files
│   ├── js/            # JavaScript (includes precompiled templates)
│   ├── html/          # Static HTML files (e.g., popup.html)
│   ├── fonts/         # Font assets
│   ├── icon/          # Extension icons
│   └── manifest.json  # Final manifest file
│
├── build.js           # Script to build the extension
├── package.json       # Development setup (precompile Handlebars templates)
└── README.md          # This documentation
```

---

## **How to Work with This Project**

### 1. **Setup**

To get started, you need:
- **Node.js** (for development tools).

Install the necessary dependencies:
```bash
npm install
```

This installs the Handlebars CLI for precompiling templates.

---

### 2. **Development**

Make your changes in the **`src/`** folder:
- Update **`.hbs` files** in `src/html/` for templating.
- Modify **CSS** in `src/css/`.
- Add or update **JavaScript** in `src/js/`.

---

### 3. **Build the Extension**

Whenever you’re done with changes, run this command:
```bash
npm run build
```

This does three things:
1. **Precompiles Handlebars templates**: Converts `.hbs` files into `tables.js`.
2. **Cleans the `dist/` folder**: Ensures no old files are left.
3. **Copies necessary files** into the `dist/` folder.

After the build, your **final extension** is in the `dist/` folder.

---

### 4. **Test the Extension**

1. Open Chrome and go to `chrome://extensions/`.
2. Enable **Developer Mode** (toggle in the top-right).
3. Click **"Load unpacked"** and select the `dist/` folder.

Now, your extension is loaded into Chrome for testing.

---

### 5. **Deploy the Extension**

When you’re ready to share or publish the extension:
1. Zip the contents of the `dist/` folder:
   ```bash
   cd dist
   zip -r ../chrome-extension.zip .
   ```
2. Upload the `chrome-extension.zip` file to the Chrome Web Store.

---

## **Key Points to Remember**

1. **Precompiled Templates**:
   - Templates are precompiled during the build process to ensure compatibility with Manifest V3.
   - The `.hbs` files in `src/html/` are converted into `tables.js`.

2. **Clean Build**:
   - The `dist/` folder contains only the files required for the extension to work.
   - No unnecessary dev files like `.hbs` or `node_modules`.

3. **Automated Process**:
   - The `npm run build` command handles everything for you—cleaning, precompiling, and copying files.

---

## **FAQs**

### Q: What happens if I change a `.hbs` file?
Run:
```bash
npm run build
```
This updates the precompiled templates and copies everything to the `dist/` folder.

---

### Q: Can I skip the build step and test directly in `src/`?
No. Manifest V3 requires precompiled templates, so always test using the files in `dist/`.

---

### Q: What’s in the `dist/` folder?
The `dist/` folder contains:
- **CSS files**: For styling the extension.
- **JavaScript files**: Includes your code and precompiled templates.
- **HTML files**: Static files like `popup.html`.
- **Fonts and icons**: Assets for your extension.
- **Manifest.json**: The required file for Chrome extensions.
