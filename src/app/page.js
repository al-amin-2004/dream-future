import { Header } from "@/components/layout/Header";
import { FinotiveFunding, Hero, Services } from "./_components";
import { Footer } from "@/components/layout/Footer";


const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <FinotiveFunding />
      <Services />
      <Footer/>
    </main>
  );
}

export default Home;
