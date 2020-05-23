import React from "react"
import '../CSS/NavFullScreen.css'

function NavFullScreen(){
    function MenuSelected() {
        var top = document.getElementById("top");
        var middle = document.getElementById("middle");
        var bottom = document.getElementById("bottom");
        var overlayNav = document.getElementById("overlayNav");
        var fpadding = document.getElementById("fpadding");

        top.classList.toggle("active");
        middle.classList.toggle("active");
        bottom.classList.toggle("active");
        overlayNav.classList.toggle("active");
        fpadding.classList.toggle("active");
    }
    
    return(
        <div className="content-container">
            <div onClick={MenuSelected} id="menu-icon-shape">
                <div id="menu-icon">
                    <div id="top"></div>
                    <div id="middle"></div>
                    <div id="bottom"></div>
                </div>
            </div>

            <div id="overlayNav">
                <div id="nav-content">
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavFullScreen