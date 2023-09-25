import { useState } from 'react';
import LocalStorageService from '../../Services/LocalStorageSerivce';
import RegisterPage from '../RegisterPage';
import UserPage from '../UserPage';
import './app.css'




function App(){
  const storedData = LocalStorageService.getUserData()
  const [isRegistred, setIsRegistred] = useState(false)
  const [userData, setUserData] = useState(storedData)

  const handleRegistration = (uData) => {
    LocalStorageService.saveUserData(uData)
    setUserData(uData)
    setIsRegistred(true)
  }
    
  return(
    <div className='app'>
          {
            isRegistred ? 
            <UserPage userData={userData}/>:
            <RegisterPage handleRegistration={handleRegistration}/>
          }
      </div>
  )

}

 export default  App ;