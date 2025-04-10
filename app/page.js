import Image from 'next/image';

export default function Home() {
  return (
    <>
      <nav className='bg-sunset-desertSand shadow-md'>
        <div className='container mx-auto px-4 py-1'>
          <div className='flex justify-between items-center py-4'>
            <a
              href='#'
              className='text-4xl font-heading font-semibold text-sunset-deepAmber'
            >
              Helios Electric
            </a>
            <ul className='hidden md:flex space-x-8'>
              <li>
                <a
                  href='#about'
                  className='text-sunset-amber font-heading text-xl hover:text-sunset-deepAmber'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-sunset-amber font-heading text-xl hover:text-sunset-deepAmber'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='text-sunset-amber font-heading text-xl hover:text-sunset-deepAmber'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-sunset-amber font-heading text-xl hover:text-sunset-deepAmber'
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

      <header
        className='relative bg-cover bg-center h-screen'
        style={{ backgroundImage: "url('sun-image.jpg')" }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='text-center text-sunset-softCoral'>
            <h1 className='text-4xl md:text-6xl font-body'>
              Powering Homes with Precision
            </h1>
            <p className='mt-4 text-sunset-whitePeach text-lg font-body md:text-xl'>
              Reliable residential electrical services from licensed
              professionals.
            </p>
            <a
              href='#services'
              className='mt-6 inline-block bg-sunset-amber text-gray-800 py-2 px-6 rounded-lg text-lg font-heading font-semibold'
            >
              View Services
            </a>
          </div>
        </div>
      </header>

      <section
        id='about'
        className='py-16 bg-white'
      >
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-heading font-bold text-sunset-deepAmber'>
            About Helios
          </h2>
          <p className='mt-4 text-sunset-coolGray font-body text-xl max-w-3xl mx-auto'>
            At Helios Electric, we believe every home deserves safe and
            efficient electrical work. With over 15 years of experience, our
            licensed electricians specialize in residential wiring, lighting,
            and troubleshooting. We proudly serve homeowners across the region
            with integrity, professionalism, and attention to detail.
          </p>
        </div>
      </section>

      <section
        id='services'
        className='py-16 bg-sunset-lightPeach'
      >
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-heading font-bold text-sunset-deepAmber text-center'>
            Our Services
          </h2>
          <div className='mt-8 grid gap-8 md:grid-cols-3'>
            <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
              <div className='relative w-full h-56'>
                <Image
                  src='/electrical-panel.jpg'
                  alt='Panel Upgrades'
                  layout='fill'
                  className='object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-heading font-semibold text-sunset-deepAmber'>
                  Panel Upgrades
                </h3>
                <p className='mt-2 text-xl font-body text-sunset-coolGray'>
                  Upgrade your electrical panel to meet modern safety and
                  capacity needs.
                </p>
              </div>
            </div>

            <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
              <div className='relative w-full h-56'>
                <Image
                  src='/rewiring.jpg'
                  alt='Home Rewiring'
                  layout='fill'
                  className='object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-heading font-semibold text-sunset-deepAmber'>
                  Whole-Home Rewiring
                </h3>
                <p className='mt-2 text-xl font-body text-sunset-coolGray'>
                  Safe, code-compliant rewiring solutions for renovations and
                  older homes.
                </p>
              </div>
            </div>

            <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
              <div className='relative w-full h-56'>
                <Image
                  src='/lighting.jpg'
                  alt='Custom Lighting'
                  layout='fill'
                  className='object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-heading font-semibold text-sunset-deepAmber'>
                  Custom Lighting
                </h3>
                <p className='mt-2 text-xl font-body text-sunset-coolGray'>
                  From kitchens to landscapes, we design and install lighting to
                  enhance your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id='projects'
        className='py-16 bg-white'
      >
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-heading font-bold text-sunset-deepAmber'>
            Recent Projects
          </h2>
          <p className='mt-4 font-body text-xl text-sunset-coolGray max-w-2xl mx-auto'>
            From full-home renovations to smart home upgrades, take a look at
            some of our favorite residential projects.
          </p>
          <a
            href='#'
            className='mt-6 font-heading inline-block bg-sunset-amber text-gray-800 py-2 px-6 rounded-lg text-lg font-semibold'
          >
            View Gallery
          </a>
        </div>
      </section>

      <section
        id='contact'
        className='py-16 bg-sunset-desertSand'
      >
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-heading font-bold text-sunset-deepAmber'>
            Get in Touch
          </h2>
          <div className='mt-8'>
            <form className='max-w-xl mx-auto'>
              <div className='mb-4'>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-amber'
                />
              </div>
              <div className='mb-4'>
                <input
                  type='email'
                  placeholder='Your Email'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-amber'
                />
              </div>
              <div className='mb-4'>
                <textarea
                  placeholder='Your Message'
                  rows='4'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-amber'
                ></textarea>
              </div>
              <button
                type='submit'
                className='bg-sunset-amber text-gray-800 font-heading font-semibold px-6 py-3 rounded-lg hover:bg-sunset-lightOrange transition'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className='bg-white py-8 border-t'>
        <div className='container mx-auto px-4 font-body text-center text-sunset-coolGray'>
          <p>&copy; 2025 Helios Electric. All rights reserved.</p>
          <div className='mt-4 space-x-4'>
            <a
              href='#'
              className='hover:text-sunset-amber'
            >
              Instagram
            </a>
            <a
              href='#'
              className='hover:text-sunset-amber'
            >
              Facebook
            </a>
            <a
              href='#'
              className='hover:text-sunset-amber'
            >
              Yelp
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
