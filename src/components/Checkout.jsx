import { useState } from "react";

export default function Checkout({ disabled = false, onPlaceOrder }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", deliveryTime: "هر چه سریع‌تر" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) return;
    if (!form.name || !form.phone || !form.address) return alert("لطفاً همه فیلدها را پر کنید.");
    onPlaceOrder(form);
  };

  return (
    <section aria-labelledby="checkout-heading" className="bg-white border border-neutral-200 rounded-2xl p-4">
      <h2 id="checkout-heading" className="text-lg font-bold mb-3">تسویه و ارسال</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-neutral-700" htmlFor="name">نام و نام‌خانوادگی</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="rounded-xl border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="مثلاً: علی رضایی"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-neutral-700" htmlFor="phone">شماره تماس</label>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="rounded-xl border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="0912xxxxxxx"
              inputMode="tel"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-neutral-700" htmlFor="address">نشانی تحویل</label>
            <textarea
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="rounded-xl border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 min-h-[90px]"
              placeholder="خیابان، پلاک، واحد..."
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-neutral-700" htmlFor="deliveryTime">زمان تحویل</label>
            <select
              id="deliveryTime"
              name="deliveryTime"
              value={form.deliveryTime}
              onChange={handleChange}
              className="rounded-xl border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option>هر چه سریع‌تر</option>
              <option>۱۲:۰۰ تا ۱۴:۰۰</option>
              <option>۱۴:۰۰ تا ۱۶:۰۰</option>
              <option>۱۹:۰۰ تا ۲۱:۰۰</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          disabled={disabled}
          className={`w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold transition ${
            disabled
              ? "bg-neutral-200 text-neutral-500 cursor-not-allowed"
              : "bg-emerald-600 hover:bg-emerald-700 text-white"
          }`}
        >
          ثبت سفارش
        </button>
        {disabled && <p className="text-xs text-neutral-500 text-center">برای ثبت سفارش ابتدا محصولی به سبد اضافه کنید.</p>}
      </form>
    </section>
  );
}
