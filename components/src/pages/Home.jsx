import { React } from "react";
import Axios from "axios";
const ACCESS_TOKEN = "ACCESS_TOKEN";
const Home = () => {
  const token = localStorage.getItem(ACCESS_TOKEN); // get token from localstorage
  const headers = {
    headers: { Authorization: "Bearer " + token },
  };
  Axios.get("http://localhost:8080/api/v1/users/users", {})
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => console.log(err));

  return <div>Hello world</div>;
};

export default Home;
