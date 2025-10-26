import { useMemo, useState } from "react";
import Header from "./components/Header";
import MenuList from "./components/MenuList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import menuItems from "./data/menu";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id: item.id, name: item.title, price: item.price, qty: 1 }];
    });
  };

  const increment = (id) => {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  };

  const decrement = (id) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = useMemo(() => cart.reduce((sum, i) => sum + i.price * i.qty, 0), [cart]);

  const formatPrice = (amount) =>
    new Intl.NumberFormat("fa-IR").format(amount) + " تومان";

  const handlePlaceOrder = (payload) => {
    // در MVP فقط نمایش پیام و خالی کردن سبد
    alert(
      `سفارش شما ثبت شد!\nنام: ${payload.name}\nتلفن: ${payload.phone}\nآدرس: ${payload.address}\nزمان تحویل: ${payload.deliveryTime}\nمبلغ: ${formatPrice(total)}`
    );
    clearCart();
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900" dir="rtl">
      <Header cartCount={cart.reduce((a, b) => a + b.qty, 0)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <MenuList items={menuItems} onAdd={addToCart} formatPrice={formatPrice} />
          </div>
          <div className="lg:col-span-1 space-y-6">
            <Cart
              items={cart}
              total={total}
              onInc={increment}
              onDec={decrement}
              onRemove={removeItem}
              formatPrice={formatPrice}
            />
            <Checkout disabled={cart.length === 0} onPlaceOrder={handlePlaceOrder} />
          </div>
        </div>
      </main>
    </div>
  );
}
