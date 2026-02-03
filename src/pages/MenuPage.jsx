import React, { useState, useRef, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import menuDataFile from "../data/menuData.json";
import "./MenuPage.css";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [menuData, setMenuData] = useState(null);
  const [categories, setCategories] = useState([]);
  const printRef = useRef();

  // Load menu data on component mount
  useEffect(() => {
    // Try to load from localStorage first (if staff has made changes)
    const savedData = localStorage.getItem('menuData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setMenuData(parsedData);
      setCategories(parsedData.categories);
    } else {
      // Fall back to static JSON file
      setMenuData(menuDataFile);
      setCategories(menuDataFile.categories);
    }
  }, []);

  // Show loading state while data is being fetched
  if (!menuData) {
    return (
      <div className="menu-page">
        <div className="menu-container">
          <div className="menu-header">
            <h1 className="menu-title">Loading Menu...</h1>
          </div>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    if (activeCategory === 'kids') {
      // Download only kids menu
      const kidsMenuHTML = generateKidsMenuHTML();
      const blob = new Blob([kidsMenuHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Blue-Anchor-Seafood-Kids-Menu.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      // Download full menu (excluding kids section)
      const fullMenuHTML = generateFullMenuHTML();
      const blob = new Blob([fullMenuHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Blue-Anchor-Seafood-Full-Menu.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handlePrint = () => {
    if (activeCategory === 'kids') {
      // Print only kids menu
      const printWindow = window.open('', '_blank');
      const kidsMenuHTML = generateKidsMenuHTML();
      printWindow.document.write(kidsMenuHTML);
      printWindow.document.close();
      printWindow.print();
    } else {
      // Print full menu (excluding kids section)
      const printWindow = window.open('', '_blank');
      const fullMenuHTML = generateFullMenuHTML();
      printWindow.document.write(fullMenuHTML);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const generateKidsMenuHTML = () => {
    return `
      <html>
        <head>
          <title>Blue Anchor Seafood - Kids Coloring Menu</title>
          <style>
            @page {
              size: letter landscape;
              margin: 0.4in;
            }
            
            body { 
              font-family: 'Comic Sans MS', cursive, Arial, sans-serif; 
              margin: 0; 
              padding: 0;
              background: white;
              line-height: 1.2;
              width: 100%;
            }
            
            .coloring-page {
              width: 100%;
              min-height: 100vh;
            }
            
            .header { 
              text-align: center; 
              margin-bottom: 15px;
              padding: 8px;
              border-bottom: 3px dashed #3b82f6;
            }
            
            .logo { 
              max-width: 60px; 
              height: auto; 
              margin-bottom: 8px; 
            }
            
            h1 { 
              color: #1e40af; 
              text-align: center; 
              margin: 0; 
              font-size: 1.6rem;
            }
            
            .kids-subtitle {
              color: #f59e0b;
              font-size: 1.1rem;
              margin: 5px 0;
              font-weight: bold;
            }
            
            .main-content {
              display: flex;
              gap: 25px;
              min-height: 450px;
            }
            
            .coloring-section {
              flex: 0 0 65%;
              padding: 20px;
              border: 4px solid #f59e0b;
              background: #fffbf0;
              border-radius: 15px;
            }
            
            .coloring-title {
              color: #dc2626;
              font-size: 1.5rem;
              text-align: center;
              margin-bottom: 15px;
              border: 2px solid #dc2626;
              padding: 8px;
              border-radius: 10px;
              background: #fef2f2;
            }
            
            .coloring-instructions {
              text-align: center;
              color: #059669;
              font-size: 1.1rem;
              font-weight: bold;
              margin-bottom: 20px;
              padding: 10px;
              background: #f0fdf4;
              border-radius: 8px;
              border: 2px dotted #059669;
            }
            
            .coloring-shapes {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 25px;
              margin-top: 25px;
              justify-items: center;
            }
            
            .shape {
              width: 110px;
              height: 110px;
              border: 4px solid #374151;
              background: white;
            }
            
            .shape.circle {
              border-radius: 50%;
            }
            
            .shape.star {
              position: relative;
              border: none;
              background: transparent;
              display: inline-block;
            }
            
            .shape.star:before {
              content: '★';
              font-size: 100px;
              color: #374151;
              border: 4px solid #374151;
              display: inline-block;
              width: 106px;
              height: 106px;
              text-align: center;
              line-height: 98px;
              background: white;
            }
            
            .menu-section {
              flex: 0 0 30%;
              padding: 15px;
              border: 4px solid #f59e0b;
              background: #fef9e7;
              border-radius: 15px;
            }
            
            .menu-section h2 {
              color: #dc2626;
              font-size: 1.3rem;
              text-align: center;
              margin-bottom: 15px;
              border-bottom: 2px solid #f59e0b;
              padding-bottom: 5px;
            }
            
            .menu-item {
              margin: 10px 0;
              padding: 8px;
              border: 2px dotted #3b82f6;
              border-radius: 8px;
              background: #f8fafc;
            }
            
            .item-name {
              font-weight: bold;
              color: #1e40af;
              font-size: 1rem;
              display: block;
            }
            
            .item-price {
              color: #dc2626;
              font-weight: bold;
              float: right;
              font-size: 1rem;
            }
            
            .item-description {
              color: #059669;
              font-size: 0.9rem;
              margin-top: 5px;
              clear: both;
            }
            
            .footer { 
              text-align: center; 
              margin-top: 20px; 
              color: #666; 
              font-style: italic;
              font-size: 0.9rem;
              padding: 15px;
              background: #f0f9ff;
              border: 3px dashed #3b82f6;
              border-radius: 8px;
              clear: both;
            }
            
            .fun-message {
              color: #dc2626;
              font-weight: bold;
              font-size: 1rem;
              margin-bottom: 5px;
            }
            
            @media print {
              body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              
              .main-content {
                display: flex !important;
                page-break-inside: avoid;
              }
              
              .coloring-section {
                border: 4px solid #f59e0b !important;
                background: #fffbf0 !important;
              }
              
              .menu-section {
                border: 4px solid #f59e0b !important;
                background: #fef9e7 !important;
              }
              
              .shape {
                border: 4px solid #374151 !important;
              }
            }
          </style>
        </head>
        <body>
          <div class="coloring-page">
            <div class="header">
              <h1>Blue Anchor Seafood</h1>
              <div class="kids-subtitle">🎨 Kids Coloring Menu 🎨</div>
            </div>
            
            <div class="main-content">
              <div class="coloring-section">
                <div class="coloring-title">🖍️ Color Me! 🖍️</div>
                <div class="coloring-instructions">
                  Use your favorite colors to make these shapes beautiful!
                </div>
                <div class="coloring-shapes">
                  <div class="shape circle"></div>
                  <div class="shape"></div>
                  <div class="shape star"></div>
                  <div class="shape circle"></div>
                  <div class="shape"></div>
                  <div class="shape star"></div>
                </div>
              </div>
              
              <div class="menu-section">
                <h2>🧒 Kid's Meals</h2>
                ${menuData.menuItems.kids?.filter(item => item.active).map(item => `
                  <div class="menu-item">
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">$${item.price}</span>
                    <div class="item-description">${item.description}</div>
                  </div>
                `).join('') || ''}
              </div>
            </div>
            
            <div class="footer">
              <div class="fun-message">🌟 Have fun coloring and enjoy your meal! 🌟</div>
              All kids meals include a drink and choice of side<br>
              <strong>Blue Anchor Seafood</strong> • Fresh coastal cuisine for the whole family
            </div>
          </div>
        </body>
      </html>
    `;
  };

  const generateFullMenuHTML = () => {
    const categoriesForFullMenu = categories.filter(cat => cat.id !== 'kids');
    return `
      <html>
      <head>
        <title>Blue Anchor Seafood - Full Menu</title>
        <link rel="stylesheet" href="/src/pages/print-styles/full-menu-print.css">
      </head>
      <body>
        <div class="header">
        <img src="D:/Program Files/Github Repositories/cajunrestaurant/public/photos/logo/main_logo.png" alt="Blue Anchor Seafood restaurant logo featuring a nautical anchor design with company name in elegant maritime typography against a clean background" class="logo">
        <h1>Blue Anchor Seafood - Full Menu</h1>
        </div>
        ${categoriesForFullMenu.map(category => `
        <div class="category-section">
          <h2>${category.icon} ${category.label}</h2>
          ${menuData.menuItems[category.id]?.filter(item => item.active).map(item => `
          <div class="menu-item">
            <span class="item-name">${item.name}</span>
            <span class="item-price">$${item.price}</span>
            <div class="item-description">${item.description}</div>
          </div>
          `).join('') || ''}
        </div>
        `).join('')}
        <div class="footer">
        All seafood is sourced fresh daily from local fishing fleets and sustainable suppliers.<br>
        <strong>Blue Anchor Seafood</strong> • Coastal culinary traditions since 1985
        </div>
      </body>
      </html>
    `;
  };

  return (
    <div className="menu-page">
      <div className="menu-container">
        {/* Header */}
        <div className="menu-header">
          <h1 className="menu-title">Our Menu</h1>
          <p className="menu-subtitle">Fresh seafood prepared with coastal culinary traditions</p>
          <div className="menu-buttons">
            <Button onClick={handleDownload} className="download-button">
              Download Menu
            </Button>
            <Button onClick={handlePrint} className="print-button">
              Print Menu
            </Button>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="category-nav">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-button ${
                activeCategory === category.id ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-label">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="menu-content">
          <div className="menu-grid">
            {menuData.menuItems[activeCategory]?.filter(item => item.active).map((item, index) => (
              <div key={item.id || index} className="menu-item-card">
                <div className="item-image-container">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="item-image"
                    loading="lazy"
                  />
                  <div className="price-badge">${item.price}</div>
                </div>
                <div className="item-content">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                </div>
              </div>
            )) || []}
          </div>
        </div>

        {/* Chef's Note - only show for non-kids menu */}
        {activeCategory !== 'kids' && (
          <div className="chefs-note">
            <Card className="chef-note-card">
              <CardContent className="chef-note-content">
                <h3 className="chef-note-title">🦈 Captain's Note</h3>
                <p className="chef-note-text">
                  All our seafood is sourced fresh daily from local fishing fleets and sustainable suppliers. 
                  Preparation styles can be customized upon request. Ask your server about our daily catches!
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;