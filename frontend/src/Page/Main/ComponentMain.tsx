import { useEffect, useState } from 'react';
import './Main.css'
import { message } from "antd";

import playbtn from '../../assets/icon/PlayButtonCircled.png';
import Homeicon from '../../assets/icon/Home.png';
import Notification from '../../assets/icon/Notification.png';
import People from '../../assets/icon/People.png';
import Play from '../../assets/iconbottonplay/Play.png'
import Pause from '../../assets/iconbottonplay/Pause.png'
import End from '../../assets/iconbottonplay/End.png'
import Rewind from '../../assets/iconbottonplay/Rewind.png'

//API
import { GetUserById } from '../../services/https';
import { UsersInterface } from '../../interfaces/UsersInterface';

export const ComponentMain: React.FC = () => {
    const Datatest = [
        { id: 1, name: 'Polyphia' }, { id: 2, name: 'Polyphia' }, { id: 3, name: 'Polyphia' }, { id: 4, name: 'Polyphia' }, { id: 5, name: 'Polyphia' }, { id: 6, name: 'Polyphia' }, { id: 7, name: 'Polyphia' }, { id: 8, name: 'Polyphia' },
    ];
    const DatatestPlaylist = [
        { id: 1, name: 'Polyphia' }, { id: 2, name: 'Polyphia' }, { id: 3, name: 'Polyphia' }, { id: 4, name: 'Polyphia' },
    ];
    const DatatestAllPlaylist = [
        { id: 1, name: 'Polyphia' }, { id: 2, name: 'Polyphia' }, { id: 3, name: 'Polyphia' }, { id: 4, name: 'Polyphia' }, { id: 5, name: 'Polyphia' }, { id: 6, name: 'Polyphia' }, { id: 7, name: 'Polyphia' },
    ];

    return (
        <>
            <div className='Maincom'>
                <div className='optionBtn'>
                    <span className='optionA' style={{ backgroundColor: "#ffffff" }}><a style={{ color: "#000" }} href="">All</a></span>
                    <span className='optionA' style={{ backgroundColor: "#494949" }}><a style={{ color: "#ffffff" }} href="">Music</a></span>
                    <span className='optionA' style={{ backgroundColor: "#494949" }}><a style={{ color: "#ffffff" }} href="">Podcasts</a></span>
                </div>
                <div className='topboxmain'>
                    {Datatest.map((music) => (
                        <>
                            <span className='boxMain' key={music.id}>
                                <img src="https://mir-s3-cdn-cf.behance.net/projects/404/b34ed9187254619.Y3JvcCwzOTk5LDMxMjgsMCw0MzU.jpg" alt="polyphia logo" />
                                <span className='playbtn'><img src={playbtn} alt="" /></span>
                                <p>{music.name}</p>
                            </span>
                        </>
                    ))}
                </div>
                <h1 className='texthead' style={{ fontSize: '28px', marginTop: '40px', marginLeft: '20px' }}>Your Playlist User name</h1>
                <div className='PlaylistMainUser'>
                    {DatatestPlaylist.map((Playlist) => (
                        <>
                            <span className='PlaylistMainUserCard' key={Playlist.id}>
                                <img src="https://imgc.allpostersimages.com/img/posters/2025-attack-on-titan-wall-calendar_u-L-FAEUWZ0.jpg" alt="polyphia logo" />
                                <span className='PlaylistMainplay'><img src={playbtn} alt="" /></span>
                                <div className='DetailsplaylistUserMain'>Name Your PlayList</div>
                                <div className='DetailsplaylistUserMain'>Details playlist User Main</div>
                            </span>
                        </>
                    ))}
                </div>

                <h1 className='texthead' style={{ fontSize: '28px', marginTop: '40px', marginLeft: '20px', color: '#ffffff' }}>Recommended Stations</h1>
                <div className='PlaylistMainUser'>
                    {DatatestAllPlaylist.map((Playlist) => (
                        <>
                            <span className='PlaylistMainUserCard' key={Playlist.id}>
                                <img src="https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg" alt="polyphia logo" />
                                <span className='PlaylistMainplay'><img src={playbtn} alt="" /></span>
                                <div className='DetailsplaylistUserMain'>Name Your PlayList</div>
                                <div className='DetailsplaylistUserMain'>Details playlist User Main</div>
                            </span>
                        </>
                    ))}
                </div>


            </div>
        </>
    );
};


export const ComponentMainNavbar: React.FC = () => {
    const userIdstr = localStorage.getItem("id");
    const [user, setUser] = useState<UsersInterface | null>(null);
    const [isUserPop, setUserPop] = useState(false);

    const PopUpuser = () => {
        setUserPop(!isUserPop);
    };

    useEffect(() => {
        if (userIdstr) {
            fetchUserData(userIdstr);
        } else {
            message.error("User ID is not found in localStorage!");
        }
    }, [userIdstr]);

    const fetchUserData = async (userIdstr: string) => {
        try {
            const res = await GetUserById(userIdstr);
            if (res.status === 200) {
                setUser(res.data);
            } else {
                message.error("User information is not found!");
            }
        } catch (error) {
            message.error("Fetching User information is error!");
        }
    };

    //Log out
    const Logout = () => {

        localStorage.clear();
    
        message.success("Logout successful");
    
        setTimeout(() => {
    
          location.href = "/";
    
        }, 1000);
    
      };
    return (
        <>
            <nav className='MainNav'>
                Spotify
                <img className='Homeicon' src={Homeicon} alt="" />
                <input className='inputMain' type="text" />
                <a className='Uservisible'>
                    <img onClick={PopUpuser} style={{ width: '24px', position: 'relative', borderRadius: '20px' }} src={user?.UserPic} alt="" />
                    <span className='UserMain'>{user?.FirstName}</span>
                    {isUserPop && (
                        <span className='menuuserpopup'>Menu
                            <div>Account</div>
                            <div>Profile</div>
                            <div>Upgrade to Premium</div>
                            <div>Settings</div>
                            <div style={{backgroundColor: '#000', width: '100%',margin: '10px 0px',height: '1px',color: '#313131'}}>.</div>
                            <div onClick={Logout}>Log out</div>
                        </span>
                    )}
                    
                </a>
                <a className='Peoplevisible' href="#"><img src={People} alt="" /><span className='People'>Friend Activity</span></a>
                <a className='Notificationvisible' href="#"><img src={Notification} alt="" /><span className='Notification'>What's New</span></a>
                <a style={{ backgroundColor: '#ffffff', padding: '5px 10px', color: '#000', borderRadius: '20px',fontSize: '14px' ,fontFamily: 'sans-serif'}} href="#">Explore Premium</a>
            </nav>
        </>
    );
};


export const ComponentMainSidebar: React.FC = () => {
    const DatatestAllPlaylist = [
        { id: 1, pic: 'https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg', name: 'Namehistory' }, { id: 2, pic: 'https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg', name: 'Namehistory' }, { id: 3, pic: 'https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg', name: 'Namehistory' }, { id: 4, pic: 'https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg', name: 'Namehistory' },
        { id: 5, pic: 'https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg', name: 'Namehistory' }, { id: 6, pic: 'https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg', name: 'Namehistory' }, { id: 7, pic: 'https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg', name: 'Namehistory' },]

    return (
        <>
            <nav className='MainSidebar'>
                <li className='onesubsidebar'>
                    <a href="#">📦</a><span className='textside'>Menu</span>
                </li>
                <li className='twosubsidebar'>
                    <a href="#">🤍</a><span className='textside'>MusicYouLike</span>
                </li>
                {DatatestAllPlaylist.map((Playlist) => (
                    <li key={Playlist.id} className='liMain'>
                        <a href="#"><img src={Playlist.pic} alt="" /></a><span className='textside'>{Playlist.name}</span>
                    </li>
                ))}
            </nav>
        </>
    );
};


export const BottonMain: React.FC = () => {
    return (
        <>
            <div className='bottoncontanner'>
                <div className='groupbotton'><img src="https://imgc.allpostersimages.com/img/posters/2025-attack-on-titan-wall-calendar_u-L-FAEUWZ0.jpg" alt="" /><span>Name <div style={{color: '#ffffff',marginLeft: '100px'}}>Lorem ipsum dolor sit amet.</div></span></div>
                <div></div>
                <div className='ControllerPlay'>
                    <div className='Playbtn'>
                        <span><img src={Rewind} alt="" /></span>
                        <span><img src={Play} alt="" /></span>
                        <span><img src={End} alt="" /></span>
                    </div>
                    <div className='VolumeControlbtn'>
                        <span style={{margin: '5px'}}>00:00</span>
                        <span style={{margin: '0px'}}><input
                            style={{color: '#000'}}
                            id="volume-control"
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            />
                        </span>
                        <span style={{margin: '5px'}}>03:59</span>
                    </div>
                </div>
                <div>2</div>
            </div>
        </>
    );
};

