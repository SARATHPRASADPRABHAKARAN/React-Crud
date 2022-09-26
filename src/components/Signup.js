import React from 'react'
import "./sign.css"
import axios from 'axios'


const Signup = () => {
  return (
<div>
<section className="area-sign-in">
  <div className="sign-in" style={{ height: 500 }}>
    <form onSubmit={(e) => dosignup(e)}>
      <input
        type="text"
        placeholder="Enter username"
        id="username"
        name="username"
        required=""
      />
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        id="email"
        required=""
      />
      <input
        type="number"
        placeholder="Enter Email"
        name=""Phone
        id="Phone"
        required=""
      />
      <input
        type="text"
        placeholder="Enter Email"
        name="password"
        id="password"
        required=""
      />
      
      
      <br />
      <button type="submit" >
          Signup
        </button>
      <p>
        Create A New Account? <a href="signup.html">Click Here</a>
      </p>
      <hr className="new4" />
    </form>
  </div>
</section>

</div>
  
  )
}
function dosignup (e){

   e.preventDefault();
    
  let signupData={
     
    username:document.getElementById('username').value ,
    email:document.getElementById('email').value ,
    Phone: document.getElementById('Phone').value,
    password:document.getElementById('password').value

 }
 axios.post('http://localhost:9000/signup',signupData)
      .then((response)=> {
        console.log("test")
        alert(response.data.message)
      })

}
export default Signup