import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const week = [
  {
    date: "25 мая", weekday: "Понедельник",
    saint: "Сщмч. Ермогена, патриарха Московского",
    highlight: null,
    services: [
      { time: "8:45", name: "Исповедь" },
      { time: "9:00", name: "Литургия" },
    ],
  },
  {
    date: "26 мая", weekday: "Вторник",
    saint: "Мц. Гликерии девы",
    highlight: null,
    services: [
      { time: "8:45", name: "Исповедь" },
      { time: "9:00", name: "Литургия" },
    ],
  },
  {
    date: "27 мая", weekday: "Среда",
    saint: "Мч. Исидора. Блж. Исидора Ростовского",
    highlight: null,
    services: [
      { time: "8:45", name: "Исповедь" },
      { time: "9:00", name: "Литургия" },
    ],
  },
  {
    date: "28 мая", weekday: "Четверг",
    saint: "Прп. Пахомия Великого. Блгв. царевича Димитрия Угличского",
    highlight: null,
    services: [
      { time: "8:45", name: "Исповедь" },
      { time: "9:00", name: "Литургия" },
    ],
  },
  {
    date: "29 мая", weekday: "Пятница",
    saint: "Отдание праздника Вознесения Господня",
    highlight: "Вознесение",
    services: [
      { time: "8:45", name: "Исповедь" },
      { time: "9:00", name: "Литургия" },
      { time: "18:00", name: "Заупокойное богослужение" },
    ],
  },
  {
    date: "30 мая", weekday: "Суббота",
    saint: "Троицкая родительская суббота",
    highlight: "Родительская суббота",
    services: [
      { time: "8:30", name: "Исповедь" },
      { time: "9:00", name: "Литургия, молебен прп. Иосифу Волоцкому, Панихида" },
      { time: "17:00", name: "Всенощное бдение с литией, Исповедь" },
    ],
  },
  {
    date: "31 мая", weekday: "Воскресенье",
    saint: "День Святой Троицы. Пятидесятница",
    highlight: "Троица",
    services: [
      { time: "8:15", name: "Лития, Водосвятный молебен, Исповедь" },
      { time: "9:00", name: "Литургия, Вечерня с коленопреклоненными молитвами" },
      { time: "10:40", name: "Молебен о семейной жизни святым Петру и Февронии" },
    ],
  },
];

const isConfession = (s: { name: string }) =>
  s.name.toLowerCase().includes("исповедь");

const isCommunion = (s: { name: string }) =>
  s.name.toLowerCase().includes("литургия");

export default function Schedule() {
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const confessionDays = week.filter((d) => d.services.some(isConfession));

  return (
    <main className="min-h-screen bg-white">
      <header className="bg-neutral-900 px-6 py-5 flex items-center gap-4">
        <Link
          to="/"
          className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-wide"
        >
          <Icon name="ArrowLeft" size={16} />
          На главную
        </Link>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-14">

        {/* Heading */}
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Расписание</p>
        <h1 className="text-3xl sm:text-4xl font-light uppercase tracking-widest text-neutral-900 mb-2">
          Богослужения
        </h1>
        <p className="text-neutral-500 text-sm mb-12">25–31 мая 2026</p>

        {/* Block 1 — Confession & Communion */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="HeartHandshake" size={20} className="text-neutral-400" />
            <h2 className="text-xs uppercase tracking-widest text-neutral-700 font-semibold">Исповедь и причастие</h2>
          </div>
          <p className="text-neutral-500 text-sm mb-5 leading-relaxed">
            Исповедь совершается перед каждой Литургией. Причастие — по окончании Литургии.
          </p>
          <div className="flex flex-col gap-3">
            {confessionDays.map((day) => {
              const confTime = day.services.find(isConfession)?.time;
              const liturgyTime = day.services.find(isCommunion)?.time;
              return (
                <div
                  key={day.date}
                  className={`flex items-center justify-between border px-5 py-4 ${
                    day.highlight
                      ? "border-neutral-900 bg-neutral-50"
                      : "border-neutral-200"
                  }`}
                >
                  <div>
                    <span className="font-semibold text-neutral-900 text-sm">{day.date}</span>
                    <span className="text-neutral-500 text-sm ml-2">{day.weekday}</span>
                    {day.highlight && (
                      <span className="ml-3 text-xs uppercase tracking-wide bg-neutral-900 text-white px-2 py-0.5">
                        {day.highlight}
                      </span>
                    )}
                  </div>
                  <div className="text-right text-sm text-neutral-600 leading-relaxed">
                    {confTime && <div>{confTime} Исповедь</div>}
                    {liturgyTime && <div>{liturgyTime} Литургия</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Block 2 — Upcoming feasts */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Star" size={20} className="text-neutral-400" />
            <h2 className="text-xs uppercase tracking-widest text-neutral-700 font-semibold">Ближайшие праздники</h2>
          </div>
          <div className="flex flex-col gap-3">
            {week.filter((d) => d.highlight).map((day) => (
              <div key={day.date} className="border border-neutral-900 bg-neutral-50 px-5 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">
                      {day.date}, {day.weekday}
                    </p>
                    <p className="text-neutral-600 text-sm mt-0.5">{day.saint}</p>
                  </div>
                  <span className="text-xs uppercase tracking-wide bg-neutral-900 text-white px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                    {day.highlight}
                  </span>
                </div>
                <div className="mt-3 flex flex-col gap-1">
                  {day.services.map((s) => (
                    <p key={s.time} className="text-sm text-neutral-600">
                      <span className="font-medium text-neutral-900 mr-2">{s.time}</span>{s.name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Block 3 — Full schedule accordion */}
        <section className="border-t border-neutral-200 pt-8">
          <button
            onClick={() => setShowFull(!showFull)}
            className="flex items-center justify-between w-full text-left group"
          >
            <div className="flex items-center gap-3">
              <Icon name="CalendarDays" size={20} className="text-neutral-400" />
              <span className="text-xs uppercase tracking-widest text-neutral-700 font-semibold">Полное расписание недели</span>
            </div>
            <Icon
              name="ChevronDown"
              size={18}
              className={`text-neutral-400 transition-transform duration-300 ${showFull ? "rotate-180" : ""}`}
            />
          </button>

          {showFull && (
            <div className="mt-6 flex flex-col gap-4">
              {week.map((day) => (
                <div key={day.date} className="border border-neutral-100 px-5 py-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-neutral-900 text-sm">
                        {day.date}, {day.weekday}
                      </p>
                      <p className="text-neutral-500 text-xs mt-0.5">{day.saint}</p>
                    </div>
                    {day.highlight && (
                      <span className="text-xs uppercase tracking-wide bg-neutral-900 text-white px-2 py-0.5 flex-shrink-0">
                        {day.highlight}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    {day.services.map((s) => (
                      <p key={s.time} className="text-sm text-neutral-600">
                        <span className="font-medium text-neutral-900 mr-2">{s.time}</span>{s.name}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Telegram bot */}
        <div className="mt-12 border border-neutral-200 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 bg-[#229ED9] rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="Send" size={22} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-neutral-900 text-sm">Получайте расписание в Telegram</p>
            <p className="text-neutral-500 text-sm">@hramiosif_calendar_bot — напоминания о службах и праздниках</p>
          </div>
          <a
            href="https://t.me/hramiosif_calendar_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#229ED9] text-white px-5 py-3 uppercase text-xs tracking-wide hover:bg-[#1a8bbf] transition-colors whitespace-nowrap"
          >
            <Icon name="Send" size={15} />
            Открыть бота
          </a>
        </div>

      </div>
    </main>
  );
}
