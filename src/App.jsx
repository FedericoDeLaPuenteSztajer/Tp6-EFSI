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

  //Harcodeado
  const comments = ["Nuevo seguidor", "Yo literal", "primer comentario", "Le paso a mi tio", "Sófocles tenía razón", "Revivan la grasa :v"];
  const accountNames = ["AinzOoalGown", "Albedo", "ShalltearBlodfallen", "MareBelloFiore", "AuraBelloFiore", "Cockytus", "Demiurge", "PandorasActor"]
  let userAccount = {}

  userAccount["name"] = accountNames[Math.floor(Math.random() * (accountNames.length + 1))]
  userAccount["desc"] = comments[Math.floor(Math.random() * (comments.length + 1))]
  userAccount["cantPosts"] = Math.floor(Math.random() * (1, 251))
  userAccount["cantFollowers"] = Math.floor(Math.random() * (1, 1501))
  userAccount["cantFollows"] = Math.floor(Math.random() * (1, 21))
  catApi.get("&limit=2")
    .then((response) => {
      userAccount["img"] = response.data[0].url
      userAccount["firstPostImg"] = response.data[1].url
    })

  GoHome()
  //

  const GoHome = () => {
    setViewingPost(null)
    setFeedPosts(GenerateFeed())
    setActualAccount(userAccount);
  }

  const ViewPost = () => {

  }

  const GenerateFeed = () => {
    catApi.get("&limit=20")
      .then((response) => {
        let i=0;
        const postList = response.data.map(d => {
          const post={}
          if (i < 10) {
            post["postImg"] = d.url
          }else if (i < 20) {
            post["accountImg"] = d.url
          }
          post["accountName"]= accountNames[Math.floor(Math.random() * (accountNames.length + 1))]
          i++;

          return post;
        })

        return postList;
      })
  }



  /** 
  const Login = () => {
    userAccount["name"] = Math.floor(Math.random() * (accountNames.length + 1))
    userAccount["desc"] = Math.floor(Math.random() * (comments.length + 1))
    userAccount["cantPosts"] = Math.floor(Math.random() * (1, 251))
    userAccount["cantFollowers"] = Math.floor(Math.random() * (1, 1501))
    userAccount["cantFollows"] = Math.floor(Math.random() * (1, 21))

    catApi.get("?limit=2")
      .then((response) => {
        userAccount["img"] = response.data[0].url
        userAccount["firstPostImg"] = response.data[1].url
      })
  }
  */

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
