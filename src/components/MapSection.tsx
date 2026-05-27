export default function MapSection() {
  const address = "Московская обл., Ленинский район, пос. Развилка, здание 44В";
  const yandexMapsUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(address)}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="contact" className="bg-neutral-900 py-10 sm:py-14 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg sm:text-xl uppercase tracking-widest font-light text-white">
              Как добраться
            </h2>
            <p className="text-neutral-400 text-sm mt-1">{address}</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <a
              href={yandexMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-neutral-900 text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
            >
              Яндекс
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white/30 text-white text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Google
            </a>
          </div>
        </div>

        <div className="overflow-hidden">
          <iframe
            title="Карта"
            src={`https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(address)}&z=15`}
            width="100%"
            height="260"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
