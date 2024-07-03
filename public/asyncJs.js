// url: https://fakestoreapi.com/users
import axios from "axios";
function fetchData(){
  axios.get("https://fakestoreapi.com/users")
  .then((res) => console.log(res.data))
  .catch((err)=>console.log(err))
}
fetchData();

