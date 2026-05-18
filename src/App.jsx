import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Account from './Components/Account.jsx'
import Feed from './Components/Feed.jsx'
import catApi from './Modules/TheCatApi.jsx'

function App() {

  //Harcodeado
  const comments= ["Nuevo seguidor", "Yo literal", "primer comentario", "Le paso a mi tio", "Sófocles tenía razón", "Revivan la grasa :v"];
  const accountNames= ["AinzOoalGown", "Albedo", "ShalltearBlodfallen", "MareBelloFiore", "AuraBelloFiore", "Cockytus", "Demiurge", "PandorasActor"]

  //Random entre 0 y 10 => Math.floor(Math.random() * 11)

  let Account={}
  const Login = ()=>{
    Account["name"]= Math.floor(Math.random() * (accountNames.length +1))
    
    catApi.get("")
    
  }

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
          <Feed postsData={"-!-"}/>
        </section>
      </main>
    </>
  )
}

export default App;
