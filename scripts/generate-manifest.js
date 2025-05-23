import fs from 'node:fs'
import path from 'node:path'

// Get baseURL from nuxt.config (using a simple regex)
const configFile = fs.readFileSync('./nuxt.config.ts', 'utf8');
const baseURLMatch = configFile.match(/const\s+baseURL\s*=\s*['"]([^'"]+)['"]/);
// fall-back to default if not found
const baseURL = baseURLMatch ? baseURLMatch[1] : '/davinci-landing/';

const manifest = {
  name: "",
  short_name: "",
  icons: [
    {
      src: `${baseURL}android-chrome-192x192.png`,
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: `${baseURL}android-chrome-512x512.png`,
      sizes: "512x512",
      type: "image/png"
    }
  ],
  theme_color: "#ffffff",
  background_color: "#ffffff",
  display: "standalone"
};

// Ensure directory exists
const outputDir = './public';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write the manifest file
fs.writeFileSync(
  path.join(outputDir, 'site.webmanifest'),
  JSON.stringify(manifest)
);

console.log('Manifest file generated successfully');
