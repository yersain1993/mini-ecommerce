

export default function Footer() {
  return (
    <div className='w-screen h-auto'>
      <footer className="mt-6 py-10 text-sky-300 w-full h-full flex flex-col justify-center items-center bg-black">
        <p className="text-lg">
            &copy; 2025 Yersain Castaño Arenas
        </p>
        <ul className="w-full flex justify-center gap-4 text-4xl z-10">
          <li>
            <a
              href="https://www.linkedin.com/in/yersain-castaño-arenas-engineer-develop/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/yersain1993" target="_blank" rel="noreferrer">
              <i className="bx bxl-github"></i>
            </a>
          </li>
        </ul>
        <p className="text-sm">
            All rights reserved &#174;
        </p>
      </footer>
    </div>
  )
}