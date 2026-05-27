import { useState } from "react";

interface Product {
  id: number;
  category: string;
  name: string;
  price: number | null;
  unit: string;
  emoji: string;
}

const products: Product[] = [
  { id: 1, category: "Свечи", name: "Свеча восковая малая", price: 20, unit: "шт", emoji: "🕯️" },
  { id: 2, category: "Свечи", name: "Свеча восковая средняя", price: 50, unit: "шт", emoji: "🕯️" },
  { id: 3, category: "Свечи", name: "Свеча восковая большая", price: 100, unit: "шт", emoji: "🕯️" },
  { id: 4, category: "Иконы", name: "Икона Спасителя", price: 800, unit: "шт", emoji: "✝️" },
  { id: 5, category: "Иконы", name: "Икона Богородицы", price: 800, unit: "шт", emoji: "✝️" },
  { id: 6, category: "Иконы", name: "Именная икона", price: 1200, unit: "шт", emoji: "✝️" },
  { id: 7, category: "Платки", name: "Платок белый", price: 300, unit: "шт", emoji: "🧣" },
  { id: 8, category: "Платки", name: "Платок чёрный", price: 300, unit: "шт", emoji: "🧣" },
  { id: 9, category: "Платки", name: "Платок цветной", price: 350, unit: "шт", emoji: "🧣" },
  { id: 10, category: "Книги", name: "Молитвослов", price: 250, unit: "шт", emoji: "📖" },
  { id: 11, category: "Книги", name: "Псалтирь", price: 350, unit: "шт", emoji: "📖" },
  { id: 12, category: "Книги", name: "Евангелие", price: 500, unit: "шт", emoji: "📖" },
  { id: 13, category: "Разное", name: "Ладан афонский", price: 150, unit: "уп", emoji: "🌿" },
  { id: 14, category: "Разное", name: "Масло освящённое", price: 200, unit: "фл", emoji: "🫙" },
  { id: 15, category: "Разное", name: "Крест нательный", price: 400, unit: "шт", emoji: "✝️" },
];

const categories = ["Все", ...Array.from(new Set(products.map((p) => p.category)))];

export default function ShopCatalog() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered =
    activeCategory === "Все"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="shop" className="bg-neutral-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Церковная лавка</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">Каталог товаров</h2>
        <p className="text-neutral-500 text-sm mb-10">
          Товары можно приобрести в лавке при храме в часы её работы
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wide border transition-colors duration-200 ${
                activeCategory === cat
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "bg-white text-neutral-600 border-neutral-300 hover:border-neutral-900 hover:text-neutral-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="border border-neutral-200 hover:border-neutral-400 transition-colors duration-200 p-5 flex flex-col"
            >
              <div className="text-3xl mb-4">{product.emoji}</div>
              <p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">{product.category}</p>
              <h3 className="text-neutral-900 font-medium text-sm leading-snug mb-4 flex-1">
                {product.name}
              </h3>
              <div className="flex items-end justify-between">
                {product.price !== null ? (
                  <span className="text-lg font-bold text-neutral-900">
                    {product.price} ₽
                  </span>
                ) : (
                  <span className="text-sm text-neutral-400">по запросу</span>
                )}
                <span className="text-xs text-neutral-400">/ {product.unit}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-neutral-400 text-xs mt-8 text-center">
          Часы работы лавки: пн–пт 9:00–17:00, сб–вс 8:00–18:00
        </p>
      </div>
    </section>
  );
}