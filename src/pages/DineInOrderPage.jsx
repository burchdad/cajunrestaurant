import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import "./DineInOrderPage.css"; // Use dedicated CSS file

const DineInOrderPage = () => {
  const [cart, setCart] = useState([]);
  const [currentStep, setCurrentStep] = useState("seating"); // seating, menu, details, payment, confirmation
  const [seatingInfo, setSeatingInfo] = useState({
    location: "", // "table" or "bar"
    number: "",
    customerName: ""
  });
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
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
        description: "Classic Florida key lime pie with graham cracker crust",
        image: "/photos/Desserts/key-lime-pie.jpg"
      },
      { 
        id: 22,
        name: "Chocolate Lava Cake", 
        price: 8.99, 
        category: "Desserts",
        description: "Warm chocolate cake with molten center and vanilla ice cream",
        image: "/photos/Desserts/chocolate-lava-cake.jpg"
      },
      { 
        id: 23,
        name: "Crème Brûlée", 
        price: 6.99, 
        category: "Desserts",
        description: "Classic vanilla custard with caramelized sugar top",
        image: "/photos/Desserts/creme-brulee.jpg"
      }
    ]
  };

  const [activeCategory, setActiveCategory] = useState('appetizers');
  const allMenuItems = [...menuData.appetizers, ...menuData.mains, ...menuData.sides, ...menuData.kids, ...menuData.desserts];

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
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map(item =>
        item.id === itemId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const handleSeatingSubmit = () => {
    if (seatingInfo.location && seatingInfo.number && seatingInfo.customerName.trim()) {
      setCurrentStep("menu");
    }
  };

  const handleOrderSubmit = async () => {
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      const newOrderNumber = Math.floor(Math.random() * 10000) + 1000;
      setOrderNumber(newOrderNumber);
      setCurrentStep("confirmation");
      setIsProcessing(false);
    }, 2000);
  };

  const resetOrder = () => {
    setCart([]);
    setCurrentStep("seating");
    setSeatingInfo({ location: "", number: "", customerName: "" });
    setCustomerInfo({ firstName: "", lastName: "", phone: "", specialInstructions: "" });
    setPaymentInfo({ cardNumber: "", expiryDate: "", cvv: "", nameOnCard: "" });
    setOrderNumber(null);
    setIsProcessing(false);
  };

  // Seating Step
  if (currentStep === "seating") {
    return (
      <div className="order-page">
        <div className="order-container">
          <div className="order-header">
            <h1>Dine-In Order</h1>
            <p>Please tell us where you're seated</p>
          </div>

          <Card className="seating-card">
            <div className="seating-form">
              <h2>Seating Information</h2>
              
              <div className="seating-options">
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="location"
                      value="table"
                      checked={seatingInfo.location === "table"}
                      onChange={(e) => setSeatingInfo({...seatingInfo, location: e.target.value, number: ""})}
                    />
                    🪑 Table
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="location"
                      value="bar"
                      checked={seatingInfo.location === "bar"}
                      onChange={(e) => setSeatingInfo({...seatingInfo, location: e.target.value, number: ""})}
                    />
                    🍺 Bar
                  </label>
                </div>
              </div>

              {seatingInfo.location && (
                <div className="number-selection">
                  <label>
                    {seatingInfo.location === "table" ? "Table Number:" : "Bar Seat:"}
                    {seatingInfo.location === "table" ? (
                      <select
                        value={seatingInfo.number}
                        onChange={(e) => setSeatingInfo({...seatingInfo, number: e.target.value})}
                        className="seat-select"
                      >
                        <option value="">Select Table</option>
                        {Array.from({length: 20}, (_, i) => i + 1).map(num => (
                          <option key={num} value={num}>Table {num}</option>
                        ))}
                      </select>
                    ) : (
                      <select
                        value={seatingInfo.number}
                        onChange={(e) => setSeatingInfo({...seatingInfo, number: e.target.value})}
                        className="seat-select"
                      >
                        <option value="">Select Bar Seat</option>
                        {Array.from({length: 12}, (_, i) => i + 1).map(num => (
                          <option key={num} value={num}>Seat {num}</option>
                        ))}
                      </select>
                    )}
                  </label>
                </div>
              )}

              <div className="customer-name">
                <label>
                  Name for Order:
                  <input
                    type="text"
                    value={seatingInfo.customerName}
                    onChange={(e) => setSeatingInfo({...seatingInfo, customerName: e.target.value})}
                    placeholder="Enter your name"
                    className="name-input"
                  />
                </label>
              </div>

              <Button 
                onClick={handleSeatingSubmit}
                disabled={!seatingInfo.location || !seatingInfo.number || !seatingInfo.customerName.trim()}
                className="continue-btn"
              >
                Continue to Menu
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Menu Step
  if (currentStep === "menu") {
    return (
      <div className="order-page">
        <div className="order-container">
          <div className="order-header">
            <h1>Dine-In Menu</h1>
            <p>
              Ordering for: <strong>{seatingInfo.customerName}</strong> - 
              {seatingInfo.location === "table" ? ` Table ${seatingInfo.number}` : ` Bar Seat ${seatingInfo.number}`}
            </p>
            <Button onClick={() => setCurrentStep("seating")} className="back-btn">
              Change Seating
            </Button>
          </div>

          <div className="menu-layout">
            {/* Menu Categories */}
            <div className="menu-categories">
              {Object.keys(menuData).map((category) => (
                <button
                  key={category}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div className="menu-items">
              {menuData[activeCategory].map((item) => (
                <Card key={item.id} className="menu-item-card">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="menu-item-image"
                    onError={(e) => {
                      e.target.src = "/photos/placeholder-food.jpg";
                    }}
                  />
                  <div className="menu-item-info">
                    <h3>{item.name}</h3>
                    <p className="description">{item.description}</p>
                    <div className="price-add">
                      <span className="price">${item.price}</span>
                      <Button onClick={() => addToCart(item)}>Add to Order</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Cart Sidebar */}
            {cart.length > 0 && (
              <div className="cart-sidebar">
                <h3>Your Order</h3>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      <button onClick={() => removeFromCart(item.id)} className="remove-btn">×</button>
                    </div>
                  </div>
                ))}
                <div className="cart-total">
                  <strong>Total: ${calculateTotal()}</strong>
                </div>
                <Button 
                  onClick={() => setCurrentStep("details")}
                  className="checkout-btn"
                  disabled={cart.length === 0}
                >
                  Continue to Details
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Details Step
  if (currentStep === "details") {
    return (
      <div className="order-page">
        <div className="order-container">
          <div className="order-header">
            <h1>Order Details</h1>
            <p>Please provide your contact information</p>
          </div>

          <div className="details-layout">
            <Card className="details-form">
              <h2>Contact Information</h2>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="First Name"
                  value={customerInfo.firstName}
                  onChange={(e) => setCustomerInfo({...customerInfo, firstName: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={customerInfo.lastName}
                  onChange={(e) => setCustomerInfo({...customerInfo, lastName: e.target.value})}
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
              />
              <textarea
                placeholder="Special instructions for the kitchen..."
                value={customerInfo.specialInstructions}
                onChange={(e) => setCustomerInfo({...customerInfo, specialInstructions: e.target.value})}
                rows="3"
              ></textarea>

              <div className="form-actions">
                <Button onClick={() => setCurrentStep("menu")} className="back-btn">
                  Back to Menu
                </Button>
                <Button 
                  onClick={() => setCurrentStep("payment")}
                  disabled={!customerInfo.firstName || !customerInfo.lastName || !customerInfo.phone}
                >
                  Continue to Payment
                </Button>
              </div>
            </Card>

            <Card className="order-summary">
              <h2>Order Summary</h2>
              <div className="summary-seating">
                <strong>
                  {seatingInfo.location === "table" ? `Table ${seatingInfo.number}` : `Bar Seat ${seatingInfo.number}`}
                </strong>
                <p>Name: {seatingInfo.customerName}</p>
              </div>
              {cart.map((item) => (
                <div key={item.id} className="summary-item">
                  <span>{item.quantity}x {item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="summary-total">
                <strong>Total: ${calculateTotal()}</strong>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Payment Step
  if (currentStep === "payment") {
    return (
      <div className="order-page">
        <div className="order-container">
          <div className="order-header">
            <h1>Payment</h1>
            <p>Complete your dine-in order</p>
          </div>

          <div className="payment-layout">
            <Card className="payment-form">
              <h2>Payment Information</h2>
              <input
                type="text"
                placeholder="Card Number"
                value={paymentInfo.cardNumber}
                onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
              />
              <div className="form-row">
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={paymentInfo.expiryDate}
                  onChange={(e) => setPaymentInfo({...paymentInfo, expiryDate: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="CVV"
                  value={paymentInfo.cvv}
                  onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})}
                />
              </div>
              <input
                type="text"
                placeholder="Name on Card"
                value={paymentInfo.nameOnCard}
                onChange={(e) => setPaymentInfo({...paymentInfo, nameOnCard: e.target.value})}
              />

              <div className="form-actions">
                <Button onClick={() => setCurrentStep("details")} className="back-btn">
                  Back to Details
                </Button>
                <Button 
                  onClick={handleOrderSubmit}
                  disabled={!paymentInfo.cardNumber || !paymentInfo.expiryDate || !paymentInfo.cvv || !paymentInfo.nameOnCard || isProcessing}
                  className="place-order-btn"
                >
                  {isProcessing ? "Processing..." : `Place Order - $${calculateTotal()}`}
                </Button>
              </div>
            </Card>

            <Card className="order-summary">
              <h2>Final Order Review</h2>
              <div className="summary-seating">
                <strong>
                  {seatingInfo.location === "table" ? `Table ${seatingInfo.number}` : `Bar Seat ${seatingInfo.number}`}
                </strong>
                <p>Name: {seatingInfo.customerName}</p>
              </div>
              {cart.map((item) => (
                <div key={item.id} className="summary-item">
                  <span>{item.quantity}x {item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              {customerInfo.specialInstructions && (
                <div className="special-instructions">
                  <strong>Special Instructions:</strong>
                  <p>{customerInfo.specialInstructions}</p>
                </div>
              )}
              <div className="summary-total">
                <strong>Total: ${calculateTotal()}</strong>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Confirmation Step
  if (currentStep === "confirmation") {
    return (
      <div className="order-page">
        <div className="order-container">
          <div className="confirmation-content">
            <div className="success-icon">✅</div>
            <h1>Order Confirmed!</h1>
            <div className="order-details">
              <p><strong>Order Number:</strong> #{orderNumber}</p>
              <p><strong>Location:</strong> {seatingInfo.location === "table" ? `Table ${seatingInfo.number}` : `Bar Seat ${seatingInfo.number}`}</p>
              <p><strong>Name:</strong> {seatingInfo.customerName}</p>
              <p><strong>Total:</strong> ${calculateTotal()}</p>
            </div>
            <p className="confirmation-message">
              Your order has been sent to the kitchen! Our staff will bring your food directly to your {seatingInfo.location === "table" ? "table" : "bar seat"}.
            </p>
            <div className="confirmation-actions">
              <Button onClick={resetOrder} className="new-order-btn">
                Place Another Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default DineInOrderPage;