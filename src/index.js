// @flow

import React from "react"
import ReactDOM from "react-dom"

import DemoSite from "./DemoSite"
import LandingPage from "./LandingPage"
import Theme from "./Theme"

import "./site.css"

const Site = () => {
  const path = window.location.pathname
    .replace(/\/$/, "")
    .split("/")
    .slice(-1)[0]
  return <Theme>{path === "demo" ? <DemoSite /> : <LandingPage />}</Theme>
}

if (typeof document !== undefined) {
  ReactDOM.render(<Site />, document.getElementById("root"))
}
