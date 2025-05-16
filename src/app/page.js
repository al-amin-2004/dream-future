import { Header } from "@/components/layout/Header";
import { FinotiveFunding, Hero, Services } from "./_components";



export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <FinotiveFunding/>
      <Services/>
    </main>
  );
}
