import Cookies from 'universal-cookie';
import axios from 'axios';


const cookies = new Cookies();

const UserData = (role) => {

    
    //return user data
    const config = {
        headers: { Authorization: `Bearer ${role}` }
    };
    axios.get('http://localhost:8000/api/user', config).then(res => {


        //save cookie
        cookies.set('UserData', res.data, { path: '/', expires: new Date(Date.now() + 2592000) });
        const current_user = cookies.get('UserData');
        console.log(current_user);
        window.location.reload(false);
    }).catch(error => {
        console.log(error.response)
    });
}




export default UserData;