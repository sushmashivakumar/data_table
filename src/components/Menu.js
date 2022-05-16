import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signOut} from '../features/loggedIn'

function Menu({loggedIn}) {
  let navigate = useNavigate();
  const dispatch = useDispatch()
 
  const ActionButton = () => {
    const logout = () => {
      dispatch(signOut());
      navigate('/');
    }
    return (
      <>
      {
        loggedIn ? 
        <Button label="Logout" onClick={logout} />
        :
        <>
            <Button
            label="Sign Up"
            style={{ "marginRight": "10px" }}
            onClick={() => navigate("signup")}
          />
          <Button label="Login" onClick={() => navigate("login")} />
      
        </>
      }
      </>
    );
  };

  const Start = () => {
    return (
      <Button
            label="Home"
            style={{ "marginRight": "10px" }}
            onClick={() => navigate("/")}
          />
    )
  }
  return <Menubar start={Start} end={<ActionButton />} />;
}

export default Menu;
