import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import EventsFeed from "@/components/EventsFeed";
import ShopCatalog from "@/components/ShopCatalog";
import Donations from "@/components/Donations";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import ZapiskaModal from "@/components/ZapiskaModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero onZapiska={() => setModalOpen(true)} />
      <Featured onZapiska={() => setModalOpen(true)} />
      <EventsFeed />
      <ShopCatalog />
      <Promo />
      <Donations />
      <MapSection />
      <Footer />
      <ZapiskaModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
};

export default Index;