import Image from 'next/image';
import './globals.css';

export default function Home() {
  return (
      <div>
        <header className="svg-container">
          <Image alt="Logo" src="logo-SVG.svg" width={100} height={100}/>
        </header>

        <nav className="button-container">
          <button aria-label="Numbers" id="numbers">Numbers</button>
          <button aria-label="Payment" id="payment">Payment</button>
          <button aria-label="Admin" id="admin">Admin</button>
        </nav>
      </div>
  )
}

