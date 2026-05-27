export default function MapSection() {
  const address = "Московская обл., Ленинский район, пос. Развилка, здание 44В";
  const yandexMapsUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(address)}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="contact" className="bg-neutral-100 py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light uppercase tracking-widest text-neutral-900 mb-4 text-center">
          Как нас найти
        </h2>
        <p className="text-neutral-500 text-center mb-10 sm:mb-14 text-sm sm:text-base">
          {address}
        </p>

        <div className="rounded-sm overflow-hidden shadow-sm mb-6">
          <iframe
            title="Карта"
            src={`https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(address)}&z=15`}
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={yandexMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 text-white text-sm uppercase tracking-wider hover:bg-neutral-700 transition-colors duration-300"
          >
            Открыть в Яндекс.Картах
          </a>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-900 text-neutral-900 text-sm uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors duration-300"
          >
            Открыть в Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
