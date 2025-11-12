import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Main from '../layout/Main'
import { useState } from 'react'
import Modal from '../ui/Modal'

export default function Layout() {

  const [active, setActive] = useState(false)
  console.log(active);

  return (
    <div className='flex-1 h-full w-full overflow-hidden items-center justify-center bg-sky-950'>
      <div className='flex items-center'>
        <Header active={() => setActive(!active)}/>
      </div>
      {
        active ? (
          <Modal/>
        ) : (
          <div>
            <div className='flex items-center justify-center'>
              <Main />
            </div>
            <div className='flex items-center justify-center w-screen'>
              <Footer />
            </div>
          </div>
        )
      }
    </div>
  )
}
