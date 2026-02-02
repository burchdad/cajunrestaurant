import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import "./OrderOnlinePage.css";

const OrderOnlinePage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const menuItems = [
    { id: 1, name: "Grilled Salmon", price: 22.99, category: "Mains", description: "Atlantic salmon with lemon herb butter and seasonal vegetables" },
    { id: 2, name: "Seafood Paella", price: 26.99, category: "Mains", description: "Saffron rice with shrimp, mussels, clams, and calamari" },
    { id: 3, name: "Lobster Tail Dinner", price: 34.99, category: "Mains", description: "Two lobster tails with drawn butter and garlic mashed potatoes" },
    { id: 4, name: "Coconut Shrimp", price: 12.99, category: "Appetizers", description: "Jumbo shrimp in crispy coconut coating with mango dipping sauce" },
    { id: 5, name: "Crab Cakes", price: 14.99, category: "Appetizers", description: "Maryland-style crab cakes with chipotle aioli" },
    { id: 6, name: "Coconut Rice", price: 5.99, category: "Sides", description: "Jasmine rice cooked in coconut milk" },
  ];

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setTotal(total + item.price);
  };

  const removeFromCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== item.id));
    }
    setTotal(total - item.price);
  };

  const handleCheckout = () => {
    alert('Order placed! Thank you for choosing Blue Anchor Seafood!');
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-6 pt-24">
        <h1 className="text-4xl font-bold text-center mb-8">Order Online</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Menu Items */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Menu</h2>
            <div className="space-y-4">
              {menuItems.map(item => (
                <Card key={item.id} className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <span className="text-lg font-bold text-red-700">${item.price}</span>
                    </div>
                    <Button onClick={() => addToCart(item)} size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Order</h2>
            {cart.length === 0 ? (
              <p className="text-gray-600">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                      <Button size="sm" variant="outline" onClick={() => removeFromCart(item)}>
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total: ${total.toFixed(2)}</span>
                  </div>
                  <Button onClick={handleCheckout} size="lg" className="w-full mt-4">
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnlinePage;