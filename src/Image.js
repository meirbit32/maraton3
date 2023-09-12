import './Image.css'
import { useState, useRef,useEffect} from 'react'


function Image(props) {
    
    const [color, setcolor] = useState('red');
    const [image_only_disp, setimage_only_disp] = useState('');
    
    useEffect(() =>{
        if(props.image_only == true){
            setimage_only_disp('image_only_disp')
        } else
        setimage_only_disp('')
    },[props.image_only]);
    const inputElement =useRef();
    
    const focusInput = ()=>{
        inputElement.current.click();
    };

    function color_change (e){
        setcolor(e.target.value)
    }

  return (
        <div>
            <div className='image_disp_cont'>
                {props.image_only == false ?
                <>
                <div className='image_disp_cont_text'> אל תשכח להוריד את הקבצים הם ימחקו אוטומטית כשתצא מהדף</div>
                <div className='color_btn' onClick={focusInput}> צבע רקע 
                <span className='color_choos' style={{backgroundColor : color}}></span>
                </div>
                <input type='color' ref={inputElement} className='input_color' onChange={color_change}/>
                </>
                : ''}
                <div className={`image_place ${image_only_disp}`}>
                    {props.upload_img_name  && props.upload_img_name!= "no_bg_false" ?
                    <img className='uploded_img' src={'http://localhost:5000/'+props.upload_img_name} />
                    : "" }
                </div>

               </div>

        </div>   
  );
  }


  export default Image;