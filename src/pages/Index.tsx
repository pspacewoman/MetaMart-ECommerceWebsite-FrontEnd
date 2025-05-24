
import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, Star, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('128 GB');
  const [selectedColor, setSelectedColor] = useState('white');
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg'
  ];

  const relatedProducts = [
    { id: 1, name: 'Meta Quest 2', price: '€599.00', image: '/placeholder.svg' },
    { id: 2, name: 'HTC Vive Cosmos', price: '€697.00', image: '/placeholder.svg' },
    { id: 3, name: 'Pico 4K Glasses', price: '€559.00', image: '/placeholder.svg' },
    { id: 4, name: 'Wireless USB Cable', price: '€18.99', image: '/placeholder.svg' },
    { id: 5, name: 'Meta Controllers', price: '€20.86', image: '/placeholder.svg' },
    { id: 6, name: 'Wireless S3 Pro Strap', price: '€109.99', image: '/placeholder.svg' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">MetaMart</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="SEARCH"
                  className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
                />
                <Search className="absolute right-4 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Deals</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">New Arrivals</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Packages</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Sign In</a>
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                Sign Up
              </button>
            </nav>
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-8 h-12">
              <button className="flex items-center space-x-1 text-sm font-medium">
                <Menu className="h-4 w-4" />
                <span>PRODUCTS</span>
              </button>
              <a href="#" className="text-sm font-medium">VR ZONE</a>
              <a href="#" className="text-sm font-medium">NEWS</a>
              <a href="#" className="text-sm font-medium">ABOUT</a>
              <a href="#" className="text-sm font-medium">OUR SERVICES</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative bg-gray-100 h-80 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-6xl font-bold text-gray-800 mb-4">
              ULTIMATE<br />
              <span className="text-gray-300">SALE</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">NEW ARRIVAL</p>
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
          <ChevronRight className="h-6 w-6" />
        </button>
      </section>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={productImages[selectedImage]} 
                alt="Meta Quest 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">Visit the Meta Quest Store</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Meta Quest 3 128Gb - groundbreaking mixed reality - powerful technology
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-6">€ 748.99</p>
            </div>

            {/* About this item */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">About this item</h3>
              <p className="text-gray-700">
                Immerse yourself in extraordinary experiences with a mixed reality headset that transforms your home into an exciting new playground where virtual elements blend with your real environment
              </p>
            </div>

            {/* Configuration Options */}
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Size</h4>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedSize('128 GB')}
                    className={`px-4 py-2 rounded-md border ${
                      selectedSize === '128 GB' ? 'bg-black text-white' : 'bg-white text-gray-700 border-gray-300'
                    }`}
                  >
                    128 GB
                  </button>
                  <button
                    onClick={() => setSelectedSize('512 GB')}
                    className={`px-4 py-2 rounded-md border ${
                      selectedSize === '512 GB' ? 'bg-black text-white' : 'bg-white text-gray-700 border-gray-300'
                    }`}
                  >
                    512 GB
                  </button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Color</h4>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedColor('white')}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === 'white' ? 'border-gray-800' : 'border-gray-300'
                    } bg-gray-200`}
                  />
                  <button
                    onClick={() => setSelectedColor('black')}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === 'black' ? 'border-gray-800' : 'border-gray-300'
                    } bg-black`}
                  />
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-l border-r border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
                  Buy Now
                </button>
                <button className="bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>

              <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
                Edit Address
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="font-medium">Features</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  </div>
                  <div>
                    <h5 className="font-medium">Mixed Reality (MR)</h5>
                    <p className="text-sm text-gray-600">Includes virtual reality</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  </div>
                  <div>
                    <h5 className="font-medium">Snapdragon® XR2 Gen 2</h5>
                    <p className="text-sm text-gray-600">lightning-fast gameplay</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  </div>
                  <div>
                    <h5 className="font-medium">Sleek Ergonomic Design</h5>
                    <p className="text-sm text-gray-600">2068 pixels x 2208 pixels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">Products related to this item</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-3 rounded" />
              <p className="font-medium text-sm mb-1">{product.price}</p>
              <p className="text-xs text-gray-600">{product.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-3"></div>
              <h3 className="font-semibold mb-1">High Quality</h3>
              <p className="text-sm text-gray-600">crafted from top materials</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-3"></div>
              <h3 className="font-semibold mb-1">Warranty Protection</h3>
              <p className="text-sm text-gray-600">Over 2 years</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-3"></div>
              <h3 className="font-semibold mb-1">Free Shipping</h3>
              <p className="text-sm text-gray-600">Order over 150 $</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-3"></div>
              <h3 className="font-semibold mb-1">24 / 7 Support</h3>
              <p className="text-sm text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Terms & Conditions</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">FIND MORE ABOUT META MART</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Home</a></li>
                <li><a href="#" className="hover:text-gray-900">Products</a></li>
                <li><a href="#" className="hover:text-gray-900">News</a></li>
                <li><a href="#" className="hover:text-gray-900">Our Company</a></li>
                <li><a href="#" className="hover:text-gray-900">Shop</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Payment</a></li>
                <li><a href="#" className="hover:text-gray-900">Addresses</a></li>
                <li><a href="#" className="hover:text-gray-900">Community</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms of Use</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-900">Websites</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">@metamart disclaimer</p>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-semibold">@metamart</span>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
