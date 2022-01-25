import React, {useState,useRef} from "react"
import './Profile.css'
import {Link} from "react-router-dom";
import ins from '../../assert/img/ins.png'
import Avatar from '../../assert/img/Avatar.png'
import Avatar2 from '../../assert/img/Avatar2.png'
import Avatar3 from '../../assert/img/Avatar3.png'
import Avatar4 from '../../assert/img/Avatar4.png'
import Avatar5 from '../../assert/img/Avatar5.png'
import Avatar6 from '../../assert/img/Avatar6.jpg'
import Photo1 from '../../assert/img/Photo1.jpg'
import Photo2 from '../../assert/img/Photo2.jpg'
import Photo3 from '../../assert/img/Photo3.jpg'
import Photo4 from '../../assert/img/Photo4.jpg'
import Photo5 from '../../assert/img/Photo5.jpg'
import Photo6 from '../../assert/img/Photo6.jpg'

import { CloseCircleOutlined } from '@ant-design/icons';
import { HomeFilled } from '@ant-design/icons';
import { HomeOutlined } from '@ant-design/icons';
import { SendOutlined } from '@ant-design/icons';
import { PlusSquareOutlined } from '@ant-design/icons';
import { CompassOutlined } from '@ant-design/icons';
import { HeartOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { StarOutlined } from '@ant-design/icons';
import { SettingOutlined } from '@ant-design/icons';
import { UserSwitchOutlined } from '@ant-design/icons';
import { TableOutlined } from '@ant-design/icons';
import { PlayCircleOutlined } from '@ant-design/icons';
import { EllipsisOutlined } from '@ant-design/icons';
import { HeartTwoTone } from '@ant-design/icons';
import { SaveOutlined } from '@ant-design/icons';
import { TagOutlined } from '@ant-design/icons';

const Profile=()=>{
    const ref = useRef(null);

    const [option,setoption] = useState(false);
    const [input,setinput] = useState(false);

    const [colourProfile, setColourProfile] = useState(false);
    const [colourSaved, setColourSaved] = useState(false);
    const [colourSetting, setColourSetting] = useState(false);
    const [colourSwitch, setColourSwitch] = useState(false);
    const [colourLogout, setColourLogout] = useState(false);

    const [transparent,setTransparent] = useState(false);
    return(
        <div className={'Profile-container'}>
            <div className={'Main-header'}>
                <img className={'Main-insimage'} src={ins}></img>

                <div className={'Main-inputBorder'}>
                    <input className={'Main-searchInput'} placeholder="Search" onClick={()=>setinput(!input)}></input>
                    <div className={input?'Main-recent':'Main-rencentclose'}>
                        <div className={'Main-recent-content'}>
                            <div className={'Main-recent-text'}>{'Recent'}</div>
                            <div className={'Main-recent-clear'}>{'Clear All'}</div>
                        </div>
                    </div>
                    <div className={'Main-clearIcon'}><CloseCircleOutlined /></div>
                </div>

                <div className={'Main-functions'}>
                    <div className={'Main-icon'}><HomeFilled /></div>
                    <div className={'Main-icon'}><SendOutlined /></div>
                    <div className={'Main-icon'}><PlusSquareOutlined /></div>
                    <div className={'Main-icon'}><CompassOutlined /></div>
                    <div className={'Main-icon'}><HeartOutlined /></div>

                    <div className={'Main-avatarPart'} onClick={()=>setoption(!option)}>
                        <img className={option?'Main-avatar1':'Main-avatar2'} src={Avatar}></img>
                        
                        <div className={option?'Main-userOptions':'Main-optionclose'}>
                            {/* <div className={'Main-icon'}><HomeOutlined /></div> */}
                            <div className={colourProfile?'Main-option-colour1':'Main-option-colour2'}
                                onMouseMove={()=>setColourProfile(true)}
                                onMouseLeave={()=>setColourProfile(false)} 
                            >
                                <div className={'Main-option-profile'}>
                                    <div className={'Main-option-icon'}><UserOutlined /></div>
                                    <div className={'Main-option-text'}>{'Profile'}</div>
                                </div>
                            </div>

                            <div className={colourSaved?'Main-option-colour1':'Main-option-colour2'}
                                onMouseMove={()=>setColourSaved(true)}
                                onMouseLeave={()=>setColourSaved(false)} 
                            >
                                <div className={'Main-option-profile'}>
                                    <div className={'Main-option-icon'}><StarOutlined /></div>
                                    <div className={'Main-option-text'}>{'Saved'}</div>
                                </div>
                            </div>

                            <div className={colourSetting?'Main-option-colour1':'Main-option-colour2'}
                                onMouseMove={()=>setColourSetting(true)}
                                onMouseLeave={()=>setColourSetting(false)} 
                            >
                                <div className={'Main-option-profile'}>
                                    <div className={'Main-option-icon'}><SettingOutlined /></div>
                                    <div className={'Main-option-text'}>{'Setting'}</div>
                                </div>
                            </div>

                            <div className={colourSwitch?'Main-option-colour1':'Main-option-colour2'}
                                onMouseMove={()=>setColourSwitch(true)}
                                onMouseLeave={()=>setColourSwitch(false)} 
                            >
                                <div className={'Main-option-profile'}>
                                    <div className={'Main-option-icon'}><UserSwitchOutlined /></div>
                                    <div className={'Main-option-text'}>{'Switch Accounts'}</div>
                                </div>
                            </div>

                            <div className={'Main-option-line'}></div>

                            <div className={colourLogout?'Main-option-colour1':'Main-option-colour2'}
                                onMouseMove={()=>setColourLogout(true)}
                                onMouseLeave={()=>setColourLogout(false)} 
                            >
                                <div className={'Main-option-profile'}>
                                    {/* <div className={'Main-option-ref'} ref={ref}><Link to="/">{'Log out'}</Link></div> */}
                                    <div className={'Main-option-icon'} onClick={()=>ref.current.click()}>{'Log out'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>

            <div className={'Profile-personal'}>
                <div className={'Profile-oneRow'}>
                    <img className={'Profile-mainAvatar'} src={Avatar}></img>

                    <div className={'Profile-userInfo'}>
                        <div className={'Profile-oneRow'}>
                            <div className={'Profile-userName'}>{'Allen'}</div>
                            <button className={'Profile-editButton'}>{'Edit Profile'}</button>
                            <div className={'Profile-setting'}><SettingOutlined /></div>
                        </div>
                        <div className={'Profile-oneRow'}>
                            <div className={'Profile-post-data'}>{'6'}</div>
                            <div className={'Profile-post-text'}>{'posts'}</div>

                            <div className={'Profile-follow-data'}>{'35'}</div>
                            <div className={'Profile-follow-text'}>{'followers'}</div>

                            <div className={'Profile-follow-data'}>{'20'}</div>
                            <div className={'Profile-follow-text'}>{'following'}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'Profile-line'}></div>
            <div className={'Profile-oneRow'}>
                <div className="Profile-firstBorder">
                    <div className={'Profile-firstIcon'}><TableOutlined /></div>
                    <div className={'Profile-firstText'}>{'POSTS'}</div>
                </div>
                <div className="Profile-border">
                    <div className={'Profile-Icon'}><PlayCircleOutlined /></div>
                    <div className={'Profile-postText'}>{'VIDEOS'}</div>
                </div>
                <div className="Profile-border">
                    <div className={'Profile-Icon'}><SaveOutlined /></div>
                    <div className={'Profile-postText'}>{'SAVED'}</div>
                </div>
                <div className="Profile-lastBorder">
                    <div className={'Profile-Icon'}><TagOutlined /></div>
                    <div className={'Profile-lastText'}>{'TAGGED'}</div>
                </div>
            </div>

            <div className="Profile-mainClass">
                <div className="Profile-class">
                    <img className={transparent?"Profile-onSiglePicture":"Profile-siglePicture"} src="Photo1"
                        onMouseMove={()=>setTransparent(true)}
                        onMouseLeave={()=>setTransparent(false)}
                    ></img>
                    <img className="Profile-siglePicture" src="Photo2"></img>
                    <img className="Profile-siglePicture" src="Photo3"></img>
                </div>
                <div className="Profile-class">
                    <img className="Profile-siglePicture" src="Photo1"></img>
                    <img className="Profile-siglePicture" src="Photo2"></img>
                    <img className="Profile-siglePicture" src="Photo3"></img>
                </div>
            </div>
        </div>
    )
}

export default Profile