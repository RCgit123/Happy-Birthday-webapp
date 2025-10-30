# 💕 Birthday Webpage for Rhea

A romantic, interactive birthday webpage with animations, music, and personalized features.

## ✨ Features

- 🎂 Animated birthday cake with interactive candle blowing (uses microphone)
- 🖼️ Three beautiful photos displayed
- 📝 Customizable special message
- 🎵 Background music with play/pause control
- 💖 Beautiful gradient animations and floating hearts
- 📱 Fully responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/yourusername/rhea-birthday-webpage.git
   cd rhea-birthday-webpage
```

2. **Add your photos:**
   - Place 3 photos in `public/images/` folder
   - Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`
   - (You can use .jpg, .jpeg, .png formats - just update the file extension in `WelcomePage.jsx`)

3. Install dependencies:
```bash
   npm install
```

4. Start the development server:
```bash
   npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### Adding Your Photos
1. Create folder: `public/images/`
2. Add your 3 favorite photos of Rhea
3. Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`

### Editing the Message
- Navigate to the second page (cake page)
- Click the pencil icon on the message scroll
- Write your personalized message
- Or edit the default message in `src/App.jsx`

### Changing the Music
- Replace the audio source URL in `src/App.jsx`
- Find a romantic background music URL and update the `<audio>` tag

### Using Different Image Formats
If your images are PNG or have different names, update the paths in `src/components/WelcomePage.jsx`:
```javascript
const images = [
  '/images/your-photo-1.png',
  '/images/your-photo-2.png',
  '/images/your-photo-3.png'
];
```

## 📦 Building for Production
```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## 🌐 Deployment

### GitHub Pages

1. Install gh-pages:
```bash
   npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
   "homepage": "https://yourusername.github.io/rhea-birthday-webpage",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
```

3. Deploy:
```bash
   npm run deploy
```

### Netlify/Vercel

1. Push your code to GitHub
2. Connect your repo to Netlify or Vercel
3. Deploy with one click!
4. Make sure your images are in the `public/images/` folder

## 📸 Image Requirements

- Format: JPG, PNG, or WEBP
- Recommended size: 500x500px or larger (square format works best)
- Place in: `public/images/`
- Names: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`

## 📝 License

This project is for personal use.

## 💝 Made with Love

Created with love for Rhea 💕
