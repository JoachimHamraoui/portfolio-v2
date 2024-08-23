const Experiences = () => {
  return (
    <div id="experience" className="w-full flex flex-col mt-32">
      <h1 className="text-3xl font-title text-blue mb-6">
        Experiences & Studies
      </h1>
      <div className="flex flex-wrap gap-4">
        <a
          target="_blank"
          href="https://www.donboscohalle.be/wp/"
          className="group flex-grow shadow-xl rounded-xl p-4 flex flex-col bg-nav-backdrop transition duration-300 hover:bg-blue"
        >
          <p className="text-black text-md font-bread group-hover:text-white">Secondary education degree</p>
          <h3 className="text-3xl font-title text-blue group-hover:text-white">Multimedia</h3>
          <p className="text-black text-md font-bread group-hover:text-white">2016-2018</p>
          <p className="text-black text-md font-bread group-hover:text-white">Don Bosco Halle</p>
        </a>
        <a
          target="_blank"
          href="https://www.donboscohalle.be/wp/"
          className="group flex-grow shadow-xl rounded-xl p-4 flex flex-col bg-nav-backdrop transition duration-300 hover:bg-blue"
        >
          <p className="text-black text-md font-bread group-hover:text-white">Se-n-Se Certificate</p>
          <h3 className="text-3xl font-title text-blue group-hover:text-white">Interactieve Multimedia Technieken</h3>
          <p className="text-black text-md font-bread group-hover:text-white">2019</p>
          <p className="text-black text-md font-bread group-hover:text-white">Don Bosco Halle</p>
        </a>
        <a
          href="https://www.colruytgroup.com/frehb"
          target="_blank"
          className="group flex-grow shadow-xl rounded-xl p-4 flex flex-col bg-nav-backdrop transition duration-300 hover:bg-blue"
        >
          <p className="text-black text-md font-bread group-hover:text-white">Intern & Jobstudent</p>
          <h3 className="text-3xl font-title text-blue group-hover:text-white">Webmaster CCX</h3>
          <p className="text-black text-md font-bread group-hover:text-white">2019</p>
          <p className="text-black text-md font-bread group-hover:text-white">Colruyt Group Halle - Hellebroek</p>
        </a>
        <a
          href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-creatieve-technologie"
          target="_blank"
          className="group flex-grow shadow-xl rounded-xl p-4 flex flex-col bg-nav-backdrop transition duration-300 hover:bg-blue"
        >
          <p className="text-black text-md font-bread group-hover:text-white">Bachelor&apos;s Degree</p>
          <h3 className="text-3xl font-title text-blue group-hover:text-white">Multimedia & Creatieve Technologie</h3>
          <p className="text-black text-md font-bread group-hover:text-white">2019-2024</p>
          <p className="text-black text-md font-bread group-hover:text-white">Erasmushogeschool Brussel</p>
        </a>
        <a
          href="https://plantaflag.com/nl"
          target="_blank"
          className="group w-1/3 shadow-xl rounded-xl p-4 flex flex-col bg-nav-backdrop transition duration-300 hover:bg-blue"
        >
          <p className="text-black text-md font-bread group-hover:text-white">Intern</p>
          <h3 className="text-3xl font-title text-blue group-hover:text-white">Drupal Developer</h3>
          <p className="text-black text-md font-bread group-hover:text-white">Jan - Apr 2024</p>
          <p className="text-black text-md font-bread group-hover:text-white">Plant a Flag</p>
        </a>
      </div>
    </div>
  );
};

export default Experiences;
