interface DonationsModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DonationsModal({ open, onClose }: DonationsModalProps) {
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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
          <div>
            <h2 className="text-lg uppercase tracking-widest font-light text-neutral-900">Пожертвования</h2>
            <p className="text-xs text-neutral-400 mt-0.5">Реквизиты для банковского перевода</p>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-900 transition-colors text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="divide-y divide-neutral-100">
          {requisites.map((item, i) => (
            <div key={i} className="flex flex-col px-6 py-3 gap-0.5">
              <span className="text-xs uppercase tracking-wider text-neutral-400">{item.label}</span>
              <span className="text-neutral-800 text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100">
          <p className="text-neutral-400 text-xs">
            * Реквизиты являются примером — уточните актуальные данные у настоятеля
          </p>
        </div>
      </div>
    </div>
  );
}
