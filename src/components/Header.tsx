interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <img
          src="https://cdn.poehali.dev/projects/ec2cbb56-766d-41f6-a146-4fbb1a6e7f6b/bucket/1db9dc60-9d3b-4e68-9a16-e643f0f80158.png"
          alt="Храм Иосифа Волоцкого"
          className="h-14 w-auto object-contain"
        />
        <nav className="flex gap-8">
          <a
            href="#services"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Записки
          </a>
          <a
            href="#shop"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Лавка
          </a>
          <a
            href="#contact"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}