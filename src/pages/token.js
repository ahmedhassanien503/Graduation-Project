import Cookies from 'universal-cookie';
import axios from 'axios';
const cookies = new Cookies();


const config = {
    headers: { Authorization: `Bearer ${cookies.get('UserToken')}` }
};






export default config ;