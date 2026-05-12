import { useState, useEffect } from 'react'
import './App.css'
import Account from './Components/Account.jsx'
import Explore from './Components/Explore.jsx'

function App() {

  //Math.floor(Math.random() * 11) --> Entre 0 y 1

  return (
    <>
      <header>

      </header>

      <main>
        <section className="LeftBar">
          <Account />
        </section>

        <section className="RightBar">
          <Explore />
        </section>
      </main>
    </>
  )
}

export default App;
