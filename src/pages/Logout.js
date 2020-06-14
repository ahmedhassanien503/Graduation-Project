import React from 'react';
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Logout extends React.Component
{   
    componentDidMount (){ 
        cookies.remove('UserData',{path:'/'})
        //UserToken
        cookies.remove('UserToken',{path:'/'})
        window.location.reload(false);
    };

    
     render()
     {
        return(
            <Redirect to='/login' />
         ) 
    }
}

export default Logout;