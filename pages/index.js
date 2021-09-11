import Features from '../components/main/Features';
import Feature from '../components/main/Feature';
import Hero from '../components/main/Hero';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features>
        <Feature
          title="Yay! Eggcellent!"
          description="This is just a happy egg."
          src="/img/egg-happy.jpg"
        />
        <Feature
          title="On no! I'm fried!"
          description="This is a screwed egg."
          src="/img/egg-fried.jpg"
        />
        <Feature
          title="Stack-oveggflow"
          description="This is the best wording ever!"
          src="/img/egg-stack.jpg"
        />
      </Features>
    </>
  );
};

export default HomePage;
