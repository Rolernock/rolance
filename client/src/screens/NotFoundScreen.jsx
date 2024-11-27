import { Link } from 'react-router'
import { FaExclamationTriangle } from 'react-icons/fa'

export default function NotFoundScreen() {
  return (
    <section className='text-center d-flex align-items-center justify-content-center mt-5 flex-column'>
      <FaExclamationTriangle className='icon-large mb-4' />
      <h2 className='font-bold fw-bold fs-1 mb-4'>404 Page Not Found.</h2>
      <p className='text-bold mb-4 fs-1'>This page does not exist</p>
      <Link to='/' className=''>
        Go Back
      </Link>
    </section>
  )
}
