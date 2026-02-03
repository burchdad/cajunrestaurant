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
          <div className="order-grid">
            {/* Menu Items */}
            <div className="menu-section">
              <div className="category-filters">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`category-button ${
                      selectedCategory === category
                        ? 'active'
                        : 'inactive'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="menu-items-grid">
                {filteredMenuItems.map(item => (
                  <Card key={item.id} className="menu-item-card">
                    <div className="menu-item-image-container">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="menu-item-image"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                        }}
                      />
                    </div>
                    <div className="menu-item-content">
                      <div className="menu-item-header">
                        <h3 className="menu-item-title">{item.name}</h3>
                        <span className="menu-item-price">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="menu-item-description">{item.description}</p>
                      <Button onClick={() => addToCart(item)} className="add-to-cart-button">
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cart Sidebar */}
            <div className="cart-sidebar">
              <Card className="cart-card">
                <h2 className="cart-title">Your Order</h2>
                
                {/* Order Type Selection */}
                <div className="order-type-section">
                  <h3 className="order-type-label">Order Type</h3>
                  <div className="order-type-buttons">
                    <button
                      onClick={() => setOrderType('delivery')}
                      className={`order-type-button ${
                        orderType === 'delivery'
                          ? 'active'
                          : 'inactive'
                      }`}
                    >
                      Delivery
                    </button>
                    <button
                      onClick={() => setOrderType('pickup')}
                      className={`order-type-button ${
                        orderType === 'pickup'
                          ? 'active'
                          : 'inactive'
                      }`}
                    >
                      Pickup
                    </button>
                  </div>
                </div>

                {cart.length === 0 ? (
                  <p className="empty-cart">Your cart is empty</p>
                ) : (
                  <div>
                    <div className="cart-items-list">
                      {cart.map(item => (
                        <div key={item.id} className="cart-item">
                          <div className="cart-item-details">
                            <h4 className="cart-item-name">{item.name}</h4>
                            <div className="cart-item-controls">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="quantity-button"
                              >
                                -
                              </button>
                              <span className="quantity-display">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="quantity-button"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="cart-item-price">
                            <div className="cart-item-amount">${(item.price * item.quantity).toFixed(2)}</div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="remove-item-button"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="cart-totals">
                      <div className="total-row">
                        <span>Subtotal:</span>
                        <span>${getCartSubtotal().toFixed(2)}</span>
                      </div>
                      <div className="total-row">
                        <span>Tax (8%):</span>
                        <span>${getTaxAmount().toFixed(2)}</span>
                      </div>
                      {orderType === 'delivery' && (
                        <div className="total-row">
                          <span>Delivery Fee:</span>
                          <span>${getDeliveryFee().toFixed(2)}</span>
                        </div>
                      )}
                      <div className="total-final">
                        <span>Total:</span>
                        <span>${getTotal().toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => setCurrentStep('details')} 
                      className="checkout-button"
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
          <div className="customer-details-container">
            <Card className="customer-details-card">
              <h2 className="customer-details-title">Customer Information</h2>
              
              <div className="customer-form-grid">
                <div className="form-field">
                  <label className="form-label">First Name *</label>
                  <input
                    type="text"
                    value={customerInfo.firstName}
                    onChange={(e) => handleCustomerInfoChange('firstName', e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Last Name *</label>
                  <input
                    type="text"
                    value={customerInfo.lastName}
                    onChange={(e) => handleCustomerInfoChange('lastName', e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleCustomerInfoChange('email', e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Phone *</label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => handleCustomerInfoChange('phone', e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {orderType === 'delivery' && (
                <div className="delivery-address-section">
                  <h3 className="delivery-address-title">Delivery Address</h3>
                  <div className="delivery-address-fields">
                    <div>
                      <label className="form-label">Address *</label>
                      <input
                        type="text"
                        value={customerInfo.address}
                        onChange={(e) => handleCustomerInfoChange('address', e.target.value)}
                        className="form-input"
                        placeholder="Street address"
                        required
                      />
                    </div>
                    <div className="delivery-address-row">
                      <div>
                        <label className="form-label">City *</label>
                        <input
                          type="text"
                          value={customerInfo.city}
                          onChange={(e) => handleCustomerInfoChange('city', e.target.value)}
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">ZIP Code *</label>
                        <input
                          type="text"
                          value={customerInfo.zipCode}
                          onChange={(e) => handleCustomerInfoChange('zipCode', e.target.value)}
                          className="form-input"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="form-field">
                <label className="form-label">Special Instructions</label>
                <textarea
                  value={customerInfo.specialInstructions}
                  onChange={(e) => handleCustomerInfoChange('specialInstructions', e.target.value)}
                  className="form-input"
                  rows="3"
                  placeholder="Any special requests or dietary restrictions?"
                />
              </div>

              <div className="confirmation-buttons">
                <Button 
                  onClick={() => setCurrentStep('menu')} 
                  variant="outline"
                  className="button-half"
                >
                  Back to Menu
                </Button>
                <Button 
                  onClick={() => setCurrentStep('payment')} 
                  className="button-half"
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
          <div className="payment-container">
            <div className="payment-form-grid gap-6">
              {/* Payment Form */}
              <Card className="payment-form-card">
                <h2 className="payment-form-title">Payment Information</h2>
                
                <div className="payment-form-fields">
                  <div>
                    <label className="form-label">Name on Card *</label>
                    <input
                      type="text"
                      value={paymentInfo.nameOnCard}
                      onChange={(e) => handlePaymentInfoChange('nameOnCard', e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Card Number *</label>
                    <input
                      type="text"
                      value={paymentInfo.cardNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 16);
                        handlePaymentInfoChange('cardNumber', value);
                      }}
                      className="form-input"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="grid-2">
                    <div>
                      <label className="form-label">Expiry Date *</label>
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
                        className="form-input"
                        placeholder="MM/YY"
                        maxLength="5"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">CVV *</label>
                      <input
                        type="text"
                        value={paymentInfo.cvv}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                          handlePaymentInfoChange('cvv', value);
                        }}
                        className="form-input"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="confirmation-buttons">
                  <Button 
                    onClick={() => setCurrentStep('details')} 
                    variant="outline"
                    className="button-half"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={processOrder} 
                    className="button-half"
                    disabled={!validatePaymentInfo() || isProcessing}
                  >
                    {isProcessing ? 'Processing...' : `Place Order - $${getTotal().toFixed(2)}`}
                  </Button>
                </div>
              </Card>

              {/* Order Summary */}
              <Card className="order-summary-card">
                <h3 className="order-summary-header">Order Summary</h3>
                
                <div className="order-summary-items">
                  {cart.map(item => (
                    <div key={item.id} className="order-summary-item">
                      <div>
                        <span className="order-summary-item-name">{item.name}</span>
                        <span className="order-summary-item-quantity">x{item.quantity}</span>
                      </div>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="order-summary-totals">
                  <div className="order-summary-row">
                    <span>Subtotal:</span>
                    <span>${getCartSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="order-summary-row">
                    <span>Tax:</span>
                    <span>${getTaxAmount().toFixed(2)}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="order-summary-row">
                      <span>Delivery Fee:</span>
                      <span>${getDeliveryFee().toFixed(2)}</span>
                    </div>
                  )}
                  <div className="total-final">
                    <span>Total:</span>
                    <span>${getTotal().toFixed(2)}</span>
                  </div>
                </div>

                <div className="order-summary-info">
                  <h4 className="order-summary-info-title">
                    {orderType === 'delivery' ? 'Delivery' : 'Pickup'} Information:
                  </h4>
                  <p className="order-summary-info-item">
                    {customerInfo.firstName} {customerInfo.lastName}
                  </p>
                  {orderType === 'delivery' && (
                    <p className="order-summary-info-item">
                      {customerInfo.address}, {customerInfo.city} {customerInfo.zipCode}
                    </p>
                  )}
                  <p className="order-summary-info-item">
                    Estimated time: {orderType === 'delivery' ? '45-60 minutes' : '20-30 minutes'}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        );

      case 'confirmation':
        return (
          <div className="confirmation-container">
            <Card className="confirmation-card">
              <div className="confirmation-success-icon">✓</div>
              <h2 className="confirmation-title">Order Confirmed!</h2>
              <p className="confirmation-subtitle">Thank you for your order!</p>
              
              <div className="confirmation-details">
                <h3 className="confirmation-details-title">Order Details</h3>
                <p className="confirmation-detail-item"><strong>Order Number:</strong> {orderNumber}</p>
                <p className="confirmation-detail-item"><strong>Customer:</strong> {customerInfo.firstName} {customerInfo.lastName}</p>
                <p className="confirmation-detail-item"><strong>Email:</strong> {customerInfo.email}</p>
                <p className="confirmation-detail-item"><strong>Phone:</strong> {customerInfo.phone}</p>
                <p className="confirmation-detail-item"><strong>Order Type:</strong> {orderType.charAt(0).toUpperCase() + orderType.slice(1)}</p>
                <p className="confirmation-detail-item">
                  <strong>Estimated Time:</strong> {orderType === 'delivery' ? '45-60 minutes' : '20-30 minutes'}
                </p>
                <p className="confirmation-detail-item"><strong>Total:</strong> ${getTotal().toFixed(2)}</p>
              </div>

              <div className="confirmation-next-steps">
                <h4 className="confirmation-next-steps-title">What's Next?</h4>
                <ul className="confirmation-next-steps-list">
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
    <div className="order-page">
      <div className="order-container">
        <div className="order-header">
          <h1 className="order-title">Order Online</h1>
          <p className="order-subtitle">Fresh seafood delivered to your door or ready for pickup</p>
        </div>

        {/* Progress Steps */}
        <div className="progress-steps-container">
          <div className="progress-steps">
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
                <div key={item.step} className="progress-step-container">
                  <div className={`progress-step-circle ${
                    isActive 
                      ? 'progress-step-active' 
                      : isCompleted 
                        ? 'progress-step-completed'
                        : 'progress-step-inactive'
                  }`}>
                    {isCompleted ? '✓' : index + 1}
                  </div>
                  <span className={`progress-step-label ${
                    isActive ? 'text-red-700' : isCompleted ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {item.label}
                  </span>
                  {index < 3 && (
                    <div className={`progress-line ${
                      isCompleted ? 'progress-line-completed' : ''
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