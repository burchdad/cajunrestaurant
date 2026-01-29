import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import Carousel from "./components/Carousel";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-700 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-red-200 transition-colors duration-300">
            🌶️ Cajun Cuisine
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li><Link to="/" className="hover:text-red-200 transition-colors duration-300">Home</Link></li>
            <li><Link to="/menu" className="hover:text-red-200 transition-colors duration-300">Menu</Link></li>
            <li><Link to="/about" className="hover:text-red-200 transition-colors duration-300">About</Link></li>
            <li><Link to="/order" className="hover:text-red-200 transition-colors duration-300">Order</Link></li>
            <li><Link to="/reservations" className="hover:text-red-200 transition-colors duration-300">Reservations</Link></li>
            <li><Link to="/contact" className="hover:text-red-200 transition-colors duration-300">Contact</Link></li>
            <li><Link to="/login" className="hover:text-red-200 transition-colors duration-300">Login</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-2 animate-fadeIn">
            <li><Link to="/" className="block py-2 hover:text-red-200 transition-colors duration-300" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/menu" className="block py-2 hover:text-red-200 transition-colors duration-300" onClick={() => setIsOpen(false)}>Menu</Link></li>
            <li><Link to="/about" className="block py-2 hover:text-red-200 transition-colors duration-300" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/order" className="block py-2 hover:text-red-200 transition-colors duration-300" onClick={() => setIsOpen(false)}>Order</Link></li>
            <li><Link to="/reservations" className="block py-2 hover:text-red-200 transition-colors duration-300" onClick={() => setIsOpen(false)}>Reservations</Link></li>
            <li><Link to="/contact" className="block py-2 hover:text-red-200 transition-colors duration-300" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><Link to="/login" className="block py-2 hover:text-red-200 transition-colors duration-300" onClick={() => setIsOpen(false)}>Login</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

const Hero = () => (
  <div 
    className="relative h-96 bg-cover bg-center flex items-center justify-center text-white"
    style={{ 
      backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600')"
    }}
  >
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-4">Authentic Cajun Cuisine</h1>
      <p className="text-xl mb-6">Bold Flavors from the Heart of Louisiana</p>
      <Link to="/menu">
        <Button className="text-lg px-8 py-6">View Menu</Button>
      </Link>
    </div>
  </div>
);

const MenuPage = () => {
  const menu = {
    "Appetizers": [
      "Cajun Fried Pickles",
      "Boudin Balls",
      "Crawfish Dip",
      "Fried Okra"
    ],
    "Mains": [
      "Jambalaya",
      "Gumbo (Chicken & Sausage or Seafood)",
      "Blackened Catfish",
      "Shrimp Étouffée",
      "Red Beans & Rice with Andouille",
      "Po' Boy Sandwich (Shrimp or Oyster)"
    ],
    "Sides": [
      "Dirty Rice",
      "Collard Greens",
      "Cornbread",
      "Mac & Cheese",
      "Roasted Red Potatoes"
    ]
  };

  const printMenu = () => {
    window.print();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Menu</h2>
        <Button onClick={printMenu}>Download / Print Menu</Button>
      </div>
      {Object.entries(menu).map(([section, items]) => (
        <div key={section} className="mb-6">
          <h3 className="text-2xl font-semibold text-red-700 mb-2">{section}</h3>
          <ul className="list-disc list-inside space-y-1">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const FakeLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <label htmlFor="username" className="sr-only">Username</label>
        <input id="username" type="text" placeholder="Username" className="p-2 border rounded" />
        <label htmlFor="password" className="sr-only">Password</label>
        <input id="password" type="password" placeholder="Password" className="p-2 border rounded" />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl" onSubmit={handleSubmit}>
        <label htmlFor="contact-name" className="sr-only">Name</label>
        <input id="contact-name" type="text" placeholder="Name" className="p-2 border rounded col-span-1" />
        <label htmlFor="contact-email" className="sr-only">Email</label>
        <input id="contact-email" type="email" placeholder="Email" className="p-2 border rounded col-span-1" />
        <label htmlFor="contact-message" className="sr-only">Message</label>
        <textarea id="contact-message" placeholder="Message" rows="4" className="p-2 border rounded col-span-full"></textarea>
        <Button type="submit" className="col-span-full w-max">Send Message</Button>
      </form>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-2">Find Us</h3>
        <iframe
          className="w-full h-64 border rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.9537353153174!3d-37.816279279751834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e5d3c49f3c0!2sVictoria!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau"
          allowFullScreen=""
          loading="lazy"
          title="Restaurant Location Map"
        ></iframe>
      </div>
    </div>
  );
};

const HomePage = () => {
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600",
      title: "Authentic Cajun Cuisine",
      description: "Bold Flavors from the Heart of Louisiana"
    },
    {
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600",
      title: "Fresh Ingredients",
      description: "Made with Love Daily"
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600",
      title: "Dine with Family & Friends",
      description: "Creating Memories Since 1995"
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Carousel Section */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Experience Our Kitchen</h2>
        <Carousel images={carouselImages} autoPlay={true} interval={4000} />
      </section>

      <section className="p-6 grid md:grid-cols-3 gap-4">
        {["Bold Flavors", "Southern Comfort", "Family Vibes"].map((vibe, i) => (
          <Card key={i} className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-4 text-center font-semibold">{vibe}</CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-red-700">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bringing the authentic taste of Louisiana to your table since 1995
        </p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded by Chef Marie Boudreaux in 1995, our restaurant brings the rich culinary traditions 
            of Louisiana to life. Growing up in the bayous of Lafayette, Chef Marie learned the art of 
            Cajun cooking from her grandmother, who taught her that food is more than sustenance—it's 
            love, community, and heritage.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every dish we serve honors these traditions, using time-tested recipes passed down through 
            generations. From our perfectly seasoned gumbo to our melt-in-your-mouth étouffée, we stay 
            true to the authentic flavors that make Cajun cuisine unforgettable.
          </p>
        </div>
        <div 
          className="h-80 rounded-lg bg-cover bg-center shadow-lg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800')" }}
        />
      </div>

      {/* Values Section */}
      <div className="bg-red-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl text-center">🌶️</div>
              <h3 className="text-xl font-semibold text-center">Authenticity</h3>
              <p className="text-gray-600 text-center">
                Traditional recipes and techniques that honor Cajun heritage
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl text-center">❤️</div>
              <h3 className="text-xl font-semibold text-center">Community</h3>
              <p className="text-gray-600 text-center">
                Creating a warm, welcoming space where everyone feels at home
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl text-center">✨</div>
              <h3 className="text-xl font-semibold text-center">Quality</h3>
              <p className="text-gray-600 text-center">
                Fresh, locally-sourced ingredients prepared with care daily
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-64 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400')" }}
            />
            <CardContent className="p-6 text-center space-y-2">
              <h3 className="text-xl font-semibold">Chef Marie Boudreaux</h3>
              <p className="text-red-700 font-medium">Founder & Head Chef</p>
              <p className="text-gray-600 text-sm">
                30+ years bringing authentic Cajun flavors to life
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-64 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400')" }}
            />
            <CardContent className="p-6 text-center space-y-2">
              <h3 className="text-xl font-semibold">Jean-Paul Thibodeaux</h3>
              <p className="text-red-700 font-medium">Sous Chef</p>
              <p className="text-gray-600 text-sm">
                Expert in seafood and traditional gumbo preparation
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-64 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400')" }}
            />
            <CardContent className="p-6 text-center space-y-2">
              <h3 className="text-xl font-semibold">Sarah Landry</h3>
              <p className="text-red-700 font-medium">Pastry Chef</p>
              <p className="text-gray-600 text-sm">
                Specializing in beignets and traditional Southern desserts
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800">Come Visit Us!</h2>
        <p className="text-gray-600">Experience authentic Cajun cuisine in a warm, welcoming atmosphere</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/menu">
            <Button className="px-6 py-6">View Our Menu</Button>
          </Link>
          <Link to="/reservations">
            <Button className="px-6 py-6 bg-gray-700 hover:bg-gray-800">Make a Reservation</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const OrderOnlinePage = () => {
  const [cart, setCart] = useState([]);
  const [checkoutStep, setCheckoutStep] = useState('menu'); // 'menu', 'checkout', 'confirmation'
  const [orderType, setOrderType] = useState('delivery'); // 'delivery' or 'pickup'
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '', // Note: In production, use a payment gateway like Stripe
    cardExpiry: '',
    cardCVV: '',
    specialInstructions: ''
  });
  const [orderNumber, setOrderNumber] = useState('');
  const [formErrors, setFormErrors] = useState({});
  
  // Constants for fees and rates
  const DELIVERY_FEE = 5.99;
  const TAX_RATE = 0.0825;
  
  const menuItems = [
    {
      id: 1,
      category: "Appetizers",
      name: "Cajun Fried Pickles",
      description: "Crispy dill pickles with tangy remoulade sauce",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1534939268936-c75f6f1cc8c7?w=400"
    },
    {
      id: 2,
      category: "Appetizers",
      name: "Boudin Balls",
      description: "Traditional Cajun rice and pork sausage, deep fried",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=400"
    },
    {
      id: 3,
      category: "Appetizers",
      name: "Crawfish Dip",
      description: "Creamy crawfish dip with crispy pita chips",
      price: 11.99,
      image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=400"
    },
    {
      id: 4,
      category: "Mains",
      name: "Jambalaya",
      description: "Traditional rice dish with chicken, sausage, and Creole spices",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400"
    },
    {
      id: 5,
      category: "Mains",
      name: "Seafood Gumbo",
      description: "Rich roux-based stew with shrimp, crab, and okra",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=400"
    },
    {
      id: 6,
      category: "Mains",
      name: "Blackened Catfish",
      description: "Fresh catfish with Cajun spices, served with dirty rice",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1580959980080-10e0e1d72d94?w=400"
    },
    {
      id: 7,
      category: "Mains",
      name: "Shrimp Étouffée",
      description: "Succulent shrimp in a rich, spicy gravy over rice",
      price: 21.99,
      image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400"
    },
    {
      id: 8,
      category: "Sides",
      name: "Dirty Rice",
      description: "Cajun rice with ground meat and vegetables",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400"
    },
    {
      id: 9,
      category: "Sides",
      name: "Collard Greens",
      description: "Slow-cooked greens with smoked ham hock",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400"
    },
    {
      id: 10,
      category: "Sides",
      name: "Cornbread",
      description: "Sweet and savory homemade cornbread",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1627672360481-33c6383e4327?w=400"
    }
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
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, change) => {
    setCart(cart.map(item => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  };

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateDeliveryFee = () => {
    return orderType === 'delivery' ? DELIVERY_FEE : 0;
  };

  const calculateTax = () => {
    return ((calculateSubtotal() + calculateDeliveryFee()) * TAX_RATE).toFixed(2);
  };

  const calculateGrandTotal = () => {
    return (calculateSubtotal() + calculateDeliveryFee() + parseFloat(calculateTax())).toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateCheckoutForm = () => {
    const errors = {};
    
    // Name validation
    if (!customerInfo.name.trim()) errors.name = 'Name is required';
    
    // Email validation (more robust pattern)
    if (!customerInfo.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (basic format check)
    if (!customerInfo.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^[\d\s\-()]+$/.test(customerInfo.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    // Delivery address validation
    if (orderType === 'delivery') {
      if (!customerInfo.address.trim()) errors.address = 'Address is required';
      if (!customerInfo.city.trim()) errors.city = 'City is required';
      if (!customerInfo.zipCode.trim()) {
        errors.zipCode = 'ZIP code is required';
      } else if (!/^\d{5}(-\d{4})?$/.test(customerInfo.zipCode)) {
        errors.zipCode = 'Please enter a valid ZIP code';
      }
    }
    
    // Payment validation (basic - in production, use payment gateway)
    // NOTE: This is a demo form. In production, never handle raw card data.
    // Use Stripe, Square, or similar PCI-compliant payment processors.
    if (!customerInfo.cardNumber.trim()) {
      errors.cardNumber = 'Card number is required';
    } else if (!/^\d{13,19}$/.test(customerInfo.cardNumber.replace(/\s/g, ''))) {
      errors.cardNumber = 'Please enter a valid card number';
    }
    
    if (!customerInfo.cardExpiry.trim()) {
      errors.cardExpiry = 'Expiry date is required';
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(customerInfo.cardExpiry)) {
      errors.cardExpiry = 'Please use MM/YY format';
    }
    
    if (!customerInfo.cardCVV.trim()) {
      errors.cardCVV = 'CVV is required';
    } else if (!/^\d{3,4}$/.test(customerInfo.cardCVV)) {
      errors.cardCVV = 'CVV must be 3 or 4 digits';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCheckoutStep('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    if (!validateCheckoutForm()) {
      return;
    }
    
    // Generate more unique order number with random component
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const newOrderNumber = `ORD${timestamp}${random}`;
    setOrderNumber(newOrderNumber);
    
    // In production: Send order to backend, process payment through gateway
    // The payment info should never be stored in frontend state
    
    // Move to confirmation page
    setCheckoutStep('confirmation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartNewOrder = () => {
    setCart([]);
    setCheckoutStep('menu');
    setCustomerInfo({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zipCode: '',
      cardNumber: '',
      cardExpiry: '',
      cardCVV: '',
      specialInstructions: ''
    });
    setFormErrors({});
    setOrderNumber('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const groupedMenu = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Confirmation Page
  if (checkoutStep === 'confirmation') {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="shadow-xl">
          <CardContent className="p-8 text-center space-y-6">
            <div className="text-6xl text-green-600 mb-4">✓</div>
            <h1 className="text-4xl font-bold text-gray-800">Order Confirmed!</h1>
            <p className="text-xl text-gray-600">
              Thank you for your order, {customerInfo.name}!
            </p>
            
            <div className="bg-red-50 rounded-lg p-6 text-left space-y-4">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600 mb-1">Your Order Number</p>
                <p className="text-3xl font-bold text-red-700">{orderNumber}</p>
              </div>
              
              <div className="border-t pt-4 space-y-3">
                <h3 className="font-semibold text-lg">Order Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Order Type:</span>
                    <span className="capitalize">{orderType}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between">
                      <span className="font-medium">Delivery Address:</span>
                      <span className="text-right">
                        {customerInfo.address}<br />
                        {customerInfo.city}, {customerInfo.zipCode}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="font-medium">Contact:</span>
                    <span className="text-right">
                      {customerInfo.email}<br />
                      {customerInfo.phone}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <h3 className="font-semibold text-lg mb-3">Order Items</h3>
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.quantity}x {item.name}</span>
                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between text-sm">
                      <span>Delivery Fee:</span>
                      <span>${calculateDeliveryFee().toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span>Tax:</span>
                    <span>${calculateTax()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total:</span>
                    <span className="text-red-700">${calculateGrandTotal()}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 pt-6">
              <p className="text-gray-700">
                {orderType === 'delivery' 
                  ? 'Your order will be delivered in approximately 30-45 minutes.'
                  : 'Your order will be ready for pickup in approximately 20-30 minutes.'
                }
              </p>
              <p className="text-gray-600 text-sm">
                A confirmation email has been sent to {customerInfo.email}
              </p>
              <Button onClick={handleStartNewOrder} className="px-8 py-6">
                Start New Order
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Checkout Page
  if (checkoutStep === 'checkout') {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-6">
          <button
            onClick={() => setCheckoutStep('menu')}
            className="text-red-700 hover:text-red-800 flex items-center gap-2"
          >
            ← Back to Menu
          </button>
        </div>
        
        <h1 className="text-4xl font-bold text-center mb-8 text-red-700">Checkout</h1>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              {/* Order Type Selection */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-800">Order Type</h2>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                        orderType === 'delivery'
                          ? 'border-red-700 bg-red-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="text-2xl mb-2">🚗</div>
                      <div className="font-semibold">Delivery</div>
                      <div className="text-sm text-gray-600">30-45 min</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('pickup')}
                      className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                        orderType === 'pickup'
                          ? 'border-red-700 bg-red-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="text-2xl mb-2">🏃</div>
                      <div className="font-semibold">Pickup</div>
                      <div className="text-sm text-gray-600">20-30 min</div>
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {formErrors.name && (
                      <p className="text-red-600 text-sm mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent ${
                        formErrors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    {formErrors.phone && (
                      <p className="text-red-600 text-sm mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address (only show if delivery selected) */}
              {orderType === 'delivery' && (
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">Delivery Address</h2>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={customerInfo.address}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent ${
                          formErrors.address ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="123 Main Street"
                      />
                      {formErrors.address && (
                        <p className="text-red-600 text-sm mt-1">{formErrors.address}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={customerInfo.city}
                          onChange={handleInputChange}
                          className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent ${
                            formErrors.city ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="New Orleans"
                        />
                        {formErrors.city && (
                          <p className="text-red-600 text-sm mt-1">{formErrors.city}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={customerInfo.zipCode}
                          onChange={handleInputChange}
                          className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent ${
                            formErrors.zipCode ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="70130"
                        />
                        {formErrors.zipCode && (
                          <p className="text-red-600 text-sm mt-1">{formErrors.zipCode}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Payment Information */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Payment Information</h2>
                    <p className="text-sm text-gray-600 mt-1 bg-yellow-50 p-2 rounded">
                      ⚠️ Demo only: In production, use a PCI-compliant payment gateway (Stripe, Square, etc.)
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={customerInfo.cardNumber}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent ${
                        formErrors.cardNumber ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                    />
                    {formErrors.cardNumber && (
                      <p className="text-red-600 text-sm mt-1">{formErrors.cardNumber}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        id="cardExpiry"
                        name="cardExpiry"
                        value={customerInfo.cardExpiry}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent ${
                          formErrors.cardExpiry ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="MM/YY"
                        maxLength="5"
                      />
                      {formErrors.cardExpiry && (
                        <p className="text-red-600 text-sm mt-1">{formErrors.cardExpiry}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="cardCVV" className="block text-sm font-medium text-gray-700 mb-1">
                        CVV *
                      </label>
                      <input
                        type="text"
                        id="cardCVV"
                        name="cardCVV"
                        value={customerInfo.cardCVV}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent ${
                          formErrors.cardCVV ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="123"
                        maxLength="4"
                      />
                      {formErrors.cardCVV && (
                        <p className="text-red-600 text-sm mt-1">{formErrors.cardCVV}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Special Instructions */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-800">Special Instructions</h2>
                  <textarea
                    name="specialInstructions"
                    value={customerInfo.specialInstructions}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent"
                    placeholder="Any special requests or dietary requirements..."
                  />
                </CardContent>
              </Card>

              <Button type="submit" className="w-full py-6 text-lg">
                Place Order - ${calculateGrandTotal()}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>
                
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between text-sm border-b pb-2">
                      <div className="flex-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between text-sm">
                      <span>Delivery Fee:</span>
                      <span>${calculateDeliveryFee().toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span>Tax (8.25%):</span>
                    <span>${calculateTax()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold pt-2 border-t">
                    <span>Total:</span>
                    <span className="text-red-700">${calculateGrandTotal()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Menu Page (default)
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-700">Order Online</h1>
      
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Menu Items */}
        <div className="lg:col-span-2 space-y-8">
          {Object.entries(groupedMenu).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-red-700 pb-2">
                {category}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {items.map(item => (
                  <Card key={item.id} className="hover:shadow-xl transition-shadow duration-300">
                    <div 
                      className="h-40 bg-cover bg-center rounded-t-lg"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <CardContent className="p-4 space-y-2">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-xl font-bold text-red-700">${item.price}</span>
                        <Button 
                          onClick={() => addToCart(item)}
                          className="text-sm"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
              
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {cart.map(item => (
                      <div key={item.id} className="border-b pb-3 space-y-2">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-sm text-gray-600">${item.price} each</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-800 text-sm"
                          >
                            ✕
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                          >
                            +
                          </button>
                          <span className="ml-auto font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t space-y-4">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total:</span>
                      <span className="text-red-700">${calculateTotal()}</span>
                    </div>
                    <Button onClick={handleCheckout} className="w-full py-6 text-lg">
                      Proceed to Checkout
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const ReservationsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '2',
    specialRequests: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [reservationNumber, setReservationNumber] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateReservationForm = () => {
    const errors = {};
    
    // Name validation
    if (!formData.name.trim()) errors.name = 'Name is required';
    
    // Email validation (more robust pattern)
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^[\d\s\-()]+$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    // Date validation (check not in past)
    if (!formData.date) {
      errors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date + 'T00:00:00');
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        errors.date = 'Date cannot be in the past';
      }
    }
    
    // Time validation
    if (!formData.time) errors.time = 'Time is required';
    
    // Party size validation
    if (!formData.partySize) errors.partySize = 'Party size is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateReservationForm()) {
      return;
    }
    
    // Generate more unique reservation number with random component
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const newReservationNumber = `RES${timestamp}${random}`;
    setReservationNumber(newReservationNumber);
    
    // In production: Send data to backend
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewReservation = () => {
    setSubmitted(false);
    setReservationNumber('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      partySize: '2',
      specialRequests: ''
    });
    setFormErrors({});
  };

  // Format date for display - using components to avoid timezone issues
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Format time for display
  const formatTime = (timeString) => {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    let displayHour;
    let ampm;
    
    if (hour === 0) {
      displayHour = 12;
      ampm = 'AM';
    } else if (hour === 12) {
      displayHour = 12;
      ampm = 'PM';
    } else if (hour > 12) {
      displayHour = hour - 12;
      ampm = 'PM';
    } else {
      displayHour = hour;
      ampm = 'AM';
    }
    
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-red-700 mb-4">Make a Reservation</h1>
        <p className="text-lg text-gray-600">
          Join us for an authentic Cajun dining experience. We can't wait to serve you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Reservation Form */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            {submitted ? (
              <div className="py-12 space-y-6">
                <div className="text-center space-y-4">
                  <div className="text-6xl text-green-600">✓</div>
                  <h3 className="text-2xl font-bold text-green-600">Reservation Confirmed!</h3>
                  <p className="text-gray-600">
                    Thank you, {formData.name}! Your table is reserved.
                  </p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-6 space-y-4">
                  <div className="text-center pb-4 border-b">
                    <p className="text-sm text-gray-600 mb-1">Confirmation Number</p>
                    <p className="text-3xl font-bold text-red-700">{reservationNumber}</p>
                  </div>
                  
                  <div className="space-y-3 text-left">
                    <h4 className="font-semibold text-lg">Reservation Details</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Date:</span>
                        <span>{formatDate(formData.date)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Time:</span>
                        <span>{formatTime(formData.time)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Party Size:</span>
                        <span>{formData.partySize} {formData.partySize === '1' ? 'Guest' : 'Guests'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Contact:</span>
                        <span className="text-right">
                          {formData.email}<br />
                          {formData.phone}
                        </span>
                      </div>
                      {formData.specialRequests && (
                        <div className="pt-2 border-t">
                          <span className="font-medium block mb-1">Special Requests:</span>
                          <span className="text-gray-700">{formData.specialRequests}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <p className="text-sm text-gray-600">
                    A confirmation email has been sent to {formData.email}
                  </p>
                  <p className="text-sm text-gray-700 bg-yellow-50 p-3 rounded">
                    📝 Please arrive within 15 minutes of your reservation time
                  </p>
                  <Button onClick={handleNewReservation} className="px-8 py-6">
                    Make Another Reservation
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent ${
                      formErrors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {formErrors.name && (
                    <p className="text-red-600 text-sm mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {formErrors.email && (
                    <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent ${
                      formErrors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {formErrors.phone && (
                    <p className="text-red-600 text-sm mt-1">{formErrors.phone}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent ${
                        formErrors.date ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.date && (
                      <p className="text-red-600 text-sm mt-1">{formErrors.date}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent ${
                        formErrors.time ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select time</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                    {formErrors.time && (
                      <p className="text-red-600 text-sm mt-1">{formErrors.time}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="partySize" className="block text-sm font-medium text-gray-700 mb-1">
                    Party Size *
                  </label>
                  <select
                    id="partySize"
                    name="partySize"
                    value={formData.partySize}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                    <option value="10+">10+ Guests (Please call)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent"
                    placeholder="Allergies, dietary restrictions, celebration, etc."
                  />
                </div>

                <Button type="submit" className="w-full py-6 text-lg">
                  Reserve Your Table
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Restaurant Info */}
        <div className="space-y-6">
          <Card className="shadow-lg">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Restaurant Hours</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Thursday:</span>
                  <span>11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Friday - Saturday:</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>12:00 PM - 8:00 PM</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-medium">Address</p>
                    <p>123 Bourbon Street</p>
                    <p>New Orleans, LA 70130</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>(504) 555-CAJUN</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>info@cajuncuisine.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-red-50">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold text-gray-800">📝 Reservation Policy</h3>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>Reservations recommended for parties of 4+</li>
                <li>Walk-ins welcome based on availability</li>
                <li>Please arrive within 15 minutes of your reservation</li>
                <li>For parties of 10+, please call us directly</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<FakeLogin />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/order" element={<OrderOnlinePage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
