import React, {useState,useRef} from "react"
import './Main.css'
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
import { EllipsisOutlined } from '@ant-design/icons';
import { HeartTwoTone } from '@ant-design/icons';
import { MessageOutlined } from '@ant-design/icons';
import { SmileOutlined } from '@ant-design/icons';

import Dialog from '@material-ui/core/Dialog';

const Main=()=>{
    const ref = useRef(null);

    const [option,setoption] = useState(false);
    const [input,setinput] = useState(false);

    const [colourProfile, setColourProfile] = useState(false);
    const [colourSaved, setColourSaved] = useState(false);
    const [colourSetting, setColourSetting] = useState(false);
    const [colourSwitch, setColourSwitch] = useState(false);
    const [colourLogout, setColourLogout] = useState(false);

    const [userProfile1,setUserProfile1] = useState(false);
    const [userProfile2,setUserProfile2] = useState(false);
    const [userProfile3,setUserProfile3] = useState(false);
    const [userProfile4,setUserProfile4] = useState(false);
    const [userProfile5,setUserProfile5] = useState(false);

    
    const [open, setOpen] = React.useState(false);
      
    const handleClickOpen = () => {
      setOpen(true);
    };
      
    const handleClose = () => {
      setOpen(false);
    };

    return(
        <div className={'Main-container'}>
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

            <div className={'Main-mainPage'}>
                <div className={'Main-leftPage'}>
                    <div className={'Main-story'}>
                        <div className={'Main-story-user'}>
                            <img className={'Main-story-img'} src={Avatar2}></img>
                            <div className={'Main-story-text'}>{'Alisa'}</div>
                        </div>

                        <div className={'Main-story-user'}>
                            <img className={'Main-story-img'} src={Avatar3}></img>
                            <div className={'Main-story-text'}>{'Jack'}</div>
                        </div>

                        <div className={'Main-story-user'}>
                            <img className={'Main-story-img'} src={Avatar4}></img>
                            <div className={'Main-story-text'}>{'Jane'}</div>
                        </div>

                        <div className={'Main-story-user'}>
                            <img className={'Main-story-img'} src={Avatar5}></img>
                            <div className={'Main-story-text'}>{'Linda'}</div>
                        </div>

                        <div className={'Main-story-user'}>
                            <img className={'Main-story-img'} src={Avatar2}></img>
                            <div className={'Main-story-text'}>{'Kate'}</div>
                        </div>

                        <div className={'Main-story-user'}>
                            <img className={'Main-story-img'} src={Avatar3}></img>
                            <div className={'Main-story-text'}>{'Bob'}</div>
                        </div>
                    </div>
                    <div className={'Main-moment'}>
                        <div className={'Main-moment-page'}>
                            <div className={'Main-moment-header'}>
                                <img className={'Main-moment-icon'} src={Avatar5}></img>
                                <div className={'Main-moment-userName'}>{'Linda'}</div>
                                
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <div className={'Main-dialog'}>
                                        <div className={'alert-dialog-redText'}>Report</div>
                                        <div className={'alert-dialog-option-line'}></div>
                                        <div className={'alert-dialog-redText'}>Unfollow</div>
                                        <div className={'alert-dialog-option-line'}></div>
                                        <div className={'alert-dialog-blackText'}>Go to post</div>
                                        <div className={'alert-dialog-option-line'}></div>
                                        <div className={'alert-dialog-blackText'}>Share  to...</div>
                                        <div className={'alert-dialog-option-line'}></div>
                                        <div className={'alert-dialog-blackText'}>Copy Link</div>
                                        <div className={'alert-dialog-option-line'}></div>
                                        <div className={'alert-dialog-blackText'}>Embed</div>
                                        <div className={'alert-dialog-option-line'}></div>
                                        <div className={'alert-dialog-blackText'}>Cancel</div>
                                        <div className={'alert-dialog-option-line'}></div>
                                    </div>
                                </Dialog>
                                <div className={'Main-moment-ellipsis'} onClick={()=>setOpen(true)}>
                                    <EllipsisOutlined />
                                </div>

                            </div>
                            <img className={'Main-moment-mainImg'} src={Photo6}></img>
                            <div className={'Main-oneRow'}>
                                <div className={'Main-moment-interaction'}><HeartOutlined /></div>
                                <div className={'Main-moment-interaction'}><MessageOutlined /></div>
                                <div className={'Main-moment-interaction'}><SendOutlined /></div>
                                <div className={'Main-moment-saveInteraction'}><StarOutlined /></div>
                            </div>
                            <div className={'Main-oneRow'}>
                                <img className={'Main-moment-smallAvatar'} src={Avatar2}></img>
                                <div className={'Main-moment-like'}>{'Liked by Alisa and 4 others'}</div>
                            </div>
                            <div className={'Main-oneRow'}>
                                <div className={'Main-moment-postUser'}>{'Linda'}</div>
                                <div className={'Main-moment-text'}>{'Have a lovely day'}</div>
                            </div>
                            <div className={'Main-moment-postTime'}>{'3 DAYS AGO'}</div>
                            <div className={'Main-moment-addComment'}>
                            <div className={'Main-moment-smile'}><SmileOutlined /></div>
                            <input 
                                type='text' 
                                placeholder={'Add a comment...'} 
                                className={'Main-moment-inputComment'}
                            >
                            </input>
                            <div className={'Main-userInformation-fllow'}>{'Post'}</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={'Main-rightPage'}>
                    <div className={'Main-userInformation'}>
                        <img className={'Main-userAvatar-nondisplay'} ref={ref} src={Avatar}><Link to="/profile"></Link></img>
                        <img className={'Main-userAvatar'} src={Avatar} onClick={()=>ref.current.click()}></img>
                        <div className={'Main-userInformation-text'}>{'Alex'}</div>
                        <div className={'Main-userInformation-switch'}>{'Switch'}</div>
                    </div>

                    <div className={'Main-suggestion'}>
                        <div className={'Main-oneRow'}>
                            <div  className={'Main-suggestion-text'}>{'Suggestions For You'}</div>
                            <div  className={'Main-suggestion-seeall'}>{'See All'}</div>
                        </div>

                        {/* user 1 */}
                        <div className={'Main-oneRow'}
                            onMouseMove={()=>setUserProfile1(true)}
                        >
                            <img className={'Main-suggestion-userAvatar'} src={Avatar}></img>
                            <div className={'Main-suggestion-user'}>
                                <div className={'Main-suggestion-userName'}>{'Ian'}</div>
                                <div className={'Main-suggestion-userState'}>{'New to Instagram'}</div>
                            </div>
                            <div className={'Main-userInformation-fllow'}>{'Follow'}</div>
                        </div>

                        <div className={userProfile1?'Main-user1-container':'Main-user1-noncontainer'}
                            onMouseLeave={()=>setUserProfile1(false)}
                        >
                            <div className={userProfile1?'Main-suggestion-moreProfile1':'Main-oneRow'}>
                                <div className={'Main-profileDetails'}>
                                    <img className={'Main-profileDetails-img'} src={Avatar}></img>
                                    
                                    <div className={'Main-profileDetails-userName'}>
                                        <div className={'Main-profileDetails-name'}>{'Ian'}</div>
                                        <div className={'Main-profileDetails-fullName'}>{'Ian Kim'}</div>
                                        <div className={'Main-profileDetails-userState'}>{'Followed by Bob'}</div>
                                        
                                    </div>

                                    <div className={'Main-profileDetails-summary'}>
                                        <div className={'Main-profileDetails-data'}>
                                            <div className={'Main-profileDetails-data'}>{'6'}</div>
                                            <div className={'Main-profileDetails-text'}>{'posts'}</div>
                                        </div>
                                        <div className={'Main-profileDetails-data'}>
                                            <div className={'Main-profileDetails-data'}>{'35'}</div>
                                            <div className={'Main-profileDetails-text'}>{'followers'}</div>
                                        </div>
                                        <div className={'Main-profileDetails-data'}>
                                            <div className={'Main-profileDetails-data'}>{'20'}</div>
                                            <div className={'Main-profileDetails-text'}>{'following'}</div>
                                        </div>
                                    </div>

                                    <div className={'Main-oneRow'}>
                                        <img className={'Main-profile-img'} src={Photo1}></img>
                                        <img className={'Main-profile-img'} src={Photo1}></img>
                                        <img className={'Main-profile-img'} src={Photo1}></img>
                                    </div>

                                    <button className={'Main-profileDetails-button'}>{'Follow'}</button>
                                </div>
                            </div>
                        </div>

                        {/* user 2 */}
                        <div className={'Main-oneRow'}
                            onMouseMove={()=>setUserProfile2(true)}
                        >
                            <img className={'Main-suggestion-userAvatar'} src={Avatar4}></img>
                            <div className={'Main-suggestion-user'}>
                                <div className={'Main-suggestion-userName'}>{'Annie'}</div>
                                <div className={'Main-suggestion-userState'}>{'New to Instagram'}</div>
                            </div>
                            <div className={'Main-userInformation-fllow'}>{'Follow'}</div>
                        </div>

                        <div className={userProfile2?'Main-user2-container':'Main-user2-noncontainer'}
                            onMouseLeave={()=>setUserProfile2(false)}
                        >
                            <div className={userProfile2?'Main-suggestion-moreProfile2':'Main-oneRow'}>
                                <div className={'Main-profileDetails'}>
                                    <img className={'Main-profileDetails-img'} src={Avatar4}></img>
                                    
                                    <div className={'Main-profileDetails-userName'}>
                                        <div className={'Main-profileDetails-name'}>{'Annie'}</div>
                                        <div className={'Main-profileDetails-fullName'}>{'Annie Wang'}</div>
                                        <div className={'Main-profileDetails-userState'}>{'Followed by Alisa'}</div>
                                        
                                    </div>

                                    <div className={'Main-profileDetails-summary'}>
                                        <div className={'Main-profileDetails-data'}>
                                            <div className={'Main-profileDetails-data'}>{'1'}</div>
                                            <div className={'Main-profileDetails-text'}>{'posts'}</div>
                                        </div>
                                        <div className={'Main-profileDetails-data'}>
                                            <div className={'Main-profileDetails-data'}>{'10'}</div>
                                            <div className={'Main-profileDetails-text'}>{'followers'}</div>
                                        </div>
                                        <div className={'Main-profileDetails-data'}>
                                            <div className={'Main-profileDetails-data'}>{'4'}</div>
                                            <div className={'Main-profileDetails-text'}>{'following'}</div>
                                        </div>
                                    </div>

                                    <div className={'Main-oneRow'}>
                                        <img className={'Main-profile-img'} src={Photo2}></img>
                                    </div>

                                    <button className={'Main-profileDetails-button'}>{'Follow'}</button>
                                </div>
                            </div>
                        </div>

                        {/* user 3 */}
                        <div className={'Main-oneRow'}
                            onMouseMove={()=>setUserProfile3(true)}
                        >
                            <img className={'Main-suggestion-userAvatar'} src={Avatar2}></img>
                            <div className={'Main-suggestion-user'}>
                                <div className={'Main-suggestion-userName'}>{'Amber'}</div>
                                <div className={'Main-suggestion-userState'}>{'Followed by Linda + 3 more'}</div>
                            </div>
                            <div className={'Main-userInformation-fllow'}>{'Follow'}</div>
                        </div>

                        <div className={userProfile3?'Main-user3-container':'Main-user3-noncontainer'}
                            onMouseLeave={()=>setUserProfile3(false)}
                        >
                            <div className={userProfile3?'Main-suggestion-moreProfile3':'Main-oneRow'}>
                                <div className={'Main-profileDetails'}>
                                    <img className={'Main-profileDetails-img'} src={Avatar2}></img>
                                    
                                    <div className={'Main-profileDetails-userName'}>
                                        <div className={'Main-profileDetails-name'}>{'Amber'}</div>
                                        <div className={'Main-profileDetails-fullName'}>{'Amber Valleta'}</div>
                                        <div className={'Main-profileDetails-userState'}>{'Followed by Kate'}</div>
                                        
                                    </div>

                                    <div className={'Main-profileDetails-summary'}>
                                        <div className={'Main-profileDetails-data'}>
                                            <div className={'Main-profileDetails-data'}>{'5'}</div>
                                            <div className={'Main-profileDetails-text'}>{'posts'}</div>
                                        </div>
                                        <div className={'Main-profileDetails-data'}>
                                            <div className={'Main-profileDetails-data'}>{'56'}</div>
                                            <div className={'Main-profileDetails-text'}>{'followers'}</div>
                                        </div>
                                        <div className={'Main-profileDetails-data'}>
                                            <div className={'Main-profileDetails-data'}>{'28'}</div>
                                            <div className={'Main-profileDetails-text'}>{'following'}</div>
                                        </div>
                                    </div>

                                    <div className={'Main-oneRow'}>
                                        <img className={'Main-profile-img'} src={Photo3}></img>
                                        <img className={'Main-profile-img'} src={Photo3}></img>
                                        <img className={'Main-profile-img'} src={Photo3}></img>
                                    </div>

                                    <button className={'Main-profileDetails-button'}>{'Follow'}</button>
                                </div>
                            </div>
                        </div>

                        {/* user 4 */}
                        <div className={'Main-oneRow'}
                            onMouseMove={()=>setUserProfile4(true)}
                        >
                            <img className={'Main-suggestion-userAvatar'} src={Avatar5}></img>
                            <div className={'Main-suggestion-user'}>
                                <div className={'Main-suggestion-userName'}>{'Zoe'}</div>
                                <div className={'Main-suggestion-userState'}>{'Followed by Jane'}</div>
                            </div>
                            <div className={'Main-userInformation-fllow'}>{'Follow'}</div>
                        </div>

                        <div className={userProfile4?'Main-user4-container':'Main-user4-noncontainer'}
                            onMouseLeave={()=>setUserProfile4(false)}
                        >
                            <div className={userProfile4?'Main-suggestion-moreProfile4':'Main-oneRow'}>
                                <div className={'Main-profileDetails'}>
                                    <img className={'Main-profileDetails-img'} src={Avatar5}></img>
                                    
                                    <div className={'Main-profileDetails-userName'}>
                                        <div className={'Main-profileDetails-name'}>{'Zoe'}</div>
                                        <div className={'Main-profileDetails-fullName'}>{'Zoe Bell'}</div>
                                        <div className={'Main-profileDetails-userState'}>{'Followed by Jane'}</div>
                                        
                                    </div>

                                    <div className={'Main-profileDetails-summary'}>
                                        <div className={'Main-profileDetails-data'}>
                                            <div className={'Main-profileDetails-data'}>{'2'}</div>
                                            <div className={'Main-profileDetails-text'}>{'posts'}</div>
                                        </div>
                                        <div className={'Main-profileDetails-data'}>
                                            <div className={'Main-profileDetails-data'}>{'16'}</div>
                                            <div className={'Main-profileDetails-text'}>{'followers'}</div>
                                        </div>
                                        <div className={'Main-profileDetails-data'}>
                                            <div className={'Main-profileDetails-data'}>{'10'}</div>
                                            <div className={'Main-profileDetails-text'}>{'following'}</div>
                                        </div>
                                    </div>

                                    <div className={'Main-oneRow'}>
                                        <img className={'Main-profile-img'} src={Photo4}></img>
                                        <img className={'Main-profile-img'} src={Photo4}></img>
                                    </div>

                                    <button className={'Main-profileDetails-button'}>{'Follow'}</button>
                                </div>
                            </div>
                        </div>

                        {/* user 5 */}
                        <div className={'Main-oneRow'}
                            onMouseMove={()=>setUserProfile5(true)}
                        >
                            <img className={'Main-suggestion-userAvatar'} src={Avatar6}></img>
                            <div className={'Main-suggestion-user'}>
                                <div className={'Main-suggestion-userName'}>{'April'}</div>
                                <div className={'Main-suggestion-userState'}>{'Suggested for you'}</div>
                            </div>
                            <div className={'Main-userInformation-fllow'}>{'Follow'}</div>
                        </div>

                        <div className={userProfile5?'Main-user5-container':'Main-user5-noncontainer'}
                            onMouseLeave={()=>setUserProfile5(false)}
                        >
                            <div className={userProfile5?'Main-suggestion-moreProfile5':'Main-oneRow'}>
                                <div className={'Main-profileDetails'}>
                                    <img className={'Main-profileDetails-img'} src={Avatar5}></img>
                                    
                                    <div className={'Main-profileDetails-userName'}>
                                        <div className={'Main-profileDetails-name'}>{'April'}</div>
                                        <div className={'Main-profileDetails-fullName'}>{'April Daisy'}</div>
                                        <div className={'Main-profileDetails-userState'}>{'Followed by Linda'}</div>
                                        
                                    </div>

                                    <div className={'Main-profileDetails-summary'}>
                                        <div className={'Main-profileDetails-data'}>
                                            <div className={'Main-profileDetails-data'}>{'5'}</div>
                                            <div className={'Main-profileDetails-text'}>{'posts'}</div>
                                        </div>
                                        <div className={'Main-profileDetails-data'}>
                                            <div className={'Main-profileDetails-data'}>{'22'}</div>
                                            <div className={'Main-profileDetails-text'}>{'followers'}</div>
                                        </div>
                                        <div className={'Main-profileDetails-data'}>
                                            <div className={'Main-profileDetails-data'}>{'16'}</div>
                                            <div className={'Main-profileDetails-text'}>{'following'}</div>
                                        </div>
                                    </div>

                                    <div className={'Main-oneRow'}>
                                        <img className={'Main-profile-img'} src={Photo5}></img>
                                        <img className={'Main-profile-img'} src={Photo5}></img>
                                        <img className={'Main-profile-img'} src={Photo5}></img>
                                    </div>

                                    <button className={'Main-profileDetails-button'}>{'Follow'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Main