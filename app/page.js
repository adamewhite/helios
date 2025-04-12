import Image from 'next/image';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYelp,
} from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import IconTest from './Test';

export default function Home() {
  return (
    <>
      <header
        className='relative bg-cover bg-center h-screen'
        style={{ backgroundImage: "url('sun-image.jpg')" }}
      >
        {/* NavBar */}
        <div className='absolute top-0 left-0 w-full z-10'>
          <NavBar />
        </div>

        {/* Centered Text */}
        <div
          id='middle-text'
          className='absolute inset-0 flex items-center justify-center pt-20' /* pt-20 to give space for the navbar */
        >
          <div className='text-center text-sunset-lightOrange'>
            <h1 className='text-4xl md:text-6xl font-regular text-shadow-outline font-body px-2'>
              Powering Homes with Precision
            </h1>
            <p className='mt-4 text-sunset-whitePeach text-lg font-regular text-shadow-outline font-body md:text-2xl px-6'>
              Reliable residential electrical services from licensed
              professionals.
            </p>
            <a
              href='#services'
              className='mt-6 inline-block bg-sunset-softCoral text-sunset-whitePeach py-2 px-6 rounded-lg text-lg font-heading font-semibold'
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
          <p className='mt-4 text-sunset-coolGray font-body font-light text-xl max-w-3xl mx-auto px-6'>
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
                <p className='mt-2 text-xl font-body font-regular text-sunset-coolGray'>
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
                <h3 className='text-2xl font-heading font-regular font-semibold text-sunset-deepAmber'>
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
                <p className='mt-2 text-xl font-body font-regular text-sunset-coolGray'>
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
          <p className='mt-4 font-body text-xl font-light text-sunset-coolGray max-w-2xl mx-auto'>
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

          <div className='mt-4 flex justify-center items-center space-x-3 py-3'>
            <a
              href='https://facebook.com/yourprofile'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className='text-blue-600 w-8 h-8'
              />
            </a>
            <a
              href='https://instagram.com/yourprofile'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className='text-pink-600 w-8 h-8 hover:text-pink-800 transition-colors'
              />
            </a>
            <a
              href='https://yelp.com/yourprofile'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faYelp}
                className='text-red-600 w-8 h-8 hover:text-red-800 transition-colors'
              />
            </a>
            <a href='tel:+1234567890'>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className='text-green-600 w-8 h-8 hover:text-green-800 transition-colors'
              />
            </a>
            <a href='mailto:youremail@example.com'>
              <FontAwesomeIcon
                icon={faEnvelope}
                className='text-gray-600 w-8 h-8 hover:text-gray-800 transition-colors'
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
