import React from 'react'
import styled from 'styled-components'

export default function BurguerBottom( props ) {
   
    return (
        <Burguer>
            <div className={`hamburger ${props.clicked ? 'is-active' : ''}`} id="hamburger-1" onClick={props.handleClick}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </Burguer>

    )
}

const Burguer = styled.div`
.hamburger .line{
    width: 35px;
    height: 4px;
    background-color: #e1d348;
    display: block;
    margin: 6px 0;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    border-radius: 1.5px;
}

.hamburger:hover{
  cursor: pointer;
}
#hamburger-1.is-active .line:nth-child(2){
  opacity: 0;
}

#hamburger-1.is-active .line:nth-child(1){
  -webkit-transform: translateY(13px) rotate(45deg);
  -ms-transform: translateY(13px) rotate(45deg);
  -o-transform: translateY(13px) rotate(45deg);
  transform: translateY(13px) rotate(45deg);
}

#hamburger-1.is-active .line:nth-child(3){
  -webkit-transform: translateY(-13px) rotate(-45deg);
  -ms-transform: translateY(-13px) rotate(-45deg);
  -o-transform: translateY(-13px) rotate(-45deg);
  transform: translateY(-13px) rotate(-45deg);
}
`