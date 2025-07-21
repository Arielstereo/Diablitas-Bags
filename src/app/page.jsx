import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Incentives from "@/components/Incentives";
import NewProducts from "@/components/New";
import Products from "@/components/Products";
import PromoModal from "@/components/PromoModal";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <PromoModal /> */}
      <NewProducts />
      <Incentives />
      <Category />
      <Socials />
      <Products />
    </div>
  );
}
