import Typewriter from 'typewriter-effect';// Adjust the path based on your project structure

const Hero = () => {

  return (
    <div className="mx-auto text-white flex items-center w-full h-screen">
      <div className="flex flex-col hover:custom-cursor">
        <h1 className="text-7xl font-title text-blue mb-4">
          Hi, I&apos;m{' '}
          <span className="inline-block">
            <Typewriter
              options={{
                strings: ['Joachim.', 'a Developer.', 'a Designer.'],
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            />
          </span>
        </h1>
        <p className="text-lg text-blue font-bread">
          Freshly graduated Web & App Developer
        </p>
      </div>
    </div>
  );
};

export default Hero;
