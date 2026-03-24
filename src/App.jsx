import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* HERO SECTION */}
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="Hero" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        {/* PERSONAL INFO */}
        <div>
          <h1>Welcome to My React App!</h1>
          <p>
            Name: Rhyza Ann Estrella <br />
            Email: rhyzaestrella@gmail.com <br />
            Other Info: I have 3 dogs 🐶
          </p>
        </div>

        {/* COUNTER BUTTON */}
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      {/* ABOUT & CONTACT */}
      <section id="next-steps">
        <div id="docs">
          <h2>About Me</h2>
          <p>I’m currently learning React and building my first project 🚀</p>
        </div>

        <div id="social">
          <h2>Contact Me</h2>
          <p>You can reach me via email anytime 😊</p>
        </div>
      </section>

      <div className="ticks"></div>

      {/* SPACER */}
      <section id="spacer"></section>
    </>
  )
}

export default App