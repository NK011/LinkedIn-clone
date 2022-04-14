import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './Components/Feed/Feed';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect( () => {
    auth.onAuthStateChanged( userAuth => {
      if(userAuth){
        dispatch(login(
          {
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoUrl
          }
        ))
      }else{
        dispatch(logout())
      }
    } )
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
        <Sidebar />
        <Feed />
        {/* widgets */}
      </div>
      ) }
    </div>
  );
}

export default App;
