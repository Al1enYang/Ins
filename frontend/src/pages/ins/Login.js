import React, {useState,useRef} from "react"
import {Link,Outlet} from "react-router-dom";
import './Login.css'

import { FacebookOutlined } from '@ant-design/icons';

import phone from '../../assert/img/phone.png'
import ins from '../../assert/img/ins.png'
import appStore from '../../assert/img/appstore.png'
// import appStore from '../../assert/img/appstore.png'
import googlePlay from '../../assert/img/googleplay.png'

const Login=()=>{
    const ref = useRef(null);
    return(
        <div className={'Login-container'}>
            <img className={'Login-image'} src={phone}></img>

            <div className={'Login-page'}>
                {/* Log in  */}
                <div className={'Login-loginpart'}>
                    <img className={'Login-insimage'} src={ins}></img>
                    <input type='text' className={'Login-userInput'} placeholder={'Phone, user or email'}></input>
                    <input type='text' className={'Login-userInput'} placeholder={'Password'}></input>
                    <button className={'Login-button'}>{'Log In'}</button>

                    <div className={'Login-or'}>
                        <div className={'Login-line'}></div>
                        {'OR'}
                        <div className={'Login-line'}></div>
                    </div>

                    <div className={'Login-facebook'}>
                        <div className={'Login-facebookIcon'}><FacebookOutlined /></div>
                        {'Log in with Facebook'}
                    </div>

                    <div className={'Login-findPassword'}>{'Forgot password?'}</div>
                </div>

                {/* // Sign up */}
                <div className={'Login-signupPage'}>
                    <div className={'Login-signup-text'}>Don't have an account?</div>
                    <div className={'Login-signup'}>
                        <div className={'Login-signup-nondisplay'} ref={ref}><Link to="/signup">{'Sign Up'}</Link></div>
                        <div onClick={()=>ref.current.click()}>{'Sign Up'}</div>
                    </div>
                </div>

                <div className={'Login-appPage'}>{'Get the app.'}</div>

                <div className={'Login-download'}>
                    <img className={'Login-img'} src={appStore}></img>
                    <img className={'Login-img'} src={googlePlay}></img>
                </div>
            </div>
        </div>
    )
}

export default Login

// const Signup = () =>(
//     <div>
//         <div><Link to="/signup">{'Sign Up'}</Link></div>
//         <Outlet />
//     </div>
// )