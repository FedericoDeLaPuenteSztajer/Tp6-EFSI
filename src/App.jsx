import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Account from './Components/Account.jsx'
import Feed from './Components/Feed.jsx'
import catApi from './Modules/TheCatApi.jsx'
import BigPost from './Components/BigPost.jsx'
//Random entre 0 y 10 => Math.floor(Math.random() * 11) 
//El ultimo no se incluye

function App() {
  //Harcodeado
  const COMMENTS = ["Nuevo seguidor", "Yo literal", "primer comentario", "Le paso a mi tio", "Sófocles tenía razón", "Revivan la grasa :v", "Borra la cuenta"];
  const ACCOUNT_NAMES = ["AinzOoalGown", "Albedo", "ShalltearBlodfallen", "MareBelloFiore", "AuraBelloFiore", "Cockytus", "Demiurge", "PandorasActor"]
  const DESCRIPTIONS = ["busco amigos", "rayo macuin", "Primer post!", "Borraré la cuenta", "Hola soy Sófocles", "G de perro"]
  //

  const [viewingPost, setViewingPost] = useState(null)
  const [userAccount, setUserAccount] = useState(null) // Usuario harcodeado
  const [actualAccount, setActualAccount] = useState(null) // Cuenta visual
  const [feedPosts, setFeedPosts] = useState([])

  const BuscarUsuario = async () => {
    const acc = {}
    const response = await catApi.get("&limit=2");

    acc["name"] = ACCOUNT_NAMES[Math.floor(Math.random() * (ACCOUNT_NAMES.length))]
    acc["desc"] = DESCRIPTIONS[Math.floor(Math.random() * (DESCRIPTIONS.length))]
    acc["cantPosts"] = Math.floor(Math.random() * (251))
    acc["cantFollowers"] = Math.floor(Math.random() * (1501))
    acc["cantFollows"] = Math.floor(Math.random() * (21))
    acc["img"] = response.data[0].url
    acc["firstPostImg"] = response.data[1].url

    return acc;
  }

  const GenerateFeed = async () => {

    const response = await catApi.get("&limit=20");

    let i = 0;
    const postList = response.data.map(d => {
      const post = {}
      if (i < 10) {
        post["postImg"] = d.url
      } else if (i < 20) {
        post["accountImg"] = d.url
      }
      post["accountName"] = ACCOUNT_NAMES[Math.floor(Math.random() * (ACCOUNT_NAMES.length))]
      i++;

      return post;
    })

    setFeedPosts(postList);
  }

  const GoHome = () => {
    setViewingPost(null);
    GenerateFeed();
    setActualAccount(userAccount);
  }

  const ViewPost = async (postImg, accountImg, accountName) => {
    const postData = {}
    postData["postImg"] = postImg
    postData["accountImg"] = accountImg
    postData["accountName"] = accountName
    postData["desc"] = DESCRIPTIONS[Math.floor(Math.random() * (DESCRIPTIONS.length))]
    postData["likes"] = Math.floor(Math.random() * (501))
    postData["date"] = new Date(2026, 5, 18) //Harcodeado
    postData["comment"] = COMMENTS[Math.floor(Math.random() * (COMMENTS.length))]

    setViewingPost(postData);

    const acc = await BuscarUsuario();
    acc["name"] = accountName
    acc["img"] = accountImg

    setActualAccount(acc);
  }

  const Login = async () => {
    setUserAccount(await BuscarUsuario);
    GoHome();
  }

  return (
    <>
      <h1>Funca</h1>

      {userAccount != null && <Header GoHome={GoHome} />}

        {userAccount != null && <main>
          <section className="LeftBar">
            <Account Account={actualAccount} />
          </section>


          <section className="RightBar">
            {viewingPost == null && <Feed postsData={feedPosts} ViewPost={ViewPost} />}
            {viewingPost != null && <BigPost postData={viewingPost} />}
          </section>

        </main>}

      {userAccount == null &&
        <main><button onClick={() => Login()} >Iniciar Sesion</button></main>
      }
    </>
  )
}

export default App;
