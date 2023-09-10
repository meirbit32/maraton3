import './DownloadIm.css'
import { useState } from 'react';
import newImage from './assets/new.png'

function DownloadIm(props) {
  function open_download_popup(){
      props.show_popup()
  }

  return (
        <div className="DownloadImg_cont" style={{borderBottom : ( props.border ?  "1px solid #9e9e9ea8" : "")}}>
            <div className="DownloadImg_title" > {props.title} 
            {props.newImage ? <img className="newImg" src={newImage} /> : ""}
            </div>
            <div className="DownloadImg_subtitle"> {props.subtitle}</div>
            <button className="DownloadImg_btn" onClick={open_download_popup}>{props.btnText}</button>

            <div className="DownloadImg_subsubtext">{props.subsubtext}</div>
          
        
        
        </div>
  )}

  export default DownloadIm
