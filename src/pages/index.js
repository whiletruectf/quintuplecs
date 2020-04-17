import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo2.png"

import "../scss/main.scss"

import Navbar from "../components/navbar"

const Index = () => (
  <div className="index">
    <Link to="/">
      <img src={Logo} />
    </Link>
    <Navbar />
  </div>
)

export default Index
