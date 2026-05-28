import { useState } from "react";
import Icon from "@/components/ui/icon";

type Step = "choose-service" | "choose-type" | "form";
type ServiceKey =
  | "prostaya"
  | "zakaznaya"
  | "sorokoust"
  | "polugodovoe"
  | "moleben"
  | "panikhida";
type Type = "zdravie" | "upokoy" | null;

interface Props {
  open: boolean;
  onClose: () => void;
}

const SERVICES: {
  key: ServiceKey;
  title: string;
  short: string;
  desc: string;
  types: ("zdravie" | "upokoy")[];
}[] = [
  {
    key: "prostaya",
    title: "Простая записка (обедня)",
    short: "Имена читаются на проскомидии",
    desc: "Имена читаются священником во время Литургии (проскомидии), за каждое имя из просфоры вынимается частица.",
    types: ["zdravie", "upokoy"],
  },
  {
    key: "zakaznaya",
    title: "Заказная обедня",
    short: "Поминовение на ектении",
    desc: "Более сугубое поминовение: имена дополнительно произносятся на ектении (общей молитве) во время службы.",
    types: ["zdravie", "upokoy"],
  },
  {
    key: "sorokoust",
    title: "Сорокоуст",
    short: "Ежедневно 40 дней",
    desc: "Ежедневное поминовение о здравии или упокоении на протяжении 40 дней.",
    types: ["zdravie", "upokoy"],
  },
  {
    key: "polugodovoe",
    title: "Полугодовое / годовое",
    short: "Длительная молитва",
    desc: "Имена поминают за каждой литургией в храме в течение 6 месяцев или года.",
    types: ["zdravie", "upokoy"],
  },
  {
    key: "moleben",
    title: "Молебен",
    short: "Краткая служба с прошением",
    desc: "Краткая служба с прошением — о путешествующих, болящих, учащихся, благодарственный или о умножении любви.",
    types: ["zdravie"],
  },
  {
    key: "panikhida",
    title: "Панихида",
    short: "Заупокойная служба",
    desc: "Заупокойная служба, которая совершается перед специальным столом — кануном.",
    types: ["upokoy"],
  },
];

export default function ZapiskaModal({ open, onClose }: Props) {
  const [step, setStep] = useState<Step>("choose-service");
  const [service, setService] = useState<ServiceKey | null>(null);
  const [type, setType] = useState<Type>(null);
  const [names, setNames] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const selectedService = SERVICES.find((s) => s.key === service);

  const handleSelectService = (key: ServiceKey) => {
    const s = SERVICES.find((sv) => sv.key === key)!;
    setService(key);
    if (s.types.length === 1) {
      setType(s.types[0]);
      setStep("form");
    } else {
      setStep("choose-type");
    }
  };

  const handleSelectType = (t: Type) => {
    setType(t);
    setStep("form");
  };

  const handleSubmit = () => {
    if (!names.trim()) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("choose-service");
      setService(null);
      setType(null);
      setNames("");
      setSubmitted(false);
    }, 300);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="bg-white w-full max-w-md shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors z-10"
        >
          <Icon name="X" size={20} />
        </button>

        {/* Step 1 — выбор требы */}
        {step === "choose-service" && (
          <div className="p-8">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Требы</p>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Выберите вид требы</h2>
            <div className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <button
                  key={s.key}
                  onClick={() => handleSelectService(s.key)}
                  className="group border border-neutral-200 hover:border-neutral-900 p-4 text-left transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-neutral-900 text-sm">{s.title}</p>
                      <p className="text-neutral-500 text-xs mt-0.5">{s.short}</p>
                    </div>
                    <Icon name="ChevronRight" size={18} className="text-neutral-300 group-hover:text-neutral-900 transition-colors flex-shrink-0 mt-0.5" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 — о здравии / за упокой */}
        {step === "choose-type" && selectedService && (
          <div className="p-8">
            <button
              onClick={() => setStep("choose-service")}
              className="flex items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors text-sm mb-6"
            >
              <Icon name="ChevronLeft" size={16} />
              Назад
            </button>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">{selectedService.title}</p>
            <p className="text-neutral-500 text-sm mb-6 leading-relaxed">{selectedService.desc}</p>
            <h2 className="text-xl font-bold text-neutral-900 mb-5">За кого подаёте?</h2>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleSelectType("zdravie")}
                className="group border-2 border-neutral-200 hover:border-neutral-900 p-5 text-left transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🕯️</span>
                  <div>
                    <p className="font-bold text-neutral-900 uppercase tracking-wide text-sm">О здравии</p>
                    <p className="text-neutral-500 text-xs mt-0.5">Молитва о здоровье и благополучии живых</p>
                  </div>
                  <Icon name="ChevronRight" size={18} className="ml-auto text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                </div>
              </button>
              <button
                onClick={() => handleSelectType("upokoy")}
                className="group border-2 border-neutral-200 hover:border-neutral-900 p-5 text-left transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">✝️</span>
                  <div>
                    <p className="font-bold text-neutral-900 uppercase tracking-wide text-sm">За упокой</p>
                    <p className="text-neutral-500 text-xs mt-0.5">Молитва об упокоении усопших</p>
                  </div>
                  <Icon name="ChevronRight" size={18} className="ml-auto text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Step 3 — имена */}
        {step === "form" && !submitted && selectedService && (
          <div className="p-8">
            <button
              onClick={() => {
                if (selectedService.types.length === 1) {
                  setStep("choose-service");
                } else {
                  setStep("choose-type");
                }
              }}
              className="flex items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors text-sm mb-6"
            >
              <Icon name="ChevronLeft" size={16} />
              Назад
            </button>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">
              {selectedService.title} · {type === "zdravie" ? "о здравии" : "за упокой"}
            </p>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Напишите имена</h2>
            <p className="text-neutral-500 text-sm mb-1 leading-relaxed">{selectedService.desc}</p>
            <p className="text-neutral-400 text-xs mb-5">Укажите имена через запятую или каждое с новой строки. Только православные имена.</p>
            <textarea
              value={names}
              onChange={(e) => setNames(e.target.value)}
              placeholder={"Например:\nИоанн\nМария\nАлександр"}
              rows={6}
              className="w-full border-2 border-neutral-200 focus:border-neutral-900 outline-none p-4 text-neutral-900 resize-none text-sm transition-colors"
            />
            <button
              onClick={handleSubmit}
              disabled={!names.trim()}
              className="mt-4 w-full bg-neutral-900 text-white py-3 uppercase text-sm tracking-wide hover:bg-neutral-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Отправить записку
            </button>
          </div>
        )}

        {/* Готово */}
        {submitted && (
          <div className="p-8 text-center">
            <div className="text-5xl mb-4">🙏</div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">Записка принята</h2>
            <p className="text-neutral-500 text-sm mb-6">
              Ваши имена будут прочитаны на ближайшей службе.<br />Бог в помощь!
            </p>
            <button
              onClick={handleClose}
              className="bg-neutral-900 text-white px-8 py-3 uppercase text-sm tracking-wide hover:bg-neutral-700 transition-colors"
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
