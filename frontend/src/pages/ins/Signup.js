import React, {useState,useRef} from "react"
import {Link,Outlet,Router} from "react-router-dom";
import './Signup.css'

import { FacebookOutlined } from '@ant-design/icons';
import phone from '../../assert/img/phone.png'
import ins from '../../assert/img/ins.png'
import appStore from '../../assert/img/appstore.png'
import googlePlay from '../../assert/img/googleplay.png'

const Signup=()=>{
    const ref = useRef(null)
    return(
        <div className={'Signup-container'}>
            <img className={'Signup-image'} src={phone}></img>

            <div className={'Signup-page'}>
                {/* Sign up  */}
                <div className={'Signup-signuppart'}>
                    <img className={'Signup-insimage'} src={ins}></img>

                    <div className={'Signup-text'}>
                        {'Sign up to see photos and videos'}
                        <div className={'Signup-text'}>{'from your friends.'}</div>
                    </div>
                    
                    <button className={'Signup-button'}>
                        <div className={'Signup-facebookIcon'}>
                            <FacebookOutlined />
                        </div>
                        <div>{'Log in with Facebook'}</div>
                    </button>

                    <div className={'Signup-or'}>
                        <div className={'Signup-line'}></div>
                        {'OR'}
                        <div className={'Signup-line'}></div>
                    </div>

                    <input type='text' className={'Signup-userInput'} placeholder={'Mobile Number or Email'}></input>
                    <input type='text' className={'Signup-userInput'} placeholder={'Full Name'}></input>
                    <input type='text' className={'Signup-userInput'} placeholder={'Username'}></input>
                    <input type='text' className={'Signup-userInput'} placeholder={'Password'}></input>

                    <button className={'Signup-button'}>
                        <div className={'Signup-button-text'}>{'Sign up'}</div>
                    </button>

                    <div className={'Signup-policy'}>
                        <div className={'Signup-policy-line'}>
                            <div className={'Signup-policy-text'}>{'By signing up, you agree to our'}</div>
                            <div className={'Signup-policy-highlight'}>{'Terms,'}</div>
                            <div className={'Signup-policy-highlight'}>{'Data'}</div>
                        </div>
                        <div className={'Signup-policy-line'}>
                            <div className={'Signup-policy-highlight'}>{'Policy'}</div>
                            <div className={'Signup-policy-text'}>{'and'}</div>
                            <div className={'Signup-policy-highlight'}>{'Cookies Policy.'}</div>
                        </div>
                    </div>
                </div>

                {/* // Sign up */}
                <div className={'Signup-signupPage'}>
                    <div className={'Signup-signup-text'}>{'Have an account?'}</div>
                    <div className={'Signup-login'}>
                        <div className={'Signup-login-nondisplay'} ref={ref}><Link to="/">{'Log in'}</Link></div>
                        <div onClick={()=>ref.current.click()}>{'Log in'}</div>
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

export default Signup

// const Login = () =>(
//     <div>
//         <div><Link to="/">{'Log in'}</Link></div>
//         <Outlet />
//     </div>
// )