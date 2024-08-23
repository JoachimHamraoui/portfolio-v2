import Experiences from '../components/Experiences';
import Hero from '../components/Hero';
import Presentation from '../components/Presentation';
import WorkSection from '../components/WorkSection';

const Home = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <Hero />
      <WorkSection />
      <Presentation />
      <Experiences />
    </div>
  );
};

export default Home;
