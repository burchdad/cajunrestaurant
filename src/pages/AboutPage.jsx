import React from "react";
import { Card, CardContent } from "../components/ui/card";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-6 space-y-12 pt-24">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bringing the freshest catch from sea to table since 1995
        </p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded by Captain Mike Anderson in 1995, our restaurant brings the finest ocean bounty 
            directly to your table. Growing up in a fishing family along the coast, Captain Mike learned 
            the art of selecting the freshest catch and preparing it with respect for the sea's gifts.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every dish we serve honors the maritime traditions passed down through generations of fishermen. 
            From our perfectly grilled salmon to our signature seafood paella, we stay true to the flavors 
            that celebrate the ocean's abundance.
          </p>
        </div>
        <div 
          className="h-80 rounded-lg bg-cover bg-center shadow-lg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800')" }}
        />
      </div>

      {/* Values Section */}
      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl text-center">🐟</div>
              <h3 className="text-xl font-semibold text-center">Freshness</h3>
              <p className="text-gray-600 text-center">
                Daily sourced seafood from trusted local fishermen and sustainable suppliers
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl text-center">⚓</div>
              <h3 className="text-xl font-semibold text-center">Community</h3>
              <p className="text-gray-600 text-center">
                Creating a welcoming harbor where everyone feels at home
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
              <h3 className="text-xl font-semibold">Captain Mike Anderson</h3>
              <p className="text-gray-600">Head Chef & Owner</p>
              <p className="text-sm text-gray-500">30+ years of seafood expertise</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-64 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400')" }}
            />
            <CardContent className="p-6 text-center space-y-2">
              <h3 className="text-xl font-semibold">Chef Elena Rodriguez</h3>
              <p className="text-gray-600">Sous Chef</p>
              <p className="text-sm text-gray-500">Specializes in fresh fish and shellfish</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-64 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400')" }}
            />
            <CardContent className="p-6 text-center space-y-2">
              <h3 className="text-xl font-semibold">Marina Bay</h3>
              <p className="text-gray-600">Restaurant Manager</p>
              <p className="text-sm text-gray-500">Ensuring every guest feels like family</p>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutPage;