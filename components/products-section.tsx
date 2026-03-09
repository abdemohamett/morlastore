"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Blue Long-Sleeve T-Shirt",
    price: "$15.00",
    originalPrice: "$25.00",
    rating: 4.8,
    reviews: 145,
    badge: "Best Seller",
    category: "Tops",
    material: "Premium Cotton",
    image: "/images/product1.png",
    hoverImage: "/images/product1.png"
  },
  {
    id: 2,
    name: "Denim Blue Jeans",
    price: "$35.00",
    originalPrice: "$55.00",
    rating: 4.7,
    reviews: 98,
    badge: "New",
    category: "Bottoms",
    material: "Denim Cotton",
    image: "/images/product2.png",
    hoverImage: "/images/product2.png"
  },
  {
    id: 3,
    name: "Cream Long-Sleeve T-Shirt",
    price: "$20.00",
    originalPrice: "$30.00",
    rating: 4.9,
    reviews: 167,
    badge: "Premium",
    category: "Tops",
    material: "Soft Cotton",
    image: "/images/product3.png",
    hoverImage: "/images/product3.png"
  },
  {
    id: 4,
    name: "Beige Pant",
    price: "$38.00",
    originalPrice: "$58.00",
    rating: 4.6,
    reviews: 112,
    badge: "Limited",
    category: "Bottoms",
    material: "Cotton Blend",
    image: "/images/product4.png",
    hoverImage: "/images/product4.png"
  },
  {
    id: 5,
    name: "Burgundy Pant",
    price: "$40.00",
    originalPrice: "$60.00",
    rating: 5.0,
    reviews: 89,
    badge: "Exclusive",
    category: "Bottoms",
    material: "Premium Fabric",
    image: "/images/product5.png",
    hoverImage: "/images/product5.png"
  },
  {
    id: 6,
    name: "Polo T-Shirt",
    price: "$25.00",
    originalPrice: "$35.00",
    rating: 4.8,
    reviews: 134,
    badge: "Classic",
    category: "Tops",
    material: "Cotton Pique",
    image: "/images/product6.png",
    hoverImage: "/images/product6.png"
  },
  {
    id: 7,
    name: "Linen Shirt",
    price: "$35.00",
    originalPrice: "$50.00",
    rating: 4.7,
    reviews: 76,
    badge: "Casual",
    category: "Tops",
    material: "Premium Linen",
    image: "/images/product7.png",
    hoverImage: "/images/product7.png"
  }
];

interface CartItem {
  product: typeof products[0];
  quantity: number;
}

export default function ProductsSection() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedQuantities, setSelectedQuantities] = useState<{[key: number]: number}>({});
  const [showQuantitySelector, setShowQuantitySelector] = useState<{[key: number]: boolean}>({});

  const addToCart = (product: typeof products[0]) => {
    const quantity = selectedQuantities[product.id] || 1;
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
    // Reset quantity after adding to cart
    setSelectedQuantities(prev => ({ ...prev, [product.id]: 1 }));
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.product.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const sendToWhatsApp = () => {
    const businessNumber = "619042197"; // Replace with actual WhatsApp number
    let message = "🛍️ *New Order from MORLA Store*\n\n";
    message += "📋 *Order Details:*\n";
    
    cart.forEach((item, index) => {
      message += `\n${index + 1}. ${item.product.name}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ${item.product.price} each\n`;
      message += `   Subtotal: $${(parseFloat(item.product.price.replace('$', '')) * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\n💰 *Total: $${getTotalPrice().toFixed(2)}*\n`;
    message += `\n🙏 Thank you for your order!`;
    
    const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  return (
    <section id="products" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-muted px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-border">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium tracking-wide text-muted-foreground">Curated Collection</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            Timeless
            <br />
            <span className="text-primary">
              Essentials
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12 font-light">
            Each piece in our collection represents the pinnacle of craftsmanship, 
            designed to transcend seasons and trends. Discover garments that tell stories 
            of heritage, innovation, and uncompromising quality.
          </p>
        </div>

        {/* Luxury Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Card */}
              <div className="relative overflow-hidden rounded-2xl bg-muted transition-all duration-700 hover:shadow-2xl">
                {/* Product Image */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={hoveredProduct === product.id ? product.hoverImage : product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-1000 ease-in-out"
                  />
                  
                  {/* Overlay with actions */}
                  <div className={`absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent transition-all duration-500 flex items-end ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className={`w-full p-6 transition-all duration-700 transform ${
                      hoveredProduct === product.id ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-6 opacity-0 scale-95'
                    }`}>
                      {showQuantitySelector[product.id] ? (
                        <>
                          {/* Quantity Selector */}
                          <div className="flex items-center justify-center mb-3">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedQuantities(prev => ({
                                  ...prev,
                                  [product.id]: Math.max(1, (prev[product.id] || 1) - 1)
                                }));
                              }}
                              className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm border border-primary text-primary-foreground hover:bg-primary/30 flex items-center justify-center"
                            >
                              -
                            </button>
                            <span className="mx-4 text-primary-foreground font-semibold text-lg min-w-[3rem] text-center">
                              {selectedQuantities[product.id] || 1}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedQuantities(prev => ({
                                  ...prev,
                                  [product.id]: (prev[product.id] || 1) + 1
                                }));
                              }}
                              className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm border border-primary text-primary-foreground hover:bg-primary/30 flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                          
                          <Button 
                            size="lg"
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-base font-semibold shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-transparent hover:border-primary/50"
                            onClick={() => addToCart(product)}
                          >
                            <ShoppingCart className="mr-3 h-5 w-5" />
                            Add to Cart ({selectedQuantities[product.id] || 1})
                          </Button>
                        </>
                      ) : (
                        <Button 
                          size="lg"
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-base font-semibold shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-transparent hover:border-primary/50"
                          onClick={() => {
                            addToCart(product);
                            setShowQuantitySelector(prev => ({ ...prev, [product.id]: true }));
                          }}
                        >
                          <ShoppingCart className="mr-3 h-5 w-5" />
                          Add to Cart
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {product.name}
                </h3>
                
                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-foreground">
                    {product.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                  <span className="text-xs bg-destructive/10 text-destructive px-2 py-1 rounded-full">
                    {Math.round((1 - parseInt(product.price.slice(1)) / parseInt(product.originalPrice.slice(1))) * 100)}% OFF
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center pt-12 border-t border-border">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500 px-16 py-8 rounded-full text-lg font-medium tracking-wide group"
          >
            <span className="mr-3">Explore Full Collection</span>
            <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
              <span className="w-2 h-2 bg-current rounded-full ml-1"></span>
            </div>
          </Button>
        </div>

        {/* Floating Cart Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-40"
        >
          <ShoppingCart className="h-6 w-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </button>

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-0 z-[9999] overflow-hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsCartOpen(false)}
            />
            
            {/* Cart Panel */}
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-card shadow-2xl transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <h2 className="text-2xl font-bold text-foreground">
                    Shopping Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)
                  </h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
                      <p className="text-muted-foreground text-lg mb-4">
                        Your cart is empty
                      </p>
                      <p className="text-muted-foreground/70 text-sm">
                        Add some products to get started!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div key={item.product.id} className="flex items-center space-x-4 bg-muted p-4 rounded-lg border border-border">
                          <div className="w-20 h-20 relative">
                            <Image
                              src={item.product.image}
                              alt={item.product.name}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground text-lg">
                              {item.product.name}
                            </h3>
                            <p className="text-muted-foreground font-medium">
                              {item.product.price}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center font-semibold text-secondary-foreground transition-colors"
                            >
                              -
                            </button>
                            <span className="w-12 text-center font-bold text-lg text-foreground">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center font-semibold text-secondary-foreground transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="w-10 h-10 rounded-full bg-destructive/10 hover:bg-destructive/20 flex items-center justify-center text-destructive transition-colors"
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                  <div className="border-t border-border p-6 bg-muted">
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-lg">
                        <span className="text-muted-foreground">Subtotal:</span>
                        <span className="font-semibold text-foreground">
                          ${getTotalPrice().toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-xl font-bold">
                        <span className="text-foreground">Total:</span>
                        <span className="text-foreground">
                          ${getTotalPrice().toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Button
                        onClick={sendToWhatsApp}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-full text-lg transition-colors"
                      >
                        📱 Send Order via WhatsApp
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setIsCartOpen(false)}
                        className="w-full border-2 border-border text-foreground hover:bg-muted font-semibold py-4 rounded-full text-lg transition-colors"
                      >
                        Continue Shopping
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
