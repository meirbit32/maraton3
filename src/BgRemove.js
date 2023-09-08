import './BgRemove.css';
import { useState, useRef } from 'react';
import DownloadIm from './DownloadIm';
import Image from './Image'
import logo from './assets/logo.png'
import banner from './assets/banner.png'
import close from './assets/close.png'

function BgRemove() {
  
  const [tabname, settabname] = useState('no_bg');
  const [open_poup, setopen_popup] = useState(false);

  const inputFileElement = useRef()

  const focusInput = () =>{
    inputFileElement.current.click()
  }

  function tab_click(e) {

    if (e.target.className == "tab_button_original"){
      settabname('original')
    } else{
    settabname('no_bg');
}}


function open_popup (){
  setopen_popup(true)
}

function close_popup(){
  setopen_popup(false)
}

  return (
    <div >
      <div className='bg_div_cont'>
          <div className='bg_div_header'>
            <img src={close} className='close1_img'/>
            <div className='bg_div_header_title'> העלאת תמונה כדי להסיר את הרקע</div>
            <button className='bg_div_header_button' onClick={focusInput}> העלאת תמונה</button>
            <input type='file' ref={inputFileElement} className='file_input'></input>
            <div className='bg_div_header_subtext'> פורמטים נתמכים png, jpeg</div>
            </div>

        <div className='main_cont'>
            <div className='main_left'>
                <div className='middle_div_left'>
                    <div className='tab_button_no_bg' style={{borderBottom : (tabname != 'original' ? "3px solid #9c27b0": "")}} onClick={tab_click}> הוסר רקע </div>
                    <div className='tab_button_original' style={{borderBottom : (tabname == 'original' ? "3px solid #9c27b0": "")}} onClick={tab_click}> מקורי </div>
                  
                  { tabname== "no_bg" ?   
                    <Image image_only={false}/>
                   :
                    <Image image_only={true}/>
                  }

                </div>
                <div className='main_left_footer'>
                    <div className='main_left_footer_text'> על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות . </div>
                    <button className='main_left_footer_button' onClick={open_popup}> תקנון חברה</button>
                </div>
                

            </div>
            <div className='main_right'>
                <div className='middle_div_right'>
                  <DownloadIm 
                  title="תמונה חינם"
                  subtitle=" 612x408 תצוגה מקדימה של תמונה   "
                  btnText="הורד"
                  subsubtext="איכות טובה עד 0.25 מגה פיקסל" 
                  borderFlag={true}
                  newImage={false}
                  />
                  <DownloadIm
                  title="pro"
                  subtitle="1280x1920 תמונה מלאה "
                  btnText=" HD הורד"
                  subsubtext="איכות טובה עד 0.25 מגה פיקסל"
                  borderFlag={false}
                  newImage={true}
                  />
                </div>
            </div>
          </div>
            <div className="footer_cont">
              <img src={logo} className='logo'/>
              <a href='http://www.google.com' target="_blank"><img src={banner} className='banner'/></a>
            </div>
      </div>
      {open_poup ? 
      <>
        <div className='takanon_popup_overlay'></div>
        <div className='takanon_popup'>
          <img src={close}  className='close_popup_img' onClick={close_popup}/>
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
           passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </div></>
    : "" }

    </div>
  );
}

export default BgRemove;
