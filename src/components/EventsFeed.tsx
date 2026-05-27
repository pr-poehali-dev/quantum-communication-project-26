import { useRef } from "react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    date: "24 мая 2026",
    title: "Престольный праздник",
    desc: "В светлый день памяти Равноапостольных Мефодия и Кирилла — просветителей Словенских — вся община храма вышла на торжественный крестный ход вокруг церкви. Под колокольный звон, с хоругвями и пением священных гимнов, прихожане во главе с отцом настоятелем Петром обошли храм в молитвенном единстве и радости.",
    img: "https://cdn.poehali.dev/projects/ec2cbb56-766d-41f6-a146-4fbb1a6e7f6b/bucket/d36ff7aa-3a96-4b54-b847-2c6f92a298bb.jpeg",
  },
];

export default function EventsFeed() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="py-20 bg-neutral-950 overflow-hidden">
      <div className="px-6 mb-10">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Жизнь прихода</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-white">Лента событий</h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 px-6 overflow-x-auto scrollbar-hide select-none"
        style={{ cursor: "grab", scrollSnapType: "x mandatory" }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="flex-none w-80 md:w-96 bg-neutral-900 overflow-hidden"
            style={{ scrollSnapAlign: "start" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="h-64 overflow-hidden">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover pointer-events-none transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">{event.date}</p>
              <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">{event.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{event.desc}</p>
            </div>
          </motion.div>
        ))}

        <div className="flex-none w-80 md:w-96 bg-neutral-900/40 border-2 border-dashed border-neutral-800 flex items-center justify-center min-h-[400px]">
          <div className="text-center text-neutral-600">
            <div className="text-4xl mb-3">+</div>
            <p className="text-sm uppercase tracking-wide">Следующее событие</p>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}