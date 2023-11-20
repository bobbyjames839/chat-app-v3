import { signOut } from "firebase/auth";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { auth } from "../config/Firebase";

const cookies = new Cookies();

export const Profile = (props) => {

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    cookies.remove('auth-token');
    props.setIsAuth(false);
    navigate('/login');
  }

  const hideProfile = () => {
    const profile = document.getElementById('profile');
    profile.classList.add('profile-moved');

    setTimeout(() => {
      props.setProfile(false);
    }, 1000)
  }

  return (
    <div id="profile" className="profile">
      <i onClick={hideProfile} className="fa fa-times"></i>
      <div className="profile-inner">
        <img src={auth.currentUser.photoURL}/>
        <p>{auth.currentUser.displayName}</p>
      </div>
      <button className='logout' onClick={logout}>Logout</button>
    </div>
  )
}