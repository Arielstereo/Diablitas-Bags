import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Incentives from "@/components/Incentives";
import Products from "@/components/Products";
import PromoModal from "@/components/PromoModal";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PromoModal />
      <Incentives />
      <Category />
      <Socials />
      <Products />
    </div>
  );
}
