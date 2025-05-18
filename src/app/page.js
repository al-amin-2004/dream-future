import { Header } from "@/components/layout/Header";
import { FinotiveFunding, Hero, Services } from "./_components";
import { members } from "@/lib/db";



const Home = async () => {
  const dd = await members()
  // console.log(dd);

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
