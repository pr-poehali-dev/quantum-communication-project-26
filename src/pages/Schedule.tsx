import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Schedule() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
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

        <div className="border-t border-neutral-200 pt-12">
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Расписание богослужений — май 2025</p>
          <div className="flex flex-col gap-6">
            {[
              "https://cdn.poehali.dev/files/5ac23318-3f94-46fc-bd14-755261e3d1ca.png",
              "https://cdn.poehali.dev/files/685033c9-ebd6-4217-a24d-c549af5f8c18.png",
              "https://cdn.poehali.dev/files/858dc0e2-9cd2-4bc1-8222-9a20165e1f0a.png",
              "https://cdn.poehali.dev/files/28bf4a98-b772-49e9-a620-b0ccec88b291.png",
              "https://cdn.poehali.dev/files/50257cda-dd0e-42ec-91fe-14082d2cdbac.png",
            ].map((src, i) => (
              <a key={i} href={src} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt={`Расписание богослужений, страница ${i + 1}`}
                  className="w-full border border-neutral-200 hover:border-neutral-400 transition-colors"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}