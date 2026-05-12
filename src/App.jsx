import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Account from './Components/Account.jsx'
import Feed from './Components/Feed.jsx'

function App() {

  //Math.floor(Math.random() * 11) --> Entre 0 y 1

  return (
    <>
      <Header />
      <main>
        <section className="LeftBar">
          <Account />
        </section>

        <section className="RightBar">
          <Feed />
        </section>
      </main>
    </>
  )
}

export default App;
