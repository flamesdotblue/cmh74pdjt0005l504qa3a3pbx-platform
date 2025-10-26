import { Plus } from "lucide-react";

export default function MenuList({ items = [], onAdd, formatPrice }) {
  return (
    <section aria-labelledby="menu-heading">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 id="menu-heading" className="text-xl sm:text-2xl font-bold">منوی امروز</h2>
          <p className="text-sm text-neutral-500 mt-1">غذاهای خانگی با مواد اولیه تازه و باکیفیت</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.map((item) => (
          <article key={item.id} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-[16/10] bg-neutral-100 overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold text-neutral-900">{item.title}</h3>
                <span className="text-emerald-600 font-semibold shrink-0">{formatPrice(item.price)}</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2">{item.description}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-neutral-500">برای {item.serves} نفر</span>
                <button
                  onClick={() => onAdd(item)}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500 text-white text-sm hover:bg-emerald-600 active:scale-[0.98] transition"
                >
                  <Plus className="w-4 h-4" />
                  افزودن به سبد
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
