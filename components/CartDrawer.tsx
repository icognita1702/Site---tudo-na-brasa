
import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CONTACT_INFO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeItem, totalPrice, totalItems } = useCart();
  const [address, setAddress] = useState<string>('Buscando localização...');
  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  useEffect(() => {
    if (isOpen && address === 'Buscando localização...') {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const { latitude, longitude } = position.coords;
              const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
              const data = await response.json();
              
              if (data && data.address) {
                const street = data.address.road || data.address.pedestrian || '';
                const suburb = data.address.suburb || data.address.neighbourhood || '';
                const city = data.address.city || data.address.town || '';
                
                const formattedAddress = [street, suburb, city].filter(Boolean).join(', ');
                setAddress(formattedAddress || 'Endereço não encontrado');
                
                // Simple logic for delivery fee based on neighborhood
                if (suburb.toLowerCase().includes('castelo')) {
                  setDeliveryFee(0); // Free delivery in Castelo
                } else {
                  setDeliveryFee(8.90); // Default fee
                }
              } else {
                setAddress('Não foi possível obter o endereço');
                setDeliveryFee(8.90);
              }
            } catch (error) {
              setAddress('Erro ao buscar localização');
              setDeliveryFee(8.90);
            }
          },
          (error) => {
            setAddress('Localização não permitida pelo navegador');
            setDeliveryFee(8.90);
          }
        );
      } else {
        setAddress('Geolocalização não suportada');
        setDeliveryFee(8.90);
      }
    }
  }, [isOpen, address]);

  const finalTotal = totalPrice + deliveryFee;

  const handleCheckout = () => {
    const itemsList = cart
      .map(item => `• ${item.quantity}x ${item.name} (R$ ${(item.price * item.quantity).toFixed(2)})`)
      .join('%0A');
    
    const message = `Olá! Gostaria de fazer um pedido:%0A%0A${itemsList}%0A%0A*Subtotal: R$ ${totalPrice.toFixed(2)}*%0A*Taxa de Entrega: R$ ${deliveryFee.toFixed(2)}*%0A*Total: R$ ${finalTotal.toFixed(2)}*%0A%0AEndereço de entrega: ${address !== 'Buscando localização...' && address !== 'Localização não permitida pelo navegador' ? address : '_(digite seu endereço)_'}`;
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-charcoal border-l border-white/10 z-[70] flex flex-col shadow-2xl"
          >
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-ember w-6 h-6" />
                <h2 className="text-xl font-bold text-white">Seu Pedido</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-neutral-600" />
                  </div>
                  <p className="text-gray-400">Seu carrinho está vazio.</p>
                  <button 
                    onClick={onClose}
                    className="text-ember font-bold hover:underline"
                  >
                    Ver cardápio
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-lg border border-white/10"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-white font-medium">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-neutral-600 hover:text-red-500 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-ember font-bold text-sm mt-1">R$ {item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center bg-neutral-800 rounded-lg p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:text-ember transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-bold text-white">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:text-ember transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-white/5 space-y-4 bg-neutral-900/50">
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Subtotal</span>
                  <span>R$ {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400 text-sm">
                  <div className="flex flex-col">
                    <span>Taxa de Entrega</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {address}
                    </span>
                  </div>
                  <span className="text-green-500 font-medium">
                    {deliveryFee === 0 ? 'Grátis' : `R$ ${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-white font-bold text-xl pt-2 border-t border-white/5">
                  <span>Total</span>
                  <span className="text-gold">R$ {finalTotal.toFixed(2)}</span>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-ember hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-ember/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Finalizar no WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
