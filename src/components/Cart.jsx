import { Minus, Plus, Trash2 } from "lucide-react";

export default function Cart({ items = [], total = 0, onInc, onDec, onRemove, formatPrice }) {
  return (
    <section aria-labelledby="cart-heading" className="bg-white border border-neutral-200 rounded-2xl p-4 sticky top-24">
      <h2 id="cart-heading" className="text-lg font-bold mb-3">سبد خرید</h2>
      {items.length === 0 ? (
        <p className="text-sm text-neutral-500">سبد شما خالی است.</p>
      ) : (
        <div className="space-y-4">
          <ul className="space-y-3">
            {items.map((i) => (
              <li key={i.id} className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-semibold truncate">{i.name}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{formatPrice(i.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onDec(i.id)}
                    className="h-8 w-8 grid place-items-center rounded-lg border border-neutral-200 hover:bg-neutral-50"
                    aria-label="کم کردن"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-7 text-center font-medium">{i.qty}</span>
                  <button
                    onClick={() => onInc(i.id)}
                    className="h-8 w-8 grid place-items-center rounded-lg border border-neutral-200 hover:bg-neutral-50"
                    aria-label="اضافه کردن"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemove(i.id)}
                    className="h-8 w-8 grid place-items-center rounded-lg border border-red-200 text-red-600 hover:bg-red-50"
                    aria-label="حذف"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between pt-3 border-t border-neutral-200">
            <span className="text-sm text-neutral-600">مجموع</span>
            <span className="font-extrabold text-neutral-900">{formatPrice(total)}</span>
          </div>
        </div>
      )}
    </section>
  );
}
