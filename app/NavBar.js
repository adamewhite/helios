export default function NavBar() {
  return (
    <nav className=''>
      <div className='container mx-auto px-4 py-1'>
        <div className='flex justify-between items-center py-4'>
          <a
            href='#'
            className='text-4xl md:text-5xl font-heading font-bold text-sunset-whitePeach hover:text-sunset-lightPeach'
          >
            Helios <br />
            Electric
          </a>
          <ul className='hidden md:flex space-x-8'>
            <li>
              <a
                href='#about'
                className='text-sunset-whitePeach font-heading text-xl hover:text-sunset-lightPeach'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#services'
                className='text-sunset-whitePeach font-heading text-xl hover:text-sunset-lightPeach'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className='text-sunset-whitePeach font-heading text-xl hover:text-sunset-lightPeach'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='text-sunset-whitePeach font-heading text-xl hover:text-sunset-lightPeach'
              >
                Contact
              </a>
            </li>
          </ul>
          <button className='md:hidden text-gray-600 focus:outline-none'>
            {/* Mobile menu button */}
          </button>
        </div>
      </div>
    </nav>
  );
}
