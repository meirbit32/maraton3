import './Image.css'
import axios from 'axios';
import { useState, useRef,useEffect} from 'react'


function Image(props) {
    
    const [color, setcolor] = useState('red');
    const [image_only_disp, setimage_only_disp] = useState('');
    const [upload_img_name, setupload_img_name] = useState(props.upload_img_name);

    useEffect(() => {
        setupload_img_name(props.upload_img_name);
    },[props.upload_img_name]);

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

    function color_choose_func(e){

        if(upload_img_name && upload_img_name!="no_bg_false") {
            console.log(e.target.value);

            let formData = new FormData();

            formData.append("UploadedFileName", upload_img_name);
            formData.append("color", color);

            axios.post('http://localhost:5000/upload_image_with_color', formData)
                .then(res => {
                    setupload_img_name(res.data);
                    props.color_func();
                })
        } else {
            console.log("no_file_uploaded");
        }


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
                <input type='color' ref={inputElement} className='input_color' onChange={color_change} onBlur={color_choose_func}/>
                </>
                : ''}
                <div className={`image_place ${image_only_disp}`}>
                    {props.upload_img_name  && props.upload_img_name!= "no_bg_false" && props.upload_img_name!="color_no_bg_false" ?
                    <img className='uploded_img' src={'http://localhost:5000/'+props.upload_img_name} />
                    : "" }
                </div>

               </div>

        </div>   
  );
  }


  export default Image;