import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
    console.log(users);
  };

  useEffect(() => {
    f();
  }, []);

  return <div className="App">{users}</div>;
}

export default App;
