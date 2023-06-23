import React, { useEffect } from "react"
// @ts-ignore
import pokeballIcon from "../assets/pokeball-icon.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link, useLocation } from "react-router-dom"

function Navbar() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navigationRoutes = [
    {
      name: "Search",
      route: "/search",
    },
    {
      name: "Compare",
      route: "/compare",
    },
    {
      name: "Pokemon",
      route: "/pokemon",
    },
    {
      name: "My List",
      route: "/list",
    },
    {
      name: "About",
      route: "/about",
    },
  ]
  const location = useLocation()
  //Side effects are actions that affect the external world outside
  // of the component, such as fetching data, subscribing to events,
  // or manipulating the DOM.
  useEffect(() => {
    const index = navigationRoutes.findIndex(({ route }) =>
      location.pathname.includes(route),
    )
    ul(index)
  }, [location.pathname, navigationRoutes])

  function ul(index: number) {
    var underlines = document.querySelectorAll<HTMLElement>(".underline")
    for (var i = 0; i < underlines.length; i++) {
      underlines[i].style.transform = "translate3d(" + index * 100 + "%,0,0)"
    }
  }

  return (
    <nav>
      <div className="block">
        <img src={pokeballIcon} alt="pokeball icon" />
      </div>
      <div className="data">
        <ul>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          {/* Navigation Routes */}
          {navigationRoutes.map(({ name, route }, index) => {
            return (
              <Link to={route} key={index}>
                <li>{name}</li>
              </Link>
            )
          })}
        </ul>
      </div>
      <div className="block">
        <GiHamburgerMenu />
      </div>
    </nav>
  )
}

export default Navbar
