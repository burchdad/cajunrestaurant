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

  const groupedMenu = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

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
                    <Button className="w-full py-6 text-lg">
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        partySize: '2',
        specialRequests: ''
      });
    }, 3000);
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
              <div className="text-center py-12 space-y-4">
                <div className="text-6xl">✓</div>
                <h3 className="text-2xl font-bold text-green-600">Reservation Submitted!</h3>
                <p className="text-gray-600">
                  We'll send you a confirmation email shortly.
                </p>
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
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent"
                    placeholder="John Doe"
                  />
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
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent"
                    placeholder="john@example.com"
                  />
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
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
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
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent"
                    />
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
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-transparent"
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
