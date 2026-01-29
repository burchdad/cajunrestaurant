import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

const Navbar = () => (
  <nav className="bg-red-700 text-white p-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold hover:text-red-200">
        🌶️ Cajun Cuisine
      </Link>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-red-200">Home</Link></li>
        <li><Link to="/menu" className="hover:text-red-200">Menu</Link></li>
        <li><Link to="/about" className="hover:text-red-200">About</Link></li>
        <li><Link to="/order" className="hover:text-red-200">Order</Link></li>
        <li><Link to="/reservations" className="hover:text-red-200">Reservations</Link></li>
        <li><Link to="/contact" className="hover:text-red-200">Contact</Link></li>
        <li><Link to="/login" className="hover:text-red-200">Login</Link></li>
      </ul>
    </div>
  </nav>
);

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
      <Button className="text-lg px-8 py-6">View Menu</Button>
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

const FakeLogin = () => (
  <div className="p-6 max-w-md mx-auto">
    <h2 className="text-2xl font-bold mb-4">Login</h2>
    <form className="flex flex-col space-y-4">
      <input type="text" placeholder="Username" className="p-2 border rounded" />
      <input type="password" placeholder="Password" className="p-2 border rounded" />
      <Button type="submit">Sign In</Button>
    </form>
  </div>
);

const ContactPage = () => (
  <div className="p-6 space-y-6">
    <h2 className="text-3xl font-bold">Contact Us</h2>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
      <input type="text" placeholder="Name" className="p-2 border rounded col-span-1" />
      <input type="email" placeholder="Email" className="p-2 border rounded col-span-1" />
      <textarea placeholder="Message" rows="4" className="p-2 border rounded col-span-full"></textarea>
      <Button className="col-span-full w-max">Send Message</Button>
    </form>
    <div className="mt-6">
      <h3 className="text-2xl font-semibold mb-2">Find Us</h3>
      <iframe
        className="w-full h-64 border rounded"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.9537353153174!3d-37.816279279751834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e5d3c49f3c0!2sVictoria!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
);

const HomePage = () => (
  <div>
    <Hero />
    <section className="p-6 grid md:grid-cols-3 gap-4">
      {["Bold Flavors", "Southern Comfort", "Family Vibes"].map((vibe, i) => (
        <Card key={i} className="rounded-2xl shadow-md">
          <CardContent className="p-4 text-center font-semibold">{vibe}</CardContent>
        </Card>
      ))}
    </section>
  </div>
);

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<FakeLogin />} />
        <Route path="/about" element={<div className="p-6">About Us</div>} />
        <Route path="/order" element={<div className="p-6">Order Online</div>} />
        <Route path="/reservations" element={<div className="p-6">Reservations</div>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
