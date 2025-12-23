import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Mission from '@/components/Mission';
import Impact from '@/components/Impact';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

export default function Home() {
  return (
    <main>
      <PageTitle />
      <Navbar />
      <Hero />
      <AboutUs />
      <Mission />
      <Impact />
      <CTA />
      <Footer />
    </main>
  );
}
