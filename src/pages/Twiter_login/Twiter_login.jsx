import { FaAngleDown } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import { useState } from "react";
import "./Twiter_login.css";
import Modla from "../../components/Modal/Modla";
import { day, month } from "../../faker/faker";
import { IoMdClose } from "react-icons/io";
import { createtost } from "../../helper/helpr";
const years=Array.from({length:120},(a,i)=>new Date().getFullYear()-i)
const Twiter_login = () => {
  const [modal,setmodal]=useState(false)
  const [signmodal,setsignmodal]=useState(false)
  const [input,setinput]=useState({

    name:'',
    phone:'',
    month:'',
    day:'',
    year:'',

  })

  const handleinputchange=(e)=>{

  setinput((prevstate)=>({
    ...prevstate,
    [e.target.name]:e.target.value
  }))
  }

  const handlecreate=(e)=>{
    e.preventDefault()

    if(!input.name || !input.phone || !input.month || !input.day || !input.year){
    createtost('All feild are required')
    }else{
      createtost('data stable','success')
    }
  }
  return (
    <>
    {modal && <Modla >
    <div className="modal-header">
<button onClick={()=> setmodal(false)}  ><IoMdClose /></button>
<h3>Step 1 of 5</h3>

          </div>
      <div className="modal-body-area">
<div className="modal-body-content">
<h1>Create your account</h1>
<form onSubmit={handlecreate} action="">

  <input onChange={handleinputchange} value={input.name} placeholder="name" name='name' type="text"  id="" />
  <input onChange={handleinputchange} value={input.phone} name="phone" placeholder="phone" type="text" />
  <a className="small" href="">Use email instead</a>
  <div className="date-content">
    <h4>Date of birth</h4>
    <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
  </div>

  <div className="h-date">
    <select value={input.month} onChange={handleinputchange} name="month" className="first"  id="">
      <option value="">Month</option>
      {month?.map((item,index)=>  <option value={index} selected={new Date().getMonth()==index?true:false} key={index}>{item}</option>)}
    </select>
    <select onChange={handleinputchange} value={input.day} className="second" name="day" id="">
      <option value="">Day</option>
      {day?.map((item,index)=>  <option selected={new Date().getDate()==item?true:false} value={item} key={index}>{item}</option>)}
    </select>
    <select onChange={handleinputchange} value={input.year} className="third" name="year" id="">
      <option value="">Year</option>
      {years?.map((item,index)=>  <option value={item} selected={new Date().getFullYear()==item?true:false} key={index}>{item}</option>)}
    </select>
  </div>

  <button type="submit">Next</button>
</form>
</div>
      </div>
      </Modla>}
    
      {signmodal &&   <Modla>    <div className="modal-signin-header">
<button onClick={()=> setsignmodal(false)}  ><IoMdClose /></button>
<img src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Log%D0%BE.png" alt="" />

          </div>
          
          <div className="modla-signin-body">
  <div className="modal-signin-content">
    <h1>Sign in to X</h1>
    <div className="buttons">
              <div className="buttons-left">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocL8vicgsuqysbafnfUlQLJHtPyJDUm1-e6zcLNOROWPzOU=s96-c"
                  alt=""
                />
                <div className="button-content">
                  <h4>Sign in Md</h4>
                  <h5>
                    md1azad0@gmail.com <FaAngleDown />
                  </h5>
                </div>
              </div>
              <div className="buttons-right">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt=""
                />
              </div>
            </div>

            <div className="extra buttons-2">
              <h3>
                <IoLogoApple />
                Sign up with Apple
              </h3>
            </div>
            <span className="line">
              <h2>or</h2>
            </span>

<form className="second-form" action="">

<input placeholder="phone email or username" type="text" name="name" id="" />
<button type="submit">Next</button>

<button className="second-submit" type="submit">Forgot Password?</button>

<p>Don`t have an account? <a href=""> Sign up</a></p>
</form>
            
  </div>
</div>
          </Modla>}
    
      <div className="tw-login-area">
        <div className="tw-container">
          <div className="tw-left">
            <div className="imgs">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Log%D0%BE.png"
                alt=""
              />
            </div>
          </div>

          <div className="tw-right">
            <h1>Happening now</h1>
            <h4>Join today.</h4>
            <div className="buttons">
              <div className="buttons-left">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocL8vicgsuqysbafnfUlQLJHtPyJDUm1-e6zcLNOROWPzOU=s96-c"
                  alt=""
                />
                <div className="button-content">
                  <h4>Sign in Md</h4>
                  <h5>
                    md1azad0@gmail.com <FaAngleDown />
                  </h5>
                </div>
              </div>
              <div className="buttons-right">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt=""
                />
              </div>
            </div>

            <div className="buttons-2">
              <h3>
                <IoLogoApple />
                Sign up with Apple
              </h3>
            </div>

            <span className="line">
              <h2>or</h2>
            </span>
            <div onClick={()=>setmodal(true)} className="buttons-3">
              <h3>Create account</h3>
            </div>
            <p className="tests">
              By signing up, you agree to the <a>Terms of Service </a> and{" "}
              <a>
                {" "}
                Privacy Policy, <br />
              </a>
              including <a> Cookie Use.</a>
              <h2>Already have an account?</h2>
            </p>

            <div onClick={()=>setsignmodal(true)} className="buttons-4">
              <h3>Sign In</h3>
            </div>
          </div>
        </div>

        <div className="footer">
          <a href="">About</a>
          <a href="">Download the X app</a>
          <a href="">Help Center</a>
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
          <a href="">Cookie Policy</a>
          <a href="">Accessibility</a>
          <a href="">Ads info</a>
          <a href="">Blog</a>
          <a href="">Status</a>
          <a href="">Carees</a>
          <a href="">Brand Resources</a>
          <a href="">Advertising</a>
          <a href="">Marketin</a>
          <a href="">X for Business</a> <br />
      <div className="dev"></div>
          <a href="">Devoloper</a>
          <a href="">Directory</a>
          <a href="">Setting</a>
          <a href="">© 2023 X Corp.</a>
        </div>
      </div>
    </>
  );
};

export default Twiter_login;
