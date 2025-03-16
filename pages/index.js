import Head from 'next/head';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Process from '../components/Process';
import AutomationExamples from '../components/AutomationExamples';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Think Deep - Automatización de Workflow con IA Agéntica</title>
        <meta name="description" content="Optimiza tus procesos empresariales con soluciones inteligentes de IA agéntica" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header />
      <Services />
      <Benefits />
      <AutomationExamples />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
} 