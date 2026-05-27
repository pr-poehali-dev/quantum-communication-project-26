import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Schedule() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-neutral-900 px-6 py-5 flex items-center gap-4">
        <Link to="/" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-wide">
          <Icon name="ArrowLeft" size={16} />
          На главную
        </Link>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Telegram-бот</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light uppercase tracking-widest text-neutral-900 mb-8">
          Расписание богослужений
        </h1>

        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
          Узнайте актуальное расписание литургий, вечерних служб и праздничных богослужений через наш Telegram-бот.
        </p>
        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-12">
          Бот присылает расписание на неделю, напоминает о праздниках и информирует об изменениях в службах.
        </p>

        <div className="border border-neutral-200 p-8 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-[#229ED9] rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="Send" size={26} className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-neutral-900 text-lg">@hramiosif_calendar_bot</p>
              <p className="text-neutral-500 text-sm">Бот расписания храма Иосифа Волоцкого</p>
            </div>
          </div>
          <a
            href="https://t.me/hramiosif_calendar_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#229ED9] text-white px-8 py-4 uppercase text-sm tracking-wide hover:bg-[#1a8bbf] transition-colors w-full justify-center sm:w-auto"
          >
            <Icon name="Send" size={18} />
            Открыть бота в Telegram
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: "CalendarDays", title: "Расписание на неделю", desc: "Актуальное расписание всех служб" },
            { icon: "Bell", title: "Напоминания", desc: "Уведомления о праздниках и службах" },
            { icon: "RefreshCw", title: "Обновления", desc: "Оперативные изменения в расписании" },
          ].map((item) => (
            <div key={item.title} className="border border-neutral-100 p-5">
              <Icon name={item.icon} size={22} className="text-neutral-400 mb-3" />
              <p className="font-semibold text-neutral-900 text-sm mb-1">{item.title}</p>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}