export default function Donations() {
  const requisites = [
    { label: "Получатель", value: "Религиозная организация «Православный приход храма Иосифа Волоцкого»" },
    { label: "ИНН", value: "5003000000" },
    { label: "КПП", value: "500301001" },
    { label: "Банк", value: "ПАО Сбербанк" },
    { label: "БИК", value: "044525225" },
    { label: "Расчётный счёт", value: "40703810000000000000" },
    { label: "Корр. счёт", value: "30101810400000000225" },
    { label: "Назначение платежа", value: "Пожертвование на нужды храма. Без НДС." },
  ];

  return (
    <section id="donations" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light uppercase tracking-widest text-neutral-900 mb-4 text-center">
          Пожертвования
        </h2>
        <p className="text-neutral-500 text-center mb-10 sm:mb-14 text-sm sm:text-base max-w-xl mx-auto">
          Ваша помощь позволяет сохранять и развивать храм. Спаси Господи за каждое пожертвование.
        </p>

        <div className="border border-neutral-200 rounded-sm overflow-hidden">
          {requisites.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-start px-5 sm:px-8 py-4 gap-1 sm:gap-6 ${
                i % 2 === 0 ? "bg-neutral-50" : "bg-white"
              }`}
            >
              <span className="text-xs uppercase tracking-wider text-neutral-400 sm:w-48 shrink-0 pt-0.5">
                {item.label}
              </span>
              <span className="text-neutral-800 text-sm sm:text-base font-medium">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <p className="text-neutral-400 text-xs text-center mt-6">
          * Реквизиты являются примером — обратитесь к настоятелю для получения актуальных данных
        </p>
      </div>
    </section>
  );
}
