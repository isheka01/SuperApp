import React from 'react'
import {useState, useRef} from 'react';
import fromstyle from'../components/Form.module.css'
function Form() {
    function handleSubmit(e){
        e.preventDefault();
        name.current.value==''?setNameFlag(false):setNameFlag(true);
        username.current.value==''?setUNameFlag(false):setUNameFlag(true);
        email.current.value==''?setEmailFlag(false):setEmailFlag(true);
        mobile.current.value==''?setMobileFlag(false):setMobileFlag(true); 
        check.current.checked?setCheckFlag(true):setCheckFlag(false);
        nameFlag && localStorage.setItem('name',name.current.value);
        uNameFlag && localStorage.setItem('username',username.current.value);
        emailFlag && localStorage.setItem('email',email.current.value);
        mobileFlag && localStorage.setItem('mobile',mobile.current.value);

    }
    let [nameFlag,setNameFlag]=useState(true);
    let [uNameFlag,setUNameFlag]=useState(true);
    let [emailFlag,setEmailFlag]=useState(true);
    let [mobileFlag,setMobileFlag]=useState(true);
    let [checkFlag,setCheckFlag]=useState(true);
    let name=useRef('');
    let username=useRef('');
    let email=useRef('');
    let mobile=useRef('');
    let check=useRef('');

  return (
    <div className={fromstyle.rightForm}>
        <h1 className={fromstyle.h}>Super app</h1>
        <p className={fromstyle.para}>Create your new account</p>
        <form className={fromstyle.form}>
            <input type="text" className={`${!nameFlag?fromstyle.borderRed:fromstyle.borderNull}`} placeholder='Name' ref={name} />
            {!nameFlag && <p className={fromstyle.caution}>Field is required</p>}
            <input type="text" className={`${!uNameFlag?fromstyle.borderRed:fromstyle.borderNull}`} placeholder='UserName' ref={username}/>
            {!uNameFlag && <p className={fromstyle.caution}>Field is required</p>}
            <input type="text" className={`${!emailFlag?fromstyle.borderRed:fromstyle.borderNull}`} placeholder='Email' ref={email}/>
            {!emailFlag && <p className={fromstyle.caution}>Field is required</p>}
            <input type="text" className={`${!mobileFlag?fromstyle.borderRed:fromstyle.borderNull}`} placeholder='Mobile' ref={mobile} />
            {!mobileFlag && <p className={fromstyle.caution}>Field is required</p>}
            <div>
            <input type="checkbox" ref={check} id="check" />
            <label  className={fromstyle.label}htmlFor="check">Share my registration data with Superapp</label>
            </div>
            {!checkFlag && <p className={fromstyle.cautionn}>Check this box if you want to proceed</p>}
            <button className={fromstyle.button} onClick={handleSubmit}>SIGN UP</button>
            <div className={fromstyle.footer}>
            <p className={fromstyle.para}>By clicking on Sign up. you agree to Superapp <span style={{color:'#72DB73'}}>Terms and Conditions of Use</span></p>
            <p className={fromstyle.para}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{color:'#72DB73'}}>Privacy Policy</span></p>
            </div>
        </form>
    </div>
  )
}

export default Form