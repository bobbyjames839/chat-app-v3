import '../styles/Home-in.css';
import '../styles/Home-profile.css';
import { Dropdown } from '../components/Dropdown';
import { Profile } from '../components/Profile';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Home = (props) => {

  const [profile, setProfile] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='home'>
        
      <div className='profile-outer'>
       <i onClick={() => setProfile(true)}  className='fa fa-chevron-down'></i>

       {profile && <Profile setProfile={setProfile}setIsAuth={props.setIsAuth}/>}
      </div>

      {props.isAuth && <><div className='chat-left'>

        <Dropdown/>

      </div>

      <div className='chat-right'>

      </div></>}
    </div>
  )
}