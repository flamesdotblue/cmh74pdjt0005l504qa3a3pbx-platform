import { ShoppingCart } from "lucide-react";

export default function Header({ cartCount = 0 }) {
  return (
    <header className="bg-white/80 backdrop-blur border-b border-neutral-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-emerald-500 text-white grid place-items-center font-bold">ک</div>
          <div>
            <h1 className="text-lg sm:text-xl font-extrabold tracking-tight">کترینگ خوش‌طعـم</h1>
            <p className="text-xs text-neutral-500">سفارش آنلاین غذای خانگی تازه</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-neutral-700">
          <ShoppingCart className="w-5 h-5" />
          <span className="text-sm">سبد: {cartCount}</span>
        </div>
      </div>
    </header>
  );
}
