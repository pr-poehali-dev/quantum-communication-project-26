import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface HeroProps {
  onZapiska?: () => void;
  onDonate?: () => void;
}

export default function Hero({ onZapiska, onDonate }: HeroProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/ec2cbb56-766d-41f6-a146-4fbb1a6e7f6b/bucket/3abf1a56-cd84-406a-92fb-956cebdfa0d8.png"
          alt="Храм Иосифа Волоцкого"
          className="w-full h-full object-cover object-center scale-110"
          style={{ objectPosition: "50% 30%" }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4 opacity-80">Православный приход</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          ХРАМ<br />ИОСИФА<br />ВОЛОЦКОГО
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90 mb-8">
          Подайте записку, закажите молебен или посетите нашу церковную лавку
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onZapiska}
            className="bg-white text-neutral-900 px-8 py-3 uppercase text-sm tracking-wide hover:bg-neutral-200 transition-colors"
          >
            Подать записку
          </button>
          <a href="#shop" className="border border-white text-white px-8 py-3 uppercase text-sm tracking-wide hover:bg-white/10 transition-colors">
            Церковная лавка
          </a>
          <button
            onClick={onDonate}
            className="border border-white/50 text-white/80 px-8 py-3 uppercase text-sm tracking-wide hover:bg-white/10 hover:text-white transition-colors"
          >
            Пожертвовать
          </button>
        </div>
      </div>
    </div>
  );
}