import { Link } from "react-router-dom";

interface FeaturedProps {
  onZapiska?: () => void;
}

const items = [
  {
    icon: "⛪",
    title: "История храма",
    desc: "Узнайте об истории основания и развития прихода храма Иосифа Волоцкого",
    href: "/history",
  },
  {
    icon: "📅",
    title: "Расписание богослужений",
    desc: "Узнайте время литургий, вечерних служб и праздничных богослужений",
    href: "/schedule",
  },
  {
    icon: "🕊️",
    title: "Жизнь в храме",
    desc: "События, праздники и будни православного прихода — фото и новости",
    href: null,
  },
];

export default function Featured({ onZapiska }: FeaturedProps) {
  return (
    <div id="services" className="min-h-screen px-6 py-20 bg-white flex flex-col lg:flex-row lg:items-center gap-12">
      <div className="flex-1 h-[400px] lg:h-[700px]">
        <img
          src="https://cdn.poehali.dev/projects/ec2cbb56-766d-41f6-a146-4fbb1a6e7f6b/files/f483147e-628f-4216-accc-81674f38e81e.jpg"
          alt="Интерьер храма"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Наши службы</h3>
        <p className="text-3xl lg:text-4xl mb-10 text-neutral-900 leading-tight font-light">
          Духовная жизнь прихода — онлайн и в храме
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) =>
            item.href ? (
              <Link
                key={item.title}
                to={item.href}
                className="border border-neutral-200 p-5 hover:border-neutral-900 transition-colors group"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-neutral-900 mb-2 text-sm uppercase tracking-wide group-hover:underline">{item.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </Link>
            ) : (
              <div key={item.title} className="border border-neutral-200 p-5 hover:border-neutral-400 transition-colors">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-neutral-900 mb-2 text-sm uppercase tracking-wide">{item.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            )
          )}
        </div>
        <button
          onClick={onZapiska}
          className="mt-8 bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Подать записку
        </button>
      </div>
    </div>
  );
}