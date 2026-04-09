import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { CONTACT_INFO } from "../constants";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_ADDRESS = "Buscando localização...";

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeItem, totalPrice } = useCart();
  const [address, setAddress] = useState<string>(INITIAL_ADDRESS);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  useEffect(() => {
    if (!isOpen || address !== INITIAL_ADDRESS) {
      return;
    }

    if (!("geolocation" in navigator)) {
      setAddress("Geolocalização não suportada");
      setDeliveryFee(8.9);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          );
          const data = await response.json();

          if (data && data.address) {
            const street = data.address.road || data.address.pedestrian || "";
            const suburb =
              data.address.suburb || data.address.neighbourhood || "";
            const city = data.address.city || data.address.town || "";
            const formattedAddress = [street, suburb, city]
              .filter(Boolean)
              .join(", ");

            setAddress(formattedAddress || "Endereço não encontrado");
            setDeliveryFee(suburb.toLowerCase().includes("castelo") ? 0 : 8.9);
            return;
          }

          setAddress("Não foi possível obter o endereço");
          setDeliveryFee(8.9);
        } catch {
          setAddress("Erro ao buscar localização");
          setDeliveryFee(8.9);
        }
      },
      () => {
        setAddress("Localização não permitida pelo navegador");
        setDeliveryFee(8.9);
      },
    );
  }, [address, isOpen]);

  const finalTotal = totalPrice + deliveryFee;

  const handleCheckout = () => {
    const itemsList = cart
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}`,
      )
      .join("\n");

    const message = [
      "Olá! Quero finalizar este pedido:",
      "",
      itemsList,
      "",
      `Subtotal: R$ ${totalPrice.toFixed(2)}`,
      `Taxa de entrega: ${deliveryFee === 0 ? "Grátis" : `R$ ${deliveryFee.toFixed(2)}`}`,
      `Total: R$ ${finalTotal.toFixed(2)}`,
      "",
      `Endereço de entrega: ${address !== INITIAL_ADDRESS ? address : "vou informar meu endereço no atendimento"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full sm:max-w-md flex-col border-l border-white/10 bg-charcoal shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/5 p-6">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-6 w-6 text-ember" />
                <h2 className="text-xl font-bold text-white">Seu pedido</h2>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 transition-colors hover:bg-white/5"
              >
                <X className="h-6 w-6 text-gray-400" />
              </button>
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-800">
                    <ShoppingBag className="h-10 w-10 text-neutral-600" />
                  </div>
                  <p className="text-gray-400">
                    Seu carrinho ainda está vazio.
                  </p>
                  <button
                    onClick={onClose}
                    className="font-bold text-ember hover:underline"
                  >
                    Ver cardápio
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="group flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="h-20 w-20 rounded-lg border border-white/10 object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="font-medium text-white">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-neutral-600 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="mt-1 text-sm font-bold text-ember">
                        R$ {item.price.toFixed(2)}
                      </p>

                      <div className="mt-3 flex items-center gap-3">
                        <div className="flex items-center rounded-lg bg-neutral-800 p-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 transition-colors hover:text-ember"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-bold text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 transition-colors hover:text-ember"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="space-y-4 border-t border-white/5 bg-neutral-900/50 p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Subtotal</span>
                  <span>R$ {totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm text-gray-400">
                  <div className="flex flex-col">
                    <span>Taxa de entrega</span>
                    <span className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                      <MapPin className="h-3 w-3" />
                      {address}
                    </span>
                  </div>
                  <span className="font-medium text-green-500">
                    {deliveryFee === 0
                      ? "Grátis"
                      : `R$ ${deliveryFee.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between border-t border-white/5 pt-2 text-xl font-bold text-white">
                  <span>Total</span>
                  <span className="text-gold">R$ {finalTotal.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-ember py-4 font-bold text-white shadow-lg shadow-ember/20 transition-all active:scale-95 hover:bg-orange-600"
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
