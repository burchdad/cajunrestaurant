# Blue Anchor Seafood Restaurant Website

A modern, responsive restaurant website built with React, showcasing fresh ocean-to-table seafood dining.

## 🌊 Features

- **Homepage** - Hero section with stunning food imagery and feature highlights
- **Menu Page** - Complete menu with Appetizers, Mains, and Sides sections
  - Print/Download functionality for easy menu sharing
- **Contact Page** - Contact form and Google Maps integration
- **Login Page** - User authentication interface
- **Responsive Design** - Mobile-friendly layout using Tailwind CSS
- **Accessible** - Screen reader compatible with proper ARIA labels

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Custom UI Components** - Button and Card components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/burchdad/blueanchorseafood.git
cd blueanchorseafood
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Updating Menu Items

Edit the `menu` object in `src/App.jsx` to modify menu items:

```javascript
const menu = {
  "Appetizers": [...],
  "Mains": [...],
  "Sides": [...]
};
```

### Changing Colors

The site uses a coastal blue color scheme. To customize:
- Primary blue: `bg-blue-600` (navbar, buttons)
- Hover state: `hover:bg-blue-700`

Update these classes in `src/App.jsx` or modify `tailwind.config.js`.

### Updating Restaurant Location

To change the Google Maps location in the Contact page, replace the iframe `src` URL in the `ContactPage` component with your restaurant's location embed code from Google Maps.

## 📸 Screenshots

See the Pull Request for screenshots of all pages.

## 🏗️ Project Structure

```
blueanchorseafood/
├── public/          # Static assets
├── src/
│   ├── components/
│   │   └── ui/      # Reusable UI components (Button, Card)
│   ├── lib/         # Utility functions
│   ├── App.jsx      # Main application component
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles with Tailwind directives
├── index.html       # HTML template
└── package.json     # Dependencies and scripts
```

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

