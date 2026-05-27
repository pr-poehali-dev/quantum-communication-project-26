import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navItems = [
  { label: "Главная", href: "/" },
  { label: "История храма", href: "/history" },
  { label: "Расписание", href: "#schedule" },
  { label: "Жизнь в храме", href: "#life" },
  { label: "Церковная лавка", href: "#shop" },
  { label: "Как добраться", href: "#contact" },
];

interface HeaderProps {
  className?: string;
  onDonate?: () => void;
}

export default function Header({ className, onDonate }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNav = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        window.location.href = "/" + href;
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header className={`absolute top-0 left-0 right-0 z-20 p-6 ${className ?? ""}`}>
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src="https://cdn.poehali.dev/projects/ec2cbb56-766d-41f6-a146-4fbb1a6e7f6b/bucket/e0add753-6634-490a-bc74-691b4ba417ad.png"
              alt="Храм Иосифа Волоцкого"
              className="h-14 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="text-white flex items-center gap-2 uppercase text-sm tracking-wide hover:text-neutral-300 transition-colors"
          >
            <Icon name="Menu" size={22} />
            Меню
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-neutral-900 z-40 flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
          <span className="text-white uppercase text-sm tracking-widest">Навигация</span>
          <button onClick={() => setOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
            <Icon name="X" size={22} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 gap-1">
          {navItems.map((item) =>
            item.href.startsWith("/") && !item.href.startsWith("/#") ? (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white py-3 uppercase text-sm tracking-wide border-b border-white/5 hover:pl-2 transition-all duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="text-white/80 hover:text-white py-3 uppercase text-sm tracking-wide border-b border-white/5 text-left hover:pl-2 transition-all duration-200"
              >
                {item.label}
              </button>
            )
          )}
          <button
            onClick={() => { setOpen(false); onDonate?.(); }}
            className="mt-4 w-full border border-white/30 text-white py-3 uppercase text-sm tracking-wide hover:bg-white/10 transition-colors"
          >
            Пожертвовать
          </button>
        </nav>
      </div>
    </>
  );
}