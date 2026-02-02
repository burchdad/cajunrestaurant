import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import "./MenuPage.css";

const MenuPage = () => {
  const menu = {
    "🦐 Appetizers": [
      { name: "Coconut Shrimp", price: "$12.99", description: "Jumbo shrimp in crispy coconut coating with mango dipping sauce" },
      { name: "Crab Cakes", price: "$14.99", description: "Maryland-style crab cakes with chipotle aioli" },
      { name: "Calamari Rings", price: "$10.99", description: "Golden fried squid with marinara and lemon" },
      { name: "Oysters Rockefeller", price: "$13.99", description: "Fresh oysters with spinach, herbs, and parmesan" }
    ],
    "🍽️ Main Dishes": [
      { name: "Grilled Salmon", price: "$22.99", description: "Atlantic salmon with lemon herb butter and seasonal vegetables" },
      { name: "Lobster Tail Dinner", price: "$34.99", description: "Two lobster tails with drawn butter and garlic mashed potatoes" },
      { name: "Fish & Chips", price: "$18.99", description: "Beer-battered cod with hand-cut fries and coleslaw" },
      { name: "Seafood Paella", price: "$26.99", description: "Saffron rice with shrimp, mussels, clams, and calamari" },
      { name: "Blackened Mahi Mahi", price: "$21.99", description: "Spice-crusted mahi mahi with coconut rice and mango salsa" },
      { name: "New England Clam Chowder", price: "$16.99", description: "Creamy chowder served in a sourdough bread bowl" },
      { name: "Shrimp Scampi", price: "$19.99", description: "Garlic butter shrimp over linguine pasta" }
    ],
    "🥗 Sides": [
      { name: "Garlic Mashed Potatoes", price: "$6.99", description: "Creamy potatoes with roasted garlic" },
      { name: "Grilled Asparagus", price: "$7.99", description: "Fresh asparagus with lemon and parmesan" },
      { name: "Coconut Rice", price: "$5.99", description: "Jasmine rice cooked in coconut milk" },
      { name: "Coleslaw", price: "$4.99", description: "Fresh cabbage slaw with tangy dressing" },
      { name: "Sweet Potato Fries", price: "$6.99", description: "Hand-cut fries with sea salt" }
    ]
  };

  const printMenu = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-6xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">Fresh seafood prepared with coastal culinary traditions</p>
          <Button onClick={printMenu} variant="outline" size="lg" className="animate-pulse">
            📄 Download / Print Menu
          </Button>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {Object.entries(menu).map(([section, items], sectionIndex) => (
            <div key={section} className="mb-16">
              <Card variant="gradient" className="animate-fadeInScale" style={{animationDelay: `${sectionIndex * 0.2}s`}}>
                <div className="bg-gradient-ocean text-white p-6 rounded-t-2xl">
                  <h2 className="text-4xl font-bold text-center font-['Playfair_Display']">{section}</h2>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {items.map((item, idx) => (
                      <div key={idx} className="group hover:bg-blue-50/50 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors font-['Playfair_Display']">
                            {typeof item === 'string' ? item : item.name}
                          </h3>
                          {item.price && (
                            <span className="text-xl font-bold text-blue-700 bg-gray-100 px-3 py-1 rounded-full">
                              {item.price}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-gray-600 italic">{item.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Chef's Note */}
        <div className="text-center mt-12 animate-fadeIn">
          <Card variant="dark" className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-400 mb-4 font-['Playfair_Display']">🦈 Captain's Note</h3>
              <p className="text-gray-300 leading-relaxed">
                All our seafood is sourced fresh daily from local fishing fleets and sustainable suppliers. 
                Preparation styles can be customized upon request. Ask your server about our daily catches!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;