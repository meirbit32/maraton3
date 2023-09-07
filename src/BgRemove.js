import './BgRemove.css';
import { useState } from 'react';
import DownloadIm from './DownloadIm';
import Image from './Image'
import logo from './assets/logo.png'
import banner from './assets/banner.png'
import close from './assets/close.png'

function BgRemove() {
  
  const [tabname, settabname] = useState('no_bg');
  function tab_click(e) {
    
    if (e.target.className == "tab_button_original"){
      settabname('original')
    } else{
    settabname('no_bg');
}}

  return (
    <div >
      <div className='bg_div_cont'>
          <div className='bg_div_header'>
            <img src={close} className='close1_img'/>
            <div className='bg_div_header_title'> העלאת תמונה כדי להסיר את הרקע</div>
            <button className='bg_div_header_button'> העלאת תמונה</button>
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
                    <button className='main_left_footer_button'> תקנון חברה</button>
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
    </div>
  );
}

export default BgRemove;
