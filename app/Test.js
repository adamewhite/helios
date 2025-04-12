import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function IconTest() {
  return (
    <div className='text-center mt-10'>
      <FontAwesomeIcon
        icon={faCoffee}
        className='text-4xl text-black'
      />
    </div>
  );
}
