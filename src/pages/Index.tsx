import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import EventsFeed from "@/components/EventsFeed";
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
      <Promo />
      <Footer />
      <ZapiskaModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
};

export default Index;