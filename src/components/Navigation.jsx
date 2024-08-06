function Navigation() {
  return (
    <nav className="bg-nav-backdrop px-16 py-4 fixed top-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center rounded-2xl">
      <ul className="flex space-x-16">
        <li className="text-blue">Home</li>
        <li className="text-blue">About</li>
        <li className="text-blue">Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;
