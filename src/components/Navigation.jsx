import Logo from '../../public/images/logo-blue-svg.svg';

function Navigation() {
  return (
    <nav className="bg-nav-backdrop w-auto px-16 py-2 fixed top-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center rounded-2xl z-10">
      <img src={Logo} alt="Logo" className="h-8 w-8 mr-16" />
      <ul className="flex space-x-12">
        <li className="text-sm text-blue font-bread hover:bg-blue hover:text-white transition duration-300 rounded-xl px-4 py-2 flex items-center justify-center">
          <a href="#work">Work</a>
        </li>
        <li className="text-sm text-blue font-bread hover:bg-blue hover:text-white transition duration-300 rounded-xl px-4 py-2 flex items-center justify-center">
          <a href="#about">About</a>
        </li>
        <li className="text-sm text-blue font-bread hover:bg-blue hover:text-white transition duration-300 rounded-xl px-4 py-2 flex items-center justify-center">
          <a href="#experience">Experience</a>
        </li>
        <li className="text-blue text-sm font-bread border-2 border-blue px-4 py-2 rounded-xl w-auto hover:bg-blue hover:text-white transition duration-300 whitespace-nowrap text-center flex items-center justify-center">
          <a href="#contact">Download CV</a>
        </li>
      </ul>
      {/* <a
        href="#contact"
        className="text-blue text-sm font-bread border-2 border-blue px-4 py-2 rounded-xl ml-12 -mr-8 w-auto hover:bg-blue hover:text-white transition duration-300 whitespace-nowrap text-center"
      >
        Download CV
      </a> */}
    </nav>
  );
}

export default Navigation;
