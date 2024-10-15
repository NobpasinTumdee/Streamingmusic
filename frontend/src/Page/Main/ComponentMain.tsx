import React from 'react';
import './Main.css'
import playbtn from '../../assets/icon/PlayButtonCircled.png';
export const ComponentMain: React.FC = () => {
    const Datatest = [
        {id: 1,name: 'Polyphia'},{id: 2,name: 'Polyphia'},{id: 3,name: 'Polyphia'},{id: 4,name: 'Polyphia'},{id: 5,name: 'Polyphia'},{id: 6,name: 'Polyphia'},{id: 7,name: 'Polyphia'},{id: 8,name: 'Polyphia'},
    ];
    const DatatestPlaylist = [
        {id: 1,name: 'Polyphia'},{id: 2,name: 'Polyphia'},{id: 3,name: 'Polyphia'},{id: 4,name: 'Polyphia'},
    ];
    const DatatestAllPlaylist = [
        {id: 1,name: 'Polyphia'},{id: 2,name: 'Polyphia'},{id: 3,name: 'Polyphia'},{id: 4,name: 'Polyphia'},{id: 5,name: 'Polyphia'},{id: 6,name: 'Polyphia'},{id: 7,name: 'Polyphia'},
    ];

    return(
        <>
            <div className='Maincom'>
                <div className='optionBtn'>
                    <span className='optionA' style={{backgroundColor: "#ffffff"}}><a style={{color: "#000"}} href="">All</a></span>
                    <span className='optionA' style={{backgroundColor: "#494949"}}><a style={{color: "#ffffff"}} href="">Music</a></span>
                    <span className='optionA' style={{backgroundColor: "#494949"}}><a style={{color: "#ffffff"}} href="">Podcasts</a></span>
                </div>
                <div className='topboxmain'>
                    {Datatest.map((music) => (
                        <> 
                                <span className='boxMain' key={music.id}>
                                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/b34ed9187254619.Y3JvcCwzOTk5LDMxMjgsMCw0MzU.jpg" alt="polyphia logo" />
                                    <span className='playbtn'><img  src={playbtn} alt="" /></span>
                                    <p>{music.name}</p>
                                </span>
                        </>
                    ))}
                </div>
                    <h1 className='texthead' style={{fontSize: '28px', marginTop: '40px' , marginLeft: '20px' }}>Your Playlist User name</h1>
                <div className='PlaylistMainUser'>
                    {DatatestPlaylist.map((Playlist) => (
                        <>
                            <span className='PlaylistMainUserCard' key={Playlist.id}>
                                <img src="https://imgc.allpostersimages.com/img/posters/2025-attack-on-titan-wall-calendar_u-L-FAEUWZ0.jpg" alt="polyphia logo" />
                                <div className='DetailsplaylistUserMain'>Name Your PlayList</div>
                                <div className='DetailsplaylistUserMain'>Details playlist User Main</div>
                            </span>
                        </>
                    ))}
                </div>
                
                <h1 className='texthead' style={{fontSize: '28px', marginTop: '40px' , marginLeft: '20px' , color: '#ffffff'}}>Recommended Stations</h1>
                <div className='PlaylistMainUser'>
                    {DatatestAllPlaylist.map((Playlist) => (
                        <>
                            <span className='PlaylistMainUserCard' key={Playlist.id}>
                                <img src="https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg" alt="polyphia logo" />
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

    return(
        <>
            <nav className='MainNav'>
                <h3>Spotify</h3>
                <input className='inputMain' type="text" />
                <a href="#">
                    <img style={{width: '25px',position: 'relative' ,borderRadius: '20px'}} src="https://scontent.fnak3-1.fna.fbcdn.net/v/t39.30808-6/297412273_1103712770544237_4663638775877889323_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE2U1GBz9RwMkB8LO3gyGOyD0lIw0Dk2O8PSUjDQOTY74Wmvi770I9kFs5DstlhbH4Vm26pI0JryreKrawczeu_&_nc_ohc=E7MH_4RERmIQ7kNvgGvMDrp&_nc_zt=23&_nc_ht=scontent.fnak3-1.fna&_nc_gid=AvOKn40H_Q-pf3cQzuNR5yn&oh=00_AYBGCLpie-KMyHekzarDAtb7Wb8_fZwJ3jvuw-gFHlvYBQ&oe=67140AEF" alt="" />
                </a>
                <a href="#">Setting</a>
                <a href="#">Music</a>
            </nav>
        </>
    );
};


export const ComponentMainSidebar: React.FC = () => {
    const DatatestAllPlaylist = [
        {id: 1,pic: 'https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg',name: 'Namehistory'},{id: 2,pic: 'https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg',name: 'Namehistory'},{id: 3,pic: 'https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg',name: 'Namehistory'},{id: 4,pic: 'https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg',name: 'Namehistory'},
        {id: 5,pic: 'https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg',name: 'Namehistory'},{id: 6,pic: 'https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg',name: 'Namehistory'},{id: 7,pic: 'https://t1.blockdit.com/photos/2022/08/62f25bb0c9d3634cdc91b487_800x0xcover_q1cOvEdo.jpg',name: 'Namehistory'},]
    
    return(
        <>
            <nav className='MainSidebar'>
                <li className='onesubsidebar'>
                    <a  href="#">📦</a><span className='textside'>Menu</span>
                </li>
                <li className='twosubsidebar'>
                    <a  href="#">🤍</a><span className='textside'>MusicYouLike</span>
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

