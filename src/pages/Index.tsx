
import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, Star, Menu } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import ProductGallery from '../components/ProductGallery';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('128 GB');
  const [selectedColor, setSelectedColor] = useState('white');
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop'
  ];

  const relatedProducts = [
    { id: 1, name: 'Meta Quest 2', price: '€599.00', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=200&h=200&fit=crop' },
    { id: 2, name: 'HTC Vive Cosmos', price: '€697.00', image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=200&h=200&fit=crop' },
    { id: 3, name: 'Pico 4K Glasses', price: '€559.00', image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=200&h=200&fit=crop' },
    { id: 4, name: 'Wireless USB Cable', price: '€18.99', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=200&h=200&fit=crop' },
    { id: 5, name: 'Meta Controllers', price: '€20.86', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&h=200&fit=crop' },
    { id: 6, name: 'Wireless S3 Pro Strap', price: '€109.99', image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=200&h=200&fit=crop' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold meta-blue">MetaMart</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="SEARCH"
                  className="w-full pl-4 pr-12 py-2 border border-blue-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <Search className="absolute right-4 top-2.5 h-5 w-5 text-blue-400" />
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Deals</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">New Arrivals</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Packages</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Sign In</a>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Sign Up
              </button>
            </nav>
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="border-t border-gray-200 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-8 h-12">
              <button className="flex items-center space-x-1 text-sm font-medium text-blue-700 hover:text-blue-800">
                <Menu className="h-4 w-4" />
                <span>PRODUCTS</span>
              </button>
              <a href="#" className="text-sm font-medium text-blue-700 hover:text-blue-800">VR ZONE</a>
              <a href="#" className="text-sm font-medium text-blue-700 hover:text-blue-800">NEWS</a>
              <a href="#" className="text-sm font-medium text-blue-700 hover:text-blue-800">ABOUT</a>
              <a href="#" className="text-sm font-medium text-blue-700 hover:text-blue-800">OUR SERVICES</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-blue-50 rounded-lg overflow-hidden border border-blue-200">
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
                  className={`aspect-square bg-blue-50 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-blue-500 ring-2 ring-blue-200' : 'border-blue-200 hover:border-blue-300'
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
              <p className="text-sm text-blue-600 mb-2">Visit the Meta Quest Store</p>
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
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 meta-blue">About this item</h3>
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
                    className={`px-4 py-2 rounded-md border transition-colors ${
                      selectedSize === '128 GB' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700 border-blue-300 hover:border-blue-500'
                    }`}
                  >
                    128 GB
                  </button>
                  <button
                    onClick={() => setSelectedSize('512 GB')}
                    className={`px-4 py-2 rounded-md border transition-colors ${
                      selectedSize === '512 GB' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700 border-blue-300 hover:border-blue-500'
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
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === 'white' ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300 hover:border-blue-300'
                    } bg-gray-200`}
                  />
                  <button
                    onClick={() => setSelectedColor('black')}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === 'black' ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300 hover:border-blue-300'
                    } bg-black`}
                  />
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-blue-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-blue-50 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-l border-r border-blue-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-blue-50 transition-colors"
                  >
                    +
                  </button>
                </div>
                <button className="p-2 border border-blue-300 rounded-md hover:bg-blue-50 transition-colors">
                  <Heart className="h-5 w-5 text-blue-500" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors">
                  Buy Now
                </button>
                <button className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>

              <button className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition-colors">
                Edit Address
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="font-medium meta-blue">Features</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </div>
                  <div>
                    <h5 className="font-medium">Mixed Reality (MR)</h5>
                    <p className="text-sm text-gray-600">Includes virtual reality</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </div>
                  <div>
                    <h5 className="font-medium">Snapdragon® XR2 Gen 2</h5>
                    <p className="text-sm text-gray-600">lightning-fast gameplay</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
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

      {/* Product Gallery Carousel */}
      <ProductGallery />

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8 meta-blue">Products related to this item</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="bg-white border border-blue-200 rounded-lg p-4 hover:shadow-lg hover:border-blue-300 transition-all">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-3 rounded" />
              <p className="font-medium text-sm mb-1 meta-blue">{product.price}</p>
              <p className="text-xs text-gray-600">{product.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="font-semibold mb-1 meta-blue">High Quality</h3>
              <p className="text-sm text-gray-600">crafted from top materials</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="font-semibold mb-1 meta-blue">Warranty Protection</h3>
              <p className="text-sm text-gray-600">Over 2 years</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="font-semibold mb-1 meta-blue">Free Shipping</h3>
              <p className="text-sm text-gray-600">Order over 150 $</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="font-semibold mb-1 meta-blue">24 / 7 Support</h3>
              <p className="text-sm text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-blue-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 meta-blue">Terms & Conditions</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 meta-blue">FIND MORE ABOUT META MART</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">News</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Our Company</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Shop</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Payment</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Addresses</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Websites</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">@metamart disclaimer</p>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-semibold meta-blue">@metamart</span>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                  <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
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
