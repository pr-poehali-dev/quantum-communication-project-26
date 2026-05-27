import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import EventsFeed from "@/components/EventsFeed";
import ShopCatalog from "@/components/ShopCatalog";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import ZapiskaModal from "@/components/ZapiskaModal";
import DonationsModal from "@/components/DonationsModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero onZapiska={() => setModalOpen(true)} onDonate={() => setDonateOpen(true)} />
      <Featured onZapiska={() => setModalOpen(true)} />
      <EventsFeed />
      <ShopCatalog />
      <Promo />
      <MapSection />
      <Footer />
      <ZapiskaModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <DonationsModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </main>
  );
};

export default Index;
