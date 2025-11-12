import Header from '../headers/Header'
import Footer from '../footers/Footer'
import Main from '../containers/Main'

export default function Layout() {
  return (
    <div className='flex-1 h-full w-full items-center justify-center bg-sky-950'>
      <div className='flex items-center justify-center w-screen'>
        <Header />
      </div>
      <div className='flex items-center justify-center w-screen'>
        <Main />
      </div>
      <div className='flex items-center justify-center w-screen'>
        <Footer />
      </div>
    </div>
  )
}
