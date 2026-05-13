import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Account from './Components/Account.jsx'
import Feed from './Components/Feed.jsx'

function App() {

  const comments= ["Nuevo seguidor", "Yo literal", "primer comentario", "Una vez me paso", "Sófocles tenía razón", "Revivan la grase :v"];
  const accountNames= ["Ainz Ooal Gown", "Albedo", "ShalltearBlodfallen", "MareBelloFiore", "AuraBelloFiore", "Cockytus", "Demiurge", "PandorasActor"]

  //Random => Math.floor(Math.random() * 11) --> Entre 0 y 1

  

  const GoHome = ()=>{

  }

  return (
    <>
      <Header GoHome={GoHome}/>
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
