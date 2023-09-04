import './BgRemove.css';
import close1 from'./assets/close1.png'


function BgRemove() {
  return (
    <div >
      <div className='bg_div_cont'>
          <div className='bg_div_header'>
            <img src={close1} className='close1_img'/>
            <div className='bg_div_header_title'> העלאת תמונה כדי להסיר את הרקע</div>
            <button className='bg_div_header_button'> העלאת תמונה</button>
            <div className='bg_div_header_subtext'> פורמטים נתמכים png, jpeg</div>
            </div>
      </div>
    </div>
  );
}

export default BgRemove;
