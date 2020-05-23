import React from "react"
import './fonts/BarcodeText.woff';
import './CSS/main.css';
import 'three/build/three.min.js'

import Background from "./Componets/Background"

function App(){
    return(
        <div>
            <script src="three/build/three.min.js" />
            <Background />
        </div>

    )
}

export default App