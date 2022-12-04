import React from "react"
import Header from "./components/header"
import Main from "./components/main"
import data from "./data"
import './index.css';

export default function App() {
  const main = data.map(item => {
    return (
        <Main
            key={item.id}
            item={item}
        />
    )
}) 
  return (
   <div className="main">
      <Header />
      <section className="food-list">
         {main}
      </section>
   </div>
  )
}

