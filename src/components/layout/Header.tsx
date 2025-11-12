interface HeaderProps {
  active: () => void;
}

const Header: React.FC<HeaderProps> = ({ active }) => {

  return (
    <div className="w-full p-5 flex items-center justify-between">
      <h1 className='text-sky-300 text-4xl text-left font-semibol'>E-COMMERCE</h1>
      <button onClick={active} className="text-sky-300 text-5xl hover:text-sky-50 active:scale-90">
        <i className='bx  bx-cart'></i> 
      </button>
    </div>
    
  )
};

export default Header;