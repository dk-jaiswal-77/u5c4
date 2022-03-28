import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { userLogin } from "../../Redux/Login/action";
import { useDispatch } from "react-redux";

export const LoginSignUp = () => {

  const [signUp, setSignUp] = useState({
    name : "",
    password : "",
    location : "",
    interests : [],
    image : "",
    subscribed : []
  });

  function handleSignUPChange(e){
    if(e.target.className === "technology" || e.target.className === "food" || e.target.className === "movies" || e.target.className === "culture" || e.target.className === "art" || e.target.className === "drama")
    {
      // console.log(e.target.checked)
      if(e.target.checked === true)
      {
        setSignUp({
          ...signUp, interests : [...signUp.interests,e.target.className]
        });
      }
      else
      {
        let interests = signUp.interests.filter((interest) => {
          return (interest !== e.target.className);
        });
        setSignUp({
          ...signUp, interests : interests
        })
      }
    }
    else
    {
      setSignUp({
        ...signUp, [e.target.className] : e.target.value
      })
    }
  }

  async function handleSignUp (){
    try{
      await fetch("http://localhost:8080/users", {
        method : "POST",
        body : JSON.stringify(signUp),
        headers : {
          "Content-Type" : "application/json"
        }
      });

      setSignUp({
        name : "",
        password : "",
        location : "",
        interests : [],
        image : "",
        subscribed : []
      });

    }catch(error){
      console.log(error);
    }
  }

  // ---------------------------------------------------------------------------------->

  const [login, setLogin] = useState({
    name : "",
    password : ""
  });

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  function handleLoginChange(e){
    setLogin({
      ...login, [e.target.className] : e.target.value
    });
  }

  async function handleLoginSubmit(){
    try{
      let res = await fetch("http://localhost:8080/users");
      let users = await res.json();
      let isRegistered = false;
      let current_user;

      for(let i = 0; i < users.length; i++)
      {
        if((users[i].name === login.name) && (users[i].password === login.password))
        {
          isRegistered = true;
          current_user = users[i];
          break;
        }
      } 

      if(isRegistered)
      {
        let userLoginDetails = current_user;
        localStorage.setItem("userLoginDetails", JSON.stringify(userLoginDetails));
  
        dispatch(userLogin(userLoginDetails));
  
        Navigate("/")
      }

    }catch(error){
      console.log(error);
    }
  }


  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={(e) => { 
        e.preventDefault();
        handleSignUp();
      }}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name" 
          value = {signUp.name}
          onChange={(event) => {
            handleSignUPChange(event);
           }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password" 
          value = {signUp.password}
          onChange={(event) => { 
            handleSignUPChange(event);
          }}
          required
        />
        <br />
        <select value={signUp.location} className="location" onChange={(event) => { 
          handleSignUPChange(event);
        }}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          onChange={(event) => { 
            handleSignUPChange(event);
          }}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" onChange={(event) => { 
          handleSignUPChange(event);
        }} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" onChange={(event) => {
          handleSignUPChange(event);
         }} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" onChange={(event) => {
          handleSignUPChange(event);
         }} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" onChange={(event) => {
          handleSignUPChange(event);
         }} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" onChange={(event) => { 
          handleSignUPChange(event);
        }} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image" 
          value = {signUp.image}
          onChange={(event) => { 
            handleSignUPChange(event);
          }}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>


      <form className="login" onSubmit={(e) => { 
        e.preventDefault();
        handleLoginSubmit();
      }}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => { 
            handleLoginChange(event);
          }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => { 
            handleLoginChange(event);
          }}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
