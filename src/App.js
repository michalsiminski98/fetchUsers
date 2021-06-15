import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/")
      .then((response) => {
        console.log(response.data.data);
        setUsers(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <div className="App">{users.map((user) => user.first_name)}</div>;
}

export default App;
