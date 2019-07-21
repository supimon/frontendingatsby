/**
 * Created by supimon on 21/07/19.
 */
import React, { useEffect } from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import PJStyles from "./parallaxJumbotron.module.scss"

const ParallaxJumbotron = (props) => {

  // window.addEventListener('scroll', function(){console.log("scrolled")});
  const jumboBgStyles = {
      backgroundImage: 'url("'+ props.bgImageURL +'")'
    },
    jumboStyles = {
      overflow: "hidden",
      position: "relative",
      backgroundColor: "rgba(233, 236, 239, 0)",
      color: "white"
    }

  let jumboContent = React.createRef(), jumbobg = React.createRef();

  useEffect(()=>{

    let jumbo = jumbobg.current,
      jumbotro = document.getElementById(props.id),
      jumboCont = jumboContent.current,
      jumboTop = jumbotro.offsetTop;

    jumbo.style.height = (jumbotro.offsetHeight+jumboTop)+'px';

    window.addEventListener("scroll", function(){
      let scrolled = window.scrollY;

      jumbo.style.transform = 'translate3d(0px,'+ (scrolled*0.315) + 'px, 0px)';
      jumboCont.style.transform = 'translate3d(0px,'+ (scrolled*0.5) +'px, 0px)';
      jumboCont.style.opacity = 1 - (scrolled*.00175);
    });
  }, [])

  return (
    <Jumbotron id={props.id} style={jumboStyles}>
      <div className={PJStyles.jumboBg} style={jumboBgStyles} ref={jumbobg}></div>
      <div className="jumboContents" ref={jumboContent}>
        {props.children}
      </div>
    </Jumbotron>
  )
}

export default ParallaxJumbotron