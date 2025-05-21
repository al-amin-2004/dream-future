import { Header } from "@/components/layout/Header";
import { FinotiveFunding, Hero, Services } from "./_components";



const Home = async () => {
  return (
    <main>
      <Header />
      <Hero />
      <FinotiveFunding />
      <Services />
    </main>
  );
}

export default Home;
