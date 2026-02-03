# 🍤 Blue Anchor Seafood Restaurant Website

A premium, fully responsive restaurant website built with React, featuring elegant ocean-themed design and comprehensive dining experiences. Showcasing authentic Gulf Coast seafood with modern web technologies and professional UI/UX design.

## 🌊 Live Demo

Visit the live site: [Blue Anchor Seafood](https://your-vercel-domain.vercel.app)

## ✨ Features

### 🏠 **Homepage**
- Immersive hero video background with seafood imagery
- Interactive service cards (Live Music, Private Events, Catering)
- Beautiful ocean-themed "Our Story" section with wave patterns
- Customer testimonials with glass morphism design
- Newsletter signup with Google Maps integration

### 🍽️ **Menu System**
- Complete digital menu with high-quality food photography
- Categories: Appetizers, Main Entrees, Sides, Kids Meals, Desserts, Drinks
- Print-friendly layouts for physical menu distribution
- Responsive grid design for all device sizes

### 🛒 **Online Ordering**
- Full-featured ordering system with cart functionality
- Step-by-step checkout process (Menu → Details → Payment → Confirmation)
- Support for pickup and delivery options
- Real-time order tracking and confirmation

### 📋 **Reservations & Events**
- Interactive reservation booking system
- Private event inquiry forms
- Live music schedule display
- Catering package selection with pricing

### 📞 **Contact & Location**
- Multi-section contact page with business hours
- Embedded Google Maps with restaurant location
- Contact form with validation
- Social media integration

### 🎨 **Design & UX**
- Ocean-themed color palette with gradient backgrounds
- Semantic CSS architecture (eliminated Tailwind utility classes)
- Smooth animations and hover effects
- Accessibility-compliant (WCAG guidelines)
- Mobile-first responsive design

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **React Router DOM** - Client-side routing and navigation

### Styling & Design
- **Semantic CSS** - Custom CSS classes for maintainable styling
- **CSS Grid & Flexbox** - Modern layout techniques
- **Responsive Design** - Mobile-first approach
- **Custom Animations** - Smooth transitions and effects

### Components & UI
- **Custom UI Library** - Reusable Button and Card components
- **Form Handling** - Controlled components with validation
- **Modal System** - Interactive dialogs for services

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **Git** - Version control with semantic commits

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/burchdad/cajunrestaurant.git
cd cajunrestaurant
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Start the development server:**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser:**
Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
npm run preview
```

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 🏗️ Project Architecture

```
cajunrestaurant/
├── 📁 public/                    # Static assets
│   ├── 📁 photos/               # Restaurant and food imagery
│   │   ├── 📁 Appetizers/
│   │   ├── 📁 Main Entres/
│   │   ├── 📁 Desserts/
│   │   ├── 📁 logo/
│   │   └── ...
│   └── 📁 videos/               # Hero background videos
├── 📁 src/
│   ├── 📁 components/           # Reusable components
│   │   ├── 📁 ui/              # Base UI components
│   │   │   ├── button.jsx
│   │   │   └── card.jsx
│   │   ├── 📁 Header/          # Header component
│   │   ├── 📁 Footer/          # Footer with newsletter
│   │   ├── 📁 Navbar/          # Navigation system
│   │   └── Carousel.jsx        # Image carousel
│   ├── 📁 pages/               # Route components
│   │   ├── HomePage.jsx/css    # Landing page
│   │   ├── MenuPage.jsx/css    # Digital menu
│   │   ├── OrderOnlinePage.jsx/css  # Ordering system
│   │   ├── ReservationsPage.jsx/css # Bookings
│   │   ├── AboutPage.jsx/css   # Restaurant story
│   │   ├── ContactPage.jsx/css # Contact information
│   │   └── LoginPage.jsx/css   # User authentication
│   ├── 📁 lib/                 # Utility functions
│   ├── App.jsx                 # Root application
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🎨 Customization Guide

### 🍽️ **Menu Management**

Menu items are configured in each page component:

```javascript
// Example: Adding new menu item
const newAppetizer = {
  name: "Cajun Calamari",
  description: "Fresh Gulf calamari with spicy remoulade",
  price: "$14.99",
  image: "/photos/Appetizers/calamari.jpg"
};
```

### 🎨 **Styling & Theming**

The site uses a semantic CSS architecture:

```css
/* Ocean color palette */
:root {
  --primary-blue: #1e40af;
  --ocean-blue: #0891b2;
  --light-blue: #93c5fd;
  --seafoam: #67e8f9;
}
```

### 🗺️ **Location & Contact**

Update restaurant information in:
- `ContactPage.jsx` - Address and contact details
- `Footer.jsx` - Google Maps embed URL
- Update the Google Maps iframe src with your location

### 📧 **Newsletter Integration**

Newsletter form is ready for backend integration:
```javascript
// In Footer.jsx
const handleNewsletterSubmit = (email) => {
  // Add your newsletter service integration
  // (Mailchimp, ConvertKit, etc.)
};
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will auto-deploy on every push to main branch
3. Build settings are automatically detected

### Manual Deployment

```bash
npm run build
# Upload 'dist' folder contents to your hosting provider
```

## 🔄 Recent Updates

### Major UI Improvements (Latest)
- ✅ **Complete Tailwind CSS elimination** - Converted to semantic CSS classes
- ✅ **Fixed section title centering** - Resolved global CSS conflicts
- ✅ **Enhanced ocean-themed backgrounds** - Beautiful gradients and wave patterns
- ✅ **Improved navbar logo sizing** - Professional logo display
- ✅ **Newsletter layout fixes** - Proper side-by-side grid on desktop
- ✅ **AboutPage hero improvements** - Better text positioning and visibility
- ✅ **CSS architecture cleanup** - Removed duplicates and organized styles

## 📱 Browser Support

- ✅ Chrome 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 88+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🧪 Testing

The site has been tested across:
- Desktop (1920x1080, 1366x768)
- Tablet (768px, 1024px)
- Mobile (375px, 414px, 390px)
- Various browsers and devices

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style
- Use semantic CSS classes
- Follow React hooks patterns
- Maintain responsive design
- Add comments for complex logic

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For questions about this project:
- **Repository**: [cajunrestaurant](https://github.com/burchdad/cajunrestaurant)
- **Issues**: [GitHub Issues](https://github.com/burchdad/cajunrestaurant/issues)

---

Built with ❤️ for Blue Anchor Seafood Restaurant

