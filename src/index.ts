import axios from "axios";

const baseUrl = "http://localhost:3000";

axios.post(`${baseUrl}/users`, {
  name: "myName",
  age: 20
});

axios.get(`${baseUrl}/users/1`).then(res => {
  console.log(res);
});
