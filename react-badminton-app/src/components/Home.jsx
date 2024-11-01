import logo from '/logo-SVG.svg';

export default function Home() {
    return (
        <div>
            <header className="svg-container" role="banner" aria-label="Application logo">
                <img alt="AJ Bell Logo" src={logo} width={100} height={100}/>
            </header>

            <nav className="button-container" role="navigation" aria-label="Main Navigation">
                <button aria-label="Numbers" id="numbers">Numbers</button>
                <button aria-label="Payment" id="payment">Payment</button>
                <button aria-label="Admin" id="admin">Admin</button>
            </nav>
        </div>
    );
}
