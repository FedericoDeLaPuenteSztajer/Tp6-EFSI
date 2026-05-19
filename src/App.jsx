import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Account from './Components/Account.jsx'
import Feed from './Components/Feed.jsx'
import catApi from './Modules/TheCatApi.jsx'
import BigPost from './Components/BigPost.jsx'
//Random entre 0 y 10 => Math.floor(Math.random() * 11)

function App() {

  const [actualAccount, setActualAccount] = useEffect({})
  const [viewingPost, setViewingPost] = useEffect(null)
  const [feedPosts, setFeedPosts] = useEffect([])
  const [userAccount, setUserAccount] = useEffect({})

  //Harcodeado
  const comments = ["Nuevo seguidor", "Yo literal", "primer comentario", "Le paso a mi tio", "Sófocles tenía razón", "Revivan la grasa :v", "Borra la cuenta"];
  const accountNames = ["AinzOoalGown", "Albedo", "ShalltearBlodfallen", "MareBelloFiore", "AuraBelloFiore", "Cockytus", "Demiurge", "PandorasActor"]
  const descritions = ["busco amigos", "rayo macuin", "Primer post!", "Borraré la cuenta", "Hola soy Sófocles", "G de perro"]
  //

  const BuscarUsuario = () => {
    const acc = {}
    catApi.get("&limit=2")
      .then((response) => {
        acc["name"] = accountNames[Math.floor(Math.random() * (accountNames.length + 1))]
        acc["desc"] = descritions[Math.floor(Math.random() * (descritions.length + 1))]
        acc["cantPosts"] = Math.floor(Math.random() * (1, 251))
        acc["cantFollowers"] = Math.floor(Math.random() * (1, 1501))
        acc["cantFollows"] = Math.floor(Math.random() * (1, 21))
        acc["img"] = response.data[0].url
        acc["firstPostImg"] = response.data[1].url
      })

    return acc;
  }

  // Usuario harcodeado
  setUserAccount(BuscarUsuario())

  const GoHome = () => {
    setViewingPost(null)
    setFeedPosts(GenerateFeed())
    setActualAccount(userAccount);
  }

  const ViewPost = (postImg, accountImg, accountName) => {
    const postData = {}
    postData["postImg"] = postImg
    postData["accountImg"] = accountImg
    postData["accountName"] = accountName
    postData["desc"] = descritions[Math.floor(Math.random() * (descritions.length + 1))]
    postData["likes"] = postImg
    postData["date"] = new Date(2026, 5, 18) //Harcodeado
    postData["comment"] = comments[Math.floor(Math.random() * (comments.length + 1))]

    setViewingPost(postData);

    const acc = BuscarUsuario()
    acc["name"] = accountName
    acc["img"] = accountImg

    setActualAccount(acc);
  }

  const GenerateFeed = () => {
    catApi.get("&limit=20")
      .then((response) => {
        let i = 0;
        const postList = response.data.map(d => {
          const post = {}
          if (i < 10) {
            post["postImg"] = d.url
          } else if (i < 20) {
            post["accountImg"] = d.url
          }
          post["accountName"] = accountNames[Math.floor(Math.random() * (accountNames.length + 1))]
          i++;

          return post;
        })

        return postList;
      })
  }

  GoHome()

  return (
    <>
      <Header GoHome={GoHome} />
      <main>
        <section className="LeftBar">
          <Account Account={actualAccount} />
        </section>

        <section className="RightBar">
          {viewingPost == null && <Feed postsData={feedPosts} ViewPost={ViewPost} />}
          {viewingPost != null && <BigPost postData={viewingPost} comment={"-!-"} />}
        </section>
      </main>
    </>
  )
}

export default App;
