import { signInWithPopup } from 'firebase/auth';
import { auth, db, provider } from '../config/Firebase';
import '../styles/Login.css';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

const cookies = new Cookies();

export const Login = (props) => {

  const navigate = useNavigate();
  const usersRef = collection(db, 'users')

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const querySnapshot = await getDocs(query(usersRef, where("name", "==", auth.currentUser.displayName)));
      
      if (querySnapshot.empty) {
        await addDoc(usersRef, { name: auth.currentUser.displayName });
      }
  
      cookies.set('auth-token', result.user.refreshToken);
      props.setIsAuth(true);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div className="login">
      {!props.isAuth && <div className="login-inner">
        <p>Hey there, login below!!</p>
        <button onClick={signIn}>Login</button>
      </div>}
    </div>
  )
}