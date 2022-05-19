import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signOut} from '../features/loggedIn'
import { InputText } from 'primereact/inputtext';
import './home.css'


function Menu({loggedIn}) {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const items = [
   

    {
        label: 'Welcome',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-user-plus',

            },
            {
                label: 'Logout',
                icon: 'pi pi-fw pi-user-minus',

            },
            
        ],
        
    },
    
];
// const end = <InputText placeholder="Search" type="text" />;
  const end = () => {
    const logout = () => {
      dispatch(signOut());
      navigate('/');
    }
    // const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    
    return (
      <>
      {
        loggedIn ? 
        <Button label="Logout" onClick={logout} className="p-button-rounded p-button-outlined"  style={{ "marginRight": "10px", color:"white" }}/>
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
      <div>
      <Button
            label="Home"
            className="p-button-rounded p-button-outlined"
            style={{ "marginRight": "10px" , color:"white"}}
            onClick={() => navigate("/")}
          />
         
        </div>
    )
  }
  return   <Menubar className = "menunav" model={items} start={Start} end={end} />
  // return <Menubar start={Start} end={<ActionButton />} />;
}

export default Menu;
