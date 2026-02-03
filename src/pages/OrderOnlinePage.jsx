import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import "./OrderOnlinePage.css";

const OrderOnlinePage = () => {
  const [cart, setCart] = useState([]);
  const [orderType, setOrderType] = useState("delivery");
  const [currentStep, setCurrentStep] = useState("menu"); // menu, details, payment, confirmation
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    specialInstructions: ""
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: ""
  });
  const [orderNumber, setOrderNumber] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Complete menu data matching your restaurant's menu
  const menuData = {
    appetizers: [
      { 
        id: 1,
        name: "Coconut Shrimp", 
        price: 12.99, 
        category: "Appetizers",
        description: "Jumbo shrimp in crispy coconut coating with mango dipping sauce",
        image: "/photos/Appetizers/coconut-shrimp.jpg"
      },
      { 
        id: 2,
        name: "Crab Cakes", 
        price: 14.99, 
        category: "Appetizers",
        description: "Maryland-style crab cakes with chipotle aioli",
        image: "/photos/Appetizers/crab-cakes.png"
      },
      { 
        id: 3,
        name: "Calamari Rings", 
        price: 10.99, 
        category: "Appetizers",
        description: "Golden fried squid with marinara and lemon",
        image: "/photos/Appetizers/calamari-rings.png"
      },
      { 
        id: 4,
        name: "Oysters Rockefeller", 
        price: 13.99, 
        category: "Appetizers",
        description: "Fresh oysters with spinach, herbs, and parmesan",
        image: "/photos/Appetizers/oysters-rockefeller.jpg"
      }
    ],
    mains: [
      { 
        id: 5,
        name: "Grilled Salmon", 
        price: 22.99, 
        category: "Mains",
        description: "Atlantic salmon with lemon herb butter and seasonal vegetables",
        image: "/photos/Main Entres/grilled-salmon.jpg"
      },
      { 
        id: 6,
        name: "Lobster Tail Dinner", 
        price: 34.99, 
        category: "Mains",
        description: "Two lobster tails with drawn butter and garlic mashed potatoes",
        image: "/photos/Main Entres/lobster-tail-dinner.jpg"
      },
      { 
        id: 7,
        name: "Fish & Chips", 
        price: 18.99, 
        category: "Mains",
        description: "Beer-battered cod with hand-cut fries and coleslaw",
        image: "/photos/Main Entres/fish-and-chips.jpg"
      },
      { 
        id: 8,
        name: "Seafood Paella", 
        price: 26.99, 
        category: "Mains",
        description: "Saffron rice with shrimp, mussels, clams, and calamari",
        image: "/photos/Main Entres/seafood-paella.jpg"
      },
      { 
        id: 9,
        name: "Blackened Mahi Mahi", 
        price: 21.99, 
        category: "Mains",
        description: "Spice-crusted mahi mahi with coconut rice and mango salsa",
        image: "/photos/Main Entres/blackened-mahi-mahi.jpg"
      },
      { 
        id: 10,
        name: "New England Clam Chowder", 
        price: 16.99, 
        category: "Mains",
        description: "Creamy chowder served in a sourdough bread bowl",
        image: "/photos/Main Entres/new-england-clam-chowder.jpg"
      },
      { 
        id: 11,
        name: "Shrimp Scampi", 
        price: 19.99, 
        category: "Mains",
        description: "Garlic butter shrimp over linguine pasta",
        image: "/photos/Main Entres/shrimp-scampi.jpg"
      }
    ],
    sides: [
      { 
        id: 12,
        name: "Garlic Mashed Potatoes", 
        price: 6.99, 
        category: "Sides",
        description: "Creamy potatoes with roasted garlic",
        image: "/photos/Sides/garlic-mashed-potatoes.jpg"
      },
      { 
        id: 13,
        name: "Grilled Asparagus", 
        price: 7.99, 
        category: "Sides",
        description: "Fresh asparagus with lemon and parmesan",
        image: "/photos/Sides/grilled-asparagus.jpg"
      },
      { 
        id: 14,
        name: "Coconut Rice", 
        price: 5.99, 
        category: "Sides",
        description: "Jasmine rice cooked in coconut milk",
        image: "/photos/Sides/coconut-rice.jpg"
      },
      { 
        id: 15,
        name: "Coleslaw", 
        price: 4.99, 
        category: "Sides",
        description: "Fresh cabbage slaw with tangy dressing",
        image: "/photos/Sides/coleslaw.jpg"
      },
      { 
        id: 16,
        name: "Sweet Potato Fries", 
        price: 6.99, 
        category: "Sides",
        description: "Hand-cut fries with sea salt",
        image: "/photos/Sides/sweet-potato-fries.jpg"
      }
    ],
    kids: [
      { 
        id: 17,
        name: "Fish Sticks & Fries", 
        price: 8.99, 
        category: "Kids",
        description: "Crispy fish sticks with seasoned fries and ketchup",
        image: "/photos/Kid's Meals/fish-sticks-and-fries.jpg"
      },
      { 
        id: 18,
        name: "Mini Crab Cakes", 
        price: 9.99, 
        category: "Kids",
        description: "Two small crab cakes with mashed potatoes and green beans",
        image: "/photos/Kid's Meals/mini-crab-cakes.jpg"
      },
      { 
        id: 19,
        name: "Popcorn Shrimp", 
        price: 7.99, 
        category: "Kids",
        description: "Bite-sized breaded shrimp with honey mustard",
        image: "/photos/Kid's Meals/popcorn-shrimp.jpg"
      },
      { 
        id: 20,
        name: "Grilled Cheese & Tomato Soup", 
        price: 6.99, 
        category: "Kids",
        description: "Classic grilled cheese with creamy tomato soup",
        image: "/photos/Kid's Meals/grilled-cheese-and-tomato-soup.jpg"
      }
    ],
    desserts: [
      { 
        id: 21,
        name: "Key Lime Pie", 
        price: 7.99, 
        category: "Desserts",
        description: "Traditional Florida key lime pie with graham cracker crust",
        image: "/photos/Desserts/key-lime-pie.jpg"
      },
      { 
        id: 22,
        name: "Bread Pudding", 
        price: 8.99, 
        category: "Desserts",
        description: "New Orleans-style bread pudding with whiskey sauce",
        image: "/photos/Desserts/bread-pudding.jpg"
      },
      { 
        id: 23,
        name: "Chocolate Lava Cake", 
        price: 9.99, 
        category: "Desserts",
        description: "Warm chocolate cake with molten center and vanilla ice cream",
        image: "/photos/Desserts/chocolate-lava-cake.jpg"
      },
      { 
        id: 24,
        name: "Coconut Panna Cotta", 
        price: 6.99, 
        category: "Desserts",
        description: "Creamy coconut custard with tropical fruit compote",
        image: "/photos/Desserts/coconut-panna-cotta.jpg"
      }
    ]
  };

  // Flatten menu data for filtering
  const allMenuItems = Object.values(menuData).flat();

  const categories = ["All", "Appetizers", "Mains", "Sides", "Kids", "Desserts"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMenuItems = selectedCategory === "All" 
    ? allMenuItems 
    : allMenuItems.filter(item => item.category === selectedCategory);

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
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(cartItem => cartItem.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map(cartItem => 
        cartItem.id === itemId 
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      ));
    }
  };

  const getCartSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTaxAmount = () => {
    return getCartSubtotal() * 0.08; // 8% tax
  };

  const getDeliveryFee = () => {
    return orderType === "delivery" ? 3.99 : 0;
  };

  const getTotal = () => {
    return getCartSubtotal() + getTaxAmount() + getDeliveryFee();
  };

  const handleCustomerInfoChange = (field, value) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  const handlePaymentInfoChange = (field, value) => {
    setPaymentInfo(prev => ({ ...prev, [field]: value }));
  };

  const validateCustomerInfo = () => {
    const required = ['firstName', 'lastName', 'email', 'phone'];
    if (orderType === 'delivery') {
      required.push('address', 'city', 'zipCode');
    }
    
    return required.every(field => customerInfo[field].trim() !== '');
  };

  const validatePaymentInfo = () => {
    return paymentInfo.cardNumber.length >= 16 && 
           paymentInfo.expiryDate.length >= 5 && 
           paymentInfo.cvv.length >= 3 && 
           paymentInfo.nameOnCard.trim() !== '';
  };

  const processOrder = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generate order number
    const orderNum = 'BA' + Date.now().toString().slice(-6);
    setOrderNumber(orderNum);
    setCurrentStep('confirmation');
    setIsProcessing(false);
  };

  const startNewOrder = () => {
    setCart([]);
    setCurrentStep('menu');
    setCustomerInfo({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
      specialInstructions: ""
    });
    setPaymentInfo({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      nameOnCard: ""
    });
    setOrderNumber(null);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'menu':
        return (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Menu Items */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-red-700 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {filteredMenuItems.map(item => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <span className="text-lg font-bold text-red-700">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <Button onClick={() => addToCart(item)} className="w-full">
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cart Sidebar */}
            <div className="lg:sticky lg:top-24 h-fit">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Your Order</h2>
                
                {/* Order Type Selection */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Order Type</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setOrderType('delivery')}
                      className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
                        orderType === 'delivery'
                          ? 'bg-red-700 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Delivery
                    </button>
                    <button
                      onClick={() => setOrderType('pickup')}
                      className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
                        orderType === 'pickup'
                          ? 'bg-red-700 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Pickup
                    </button>
                  </div>
                </div>

                {cart.length === 0 ? (
                  <p className="text-gray-600 text-center py-8">Your cart is empty</p>
                ) : (
                  <div>
                    <div className="space-y-3 mb-4">
                      {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center py-2">
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm"
                              >
                                -
                              </button>
                              <span className="text-sm">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium text-sm">${(item.price * item.quantity).toFixed(2)}</div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-600 text-xs hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal:</span>
                        <span>${getCartSubtotal().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tax (8%):</span>
                        <span>${getTaxAmount().toFixed(2)}</span>
                      </div>
                      {orderType === 'delivery' && (
                        <div className="flex justify-between text-sm">
                          <span>Delivery Fee:</span>
                          <span>${getDeliveryFee().toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Total:</span>
                        <span>${getTotal().toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => setCurrentStep('details')} 
                      className="w-full mt-4"
                      size="lg"
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          </div>
        );

      case 'details':
        return (
          <div className="max-w-2xl mx-auto">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Customer Information</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name *</label>
                  <input
                    type="text"
                    value={customerInfo.firstName}
                    onChange={(e) => handleCustomerInfoChange('firstName', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name *</label>
                  <input
                    type="text"
                    value={customerInfo.lastName}
                    onChange={(e) => handleCustomerInfoChange('lastName', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleCustomerInfoChange('email', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone *</label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => handleCustomerInfoChange('phone', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    required
                  />
                </div>
              </div>

              {orderType === 'delivery' && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Delivery Address</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Address *</label>
                      <input
                        type="text"
                        value={customerInfo.address}
                        onChange={(e) => handleCustomerInfoChange('address', e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="Street address"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">City *</label>
                        <input
                          type="text"
                          value={customerInfo.city}
                          onChange={(e) => handleCustomerInfoChange('city', e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">ZIP Code *</label>
                        <input
                          type="text"
                          value={customerInfo.zipCode}
                          onChange={(e) => handleCustomerInfoChange('zipCode', e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Special Instructions</label>
                <textarea
                  value={customerInfo.specialInstructions}
                  onChange={(e) => handleCustomerInfoChange('specialInstructions', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  rows="3"
                  placeholder="Any special requests or dietary restrictions?"
                />
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={() => setCurrentStep('menu')} 
                  variant="outline"
                  className="flex-1"
                >
                  Back to Menu
                </Button>
                <Button 
                  onClick={() => setCurrentStep('payment')} 
                  className="flex-1"
                  disabled={!validateCustomerInfo()}
                >
                  Continue to Payment
                </Button>
              </div>
            </Card>
          </div>
        );

      case 'payment':
        return (
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Payment Form */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name on Card *</label>
                    <input
                      type="text"
                      value={paymentInfo.nameOnCard}
                      onChange={(e) => handlePaymentInfoChange('nameOnCard', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Card Number *</label>
                    <input
                      type="text"
                      value={paymentInfo.cardNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 16);
                        handlePaymentInfoChange('cardNumber', value);
                      }}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Expiry Date *</label>
                      <input
                        type="text"
                        value={paymentInfo.expiryDate}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\D/g, '');
                          if (value.length >= 2) {
                            value = value.slice(0, 2) + '/' + value.slice(2, 4);
                          }
                          handlePaymentInfoChange('expiryDate', value);
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="MM/YY"
                        maxLength="5"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">CVV *</label>
                      <input
                        type="text"
                        value={paymentInfo.cvv}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                          handlePaymentInfoChange('cvv', value);
                        }}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button 
                    onClick={() => setCurrentStep('details')} 
                    variant="outline"
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={processOrder} 
                    className="flex-1"
                    disabled={!validatePaymentInfo() || isProcessing}
                  >
                    {isProcessing ? 'Processing...' : `Place Order - $${getTotal().toFixed(2)}`}
                  </Button>
                </div>
              </Card>

              {/* Order Summary */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-gray-600 ml-2">x{item.quantity}</span>
                      </div>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${getCartSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>${getTaxAmount().toFixed(2)}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between">
                      <span>Delivery:</span>
                      <span>${getDeliveryFee().toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span>${getTotal().toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">
                    {orderType === 'delivery' ? 'Delivery' : 'Pickup'} Information:
                  </h4>
                  <p className="text-sm text-gray-600">
                    {customerInfo.firstName} {customerInfo.lastName}
                  </p>
                  {orderType === 'delivery' && (
                    <p className="text-sm text-gray-600">
                      {customerInfo.address}, {customerInfo.city} {customerInfo.zipCode}
                    </p>
                  )}
                  <p className="text-sm text-gray-600">
                    Estimated time: {orderType === 'delivery' ? '45-60 minutes' : '20-30 minutes'}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        );

      case 'confirmation':
        return (
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8">
              <div className="text-green-600 text-6xl mb-4">✓</div>
              <h2 className="text-3xl font-bold text-green-600 mb-4">Order Confirmed!</h2>
              <p className="text-xl mb-6">Thank you for your order!</p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-2">Order Details</h3>
                <p className="mb-2"><strong>Order Number:</strong> {orderNumber}</p>
                <p className="mb-2"><strong>Customer:</strong> {customerInfo.firstName} {customerInfo.lastName}</p>
                <p className="mb-2"><strong>Email:</strong> {customerInfo.email}</p>
                <p className="mb-2"><strong>Phone:</strong> {customerInfo.phone}</p>
                <p className="mb-2"><strong>Order Type:</strong> {orderType.charAt(0).toUpperCase() + orderType.slice(1)}</p>
                <p className="mb-2">
                  <strong>Estimated Time:</strong> {orderType === 'delivery' ? '45-60 minutes' : '20-30 minutes'}
                </p>
                <p className="mb-2"><strong>Total:</strong> ${getTotal().toFixed(2)}</p>
              </div>

              <div className="text-left bg-blue-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-2">What's Next?</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• You'll receive a confirmation email shortly</li>
                  <li>• We'll send you updates via SMS as your order is prepared</li>
                  <li>• {orderType === 'delivery' 
                    ? 'Our delivery driver will contact you when they\'re on the way'
                    : 'We\'ll notify you when your order is ready for pickup'}
                  </li>
                  <li>• Questions? Call us at (555) 123-FISH</li>
                </ul>
              </div>

              <Button onClick={startNewOrder} size="lg">
                Place Another Order
              </Button>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 pt-24">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Order Online</h1>
          <p className="text-gray-600">Fresh seafood delivered to your door or ready for pickup</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[
              { step: 'menu', label: 'Menu' },
              { step: 'details', label: 'Details' },
              { step: 'payment', label: 'Payment' },
              { step: 'confirmation', label: 'Confirmation' }
            ].map((item, index) => {
              const isActive = currentStep === item.step;
              const isCompleted = [
                'menu', 
                ...(currentStep !== 'menu' ? ['details'] : []),
                ...(currentStep === 'payment' || currentStep === 'confirmation' ? ['payment'] : []),
                ...(currentStep === 'confirmation' ? ['confirmation'] : [])
              ].includes(item.step) && currentStep !== item.step;
              
              return (
                <div key={item.step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    isActive 
                      ? 'bg-red-700 text-white' 
                      : isCompleted 
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                  }`}>
                    {isCompleted ? '✓' : index + 1}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    isActive ? 'text-red-700' : isCompleted ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {item.label}
                  </span>
                  {index < 3 && (
                    <div className={`w-8 h-0.5 mx-4 ${
                      isCompleted ? 'bg-green-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {renderStepContent()}
      </div>
    </div>
  );
};

export default OrderOnlinePage;