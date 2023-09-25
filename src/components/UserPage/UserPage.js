
import './user-page.css'

function UserPage ( {userData}) {
  
    const { username, email, password} = userData;


    return (
      <div className="user-page-wrapper">
        <h1>Welcome, <span>{ username }</span>!</h1>
        <h4>Personal info:</h4>
        <div>
          Email: <span>{ email }</span>
        </div>
        <div>
          Password: <span>{ password }</span>
        </div>
      </div>
    )
  }
   export default UserPage
