import { useState } from "react";
import Icon from "@/components/ui/icon";

type Step = "choose" | "form";
type Type = "zdravie" | "upokoy" | null;

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ZapiskaModal({ open, onClose }: Props) {
  const [step, setStep] = useState<Step>("choose");
  const [type, setType] = useState<Type>(null);
  const [names, setNames] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleChoose = (t: Type) => {
    setType(t);
    setStep("form");
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("choose");
      setType(null);
      setNames("");
      setSubmitted(false);
    }, 300);
  };

  const handleSubmit = () => {
    if (!names.trim()) return;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="bg-white w-full max-w-md shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        {step === "choose" && (
          <div className="p-8">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Подача записки</p>
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">Выберите тип записки</h2>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleChoose("zdravie")}
                className="group border-2 border-neutral-200 hover:border-neutral-900 p-6 text-left transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🕯️</span>
                  <div>
                    <h3 className="font-bold text-neutral-900 text-lg uppercase tracking-wide">О здравии</h3>
                    <p className="text-neutral-500 text-sm mt-1">Молитва о здоровье и благополучии живых</p>
                  </div>
                  <Icon name="ChevronRight" size={20} className="ml-auto text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                </div>
              </button>
              <button
                onClick={() => handleChoose("upokoy")}
                className="group border-2 border-neutral-200 hover:border-neutral-900 p-6 text-left transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">✝️</span>
                  <div>
                    <h3 className="font-bold text-neutral-900 text-lg uppercase tracking-wide">За упокой</h3>
                    <p className="text-neutral-500 text-sm mt-1">Молитва об упокоении усопших</p>
                  </div>
                  <Icon name="ChevronRight" size={20} className="ml-auto text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                </div>
              </button>
            </div>
          </div>
        )}

        {step === "form" && !submitted && (
          <div className="p-8">
            <button
              onClick={() => setStep("choose")}
              className="flex items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors text-sm mb-6"
            >
              <Icon name="ChevronLeft" size={16} />
              Назад
            </button>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
              Записка {type === "zdravie" ? "о здравии" : "за упокой"}
            </p>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Напишите имена</h2>
            <p className="text-neutral-500 text-sm mb-6">
              Укажите имена через запятую или каждое с новой строки. Только православные имена.
            </p>
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
