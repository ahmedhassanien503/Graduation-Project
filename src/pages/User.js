import Cookies from 'universal-cookie';
const cookies = new Cookies();


const User = cookies.get("UserData");
export default User;