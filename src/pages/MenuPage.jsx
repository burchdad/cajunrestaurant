import React, { useState, useRef } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import "./MenuPage.css";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const printRef = useRef();

  const categories = [
    { id: 'appetizers', label: 'Appetizers', icon: '🦐' },
    { id: 'mains', label: 'Main Entrés', icon: '🍽️' },
    { id: 'sides', label: 'Sides', icon: '🥗' },
    { id: 'kids', label: "Kid's Meals", icon: '🧒' },
    { id: 'desserts', label: 'Desserts', icon: '🍰' },
    { id: 'drinks', label: 'Drinks', icon: '🥤' }
  ];

  const menuData = {
    appetizers: [
      { 
        name: "Coconut Shrimp", 
        price: "$12.99", 
        description: "Jumbo shrimp in crispy coconut coating with mango dipping sauce",
        image: "/photos/Appetizers/coconut-shrimp.jpg"
      },
      { 
        name: "Crab Cakes", 
        price: "$14.99", 
        description: "Maryland-style crab cakes with chipotle aioli",
        image: "/photos/Appetizers/crab-cakes.png"
      },
      { 
        name: "Calamari Rings", 
        price: "$10.99", 
        description: "Golden fried squid with marinara and lemon",
        image: "/photos/Appetizers/calamari-rings.png"
      },
      { 
        name: "Oysters Rockefeller", 
        price: "$13.99", 
        description: "Fresh oysters with spinach, herbs, and parmesan",
        image: "/photos/Appetizers/oysters-rockefeller.jpg"
      }
    ],
    mains: [
      { 
        name: "Grilled Salmon", 
        price: "$22.99", 
        description: "Atlantic salmon with lemon herb butter and seasonal vegetables",
        image: "/photos/Main Entres/grilled-salmon.jpg"
      },
      { 
        name: "Lobster Tail Dinner", 
        price: "$34.99", 
        description: "Two lobster tails with drawn butter and garlic mashed potatoes",
        image: "/photos/Main Entres/lobster-tail-dinner.jpg"
      },
      { 
        name: "Fish & Chips", 
        price: "$18.99", 
        description: "Beer-battered cod with hand-cut fries and coleslaw",
        image: "/photos/Main Entres/fish-and-chips.jpg"
      },
      { 
        name: "Seafood Paella", 
        price: "$26.99", 
        description: "Saffron rice with shrimp, mussels, clams, and calamari",
        image: "/photos/Main Entres/seafood-paella.jpg"
      },
      { 
        name: "Blackened Mahi Mahi", 
        price: "$21.99", 
        description: "Spice-crusted mahi mahi with coconut rice and mango salsa",
        image: "/photos/Main Entres/blackened-mahi-mahi.jpg"
      },
      { 
        name: "New England Clam Chowder", 
        price: "$16.99", 
        description: "Creamy chowder served in a sourdough bread bowl",
        image: "/photos/Main Entres/new-england-clam-chowder.jpg"
      },
      { 
        name: "Shrimp Scampi", 
        price: "$19.99", 
        description: "Garlic butter shrimp over linguine pasta",
        image: "/photos/Main Entres/shrimp-scampi.jpg"
      }
    ],
    sides: [
      { 
        name: "Garlic Mashed Potatoes", 
        price: "$6.99", 
        description: "Creamy potatoes with roasted garlic",
        image: "/photos/Sides/garlic-mashed-potatoes.jpg"
      },
      { 
        name: "Grilled Asparagus", 
        price: "$7.99", 
        description: "Fresh asparagus with lemon and parmesan",
        image: "/photos/Sides/grilled-asparagus.jpg"
      },
      { 
        name: "Coconut Rice", 
        price: "$5.99", 
        description: "Jasmine rice cooked in coconut milk",
        image: "/photos/Sides/coconut-rice.jpg"
      },
      { 
        name: "Coleslaw", 
        price: "$4.99", 
        description: "Fresh cabbage slaw with tangy dressing",
        image: "/photos/Sides/coleslaw.jpg"
      },
      { 
        name: "Sweet Potato Fries", 
        price: "$6.99", 
        description: "Hand-cut fries with sea salt",
        image: "/photos/Sides/sweet-potato-fries.jpg"
      }
    ],
    kids: [
      { 
        name: "Fish Sticks & Fries", 
        price: "$8.99", 
        description: "Crispy fish sticks with seasoned fries and ketchup",
        image: "/photos/Kid's Meals/fish-sticks-and-fries.jpg"
      },
      { 
        name: "Mini Crab Cakes", 
        price: "$9.99", 
        description: "Two small crab cakes with mashed potatoes and green beans",
        image: "/photos/Kid's Meals/mini-crab-cakes.jpg"
      },
      { 
        name: "Popcorn Shrimp", 
        price: "$7.99", 
        description: "Bite-sized breaded shrimp with honey mustard",
        image: "/photos/Kid's Meals/popcorn-shrimp.jpg"
      },
      { 
        name: "Grilled Cheese & Tomato Soup", 
        price: "$6.99", 
        description: "Classic grilled cheese with creamy tomato soup",
        image: "/photos/Kid's Meals/grilled-cheese-and-tomato-soup.jpg"
      }
    ],
    desserts: [
      { 
        name: "Key Lime Pie", 
        price: "$7.99", 
        description: "Traditional Florida key lime pie with graham cracker crust",
        image: "/photos/Desserts/key-lime-pie.jpg"
      },
      { 
        name: "Bread Pudding", 
        price: "$8.99", 
        description: "New Orleans-style bread pudding with whiskey sauce",
        image: "/photos/Desserts/bread-pudding.jpg"
      },
      { 
        name: "Chocolate Lava Cake", 
        price: "$9.99", 
        description: "Warm chocolate cake with molten center and vanilla ice cream",
        image: "/photos/Desserts/chocolate-lava-cake.jpg"
      },
      { 
        name: "Coconut Panna Cotta", 
        price: "$6.99", 
        description: "Creamy coconut custard with tropical fruit compote",
        image: "/photos/Desserts/coconut-panna-cotta.jpg"
      }
    ],
    drinks: [
      { 
        name: "Hurricane", 
        price: "$12.99", 
        description: "Classic New Orleans cocktail with rum and passion fruit",
        image: "/photos/Drinks/hurricane.jpg"
      },
      { 
        name: "Craft Beer Selection", 
        price: "$5.99-8.99", 
        description: "Local and imported beers on tap and bottled",
        image: "/photos/Drinks/craft-beer-selection.jpg"
      },
      { 
        name: "Fresh Lemonade", 
        price: "$3.99", 
        description: "House-made lemonade with fresh lemons",
        image: "/photos/Drinks/fresh-lemonade.jpg"
      },
      { 
        name: "Coffee & Espresso", 
        price: "$2.99-4.99", 
        description: "Premium coffee drinks and specialty espresso",
        image: "/photos/Drinks/coffee-and-espresso.jpg"
      }
    ]
  };

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
          <title>Blue Anchor Seafood - Kids Menu</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; background: #f8fafc; }
            .header { text-align: center; margin-bottom: 30px; }
            .logo { max-width: 150px; height: auto; margin-bottom: 20px; }
            h1 { color: #1e40af; text-align: center; margin: 0; font-size: 2.5rem; }
            h2 { color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; }
            .menu-item { margin-bottom: 15px; padding: 10px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .item-name { font-weight: bold; font-size: 1.1rem; }
            .item-price { color: #dc2626; font-weight: bold; float: right; }
            .item-description { font-style: italic; color: #666; margin-top: 5px; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-style: italic; }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="D:/Program Files/Github Repositories/cajunrestaurant/public/photos/logo/kids_logo.png" alt="Blue Anchor Seafood Kids" class="logo">
            <h1>Blue Anchor Seafood - Kids Menu</h1>
          </div>
          <h2>🧒 Kid's Meals</h2>
          ${menuData.kids.map(item => `
            <div class="menu-item">
              <span class="item-name">${item.name}</span>
              <span class="item-price">${item.price}</span>
              <div class="item-description">${item.description}</div>
            </div>
          `).join('')}
          <div class="footer">
            All kids meals include a drink and choice of side<br>
            <strong>Blue Anchor Seafood</strong> • Fresh coastal cuisine for the whole family
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
        <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f8fafc; }
        .header { text-align: center; margin-bottom: 40px; }
        .logo { max-width: 200px; height: auto; margin-bottom: 20px; }
        h1 { color: #1e40af; text-align: center; margin: 0; font-size: 3rem; }
        h2 { color: #3b82f6; border-bottom: 2px solid #3b82f6; margin-top: 35px; padding-bottom: 10px; font-size: 1.8rem; }
        .menu-item { margin-bottom: 15px; padding: 12px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .item-name { font-weight: bold; font-size: 1.1rem; }
        .item-price { color: #dc2626; font-weight: bold; float: right; font-size: 1.1rem; }
        .item-description { font-style: italic; color: #666; margin-top: 5px; }
        .footer { text-align: center; margin-top: 40px; color: #666; font-style: italic; border-top: 2px solid #3b82f6; padding-top: 20px; }
        .category-section { margin-bottom: 30px; }
        </style>
      </head>
      <body>
        <div class="header">
        <img src="D:/Program Files/Github Repositories/cajunrestaurant/public/photos/logo/main_logo.png" alt="Blue Anchor Seafood restaurant logo featuring a nautical anchor design with company name in elegant maritime typography against a clean background" class="logo">
        <h1>Blue Anchor Seafood - Full Menu</h1>
        </div>
        ${categoriesForFullMenu.map(category => `
        <div class="category-section">
          <h2>${category.icon} ${category.label}</h2>
          ${menuData[category.id].map(item => `
          <div class="menu-item">
            <span class="item-name">${item.name}</span>
            <span class="item-price">${item.price}</span>
            <div class="item-description">${item.description}</div>
          </div>
          `).join('')}
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
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="menu-title">Our Menu</h1>
          <p className="menu-subtitle">Fresh seafood prepared with coastal culinary traditions</p>
          <div className="button-container">
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
            {menuData[activeCategory]?.map((item, index) => (
              <div key={index} className="menu-item-card">
                <div className="item-image-container">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="item-image"
                    loading="lazy"
                  />
                  <div className="price-badge">{item.price}</div>
                </div>
                <div className="item-content">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chef's Note - only show for non-kids menu */}
        {activeCategory !== 'kids' && (
          <div className="chefs-note">
            <Card className="chef-note-card">
              <CardContent className="p-8">
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