import './DownloadImg.css'
import { useState } from 'react';
import newImage from './assets/new.png'

function DownloadImg(props) {
  // const [border, setborder] = useState(props.borderFlag);
  return (
        <div className="DownloadImg_cont" style={{borderBottom : ( border?  "1px solid #9e9e9ea8" : "")}}>
            <div className="DownloadImg_title" > {props.title} 
            {props.newImage ? <img className="newImg" src={newImage} /> : ""}
            </div>
            <div className="DownloadImg_subtitle"> {props.subtitle}</div>
            <button className="DownloadImg_btn">{props.btnText}</button>
            <div className="DownloadImg_subsubtext">{props.subsubtext}</div>
        </div>
  )}

  export default DownloadImg
