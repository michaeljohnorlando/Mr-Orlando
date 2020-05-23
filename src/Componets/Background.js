import React from "react"
import * as THREE from 'three'
import NET from "vanta/dist/vanta.net.min.js"

import NavFullScreen from "./NavFullScreen"
import PorfolioMain from "./PorfolioMain"
import Footer from "./Footer"


class Background extends React.Component {

    constructor() {
      super()
      this.vantaRef = React.createRef()
    }
    componentDidMount() {
      this.vantaEffect = NET({
        el: this.vantaRef.current,
        color: 0x0,
        backgroundColor: 0xffffff,
        THREE: THREE    
      })
    }
    componentWillUnmount() {
      if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
      return <div className='vanta' id="background" ref={this.vantaRef}>
            
            <PorfolioMain />
            <NavFullScreen />
            <Footer />
      </div>
    }
  }

  export default Background 