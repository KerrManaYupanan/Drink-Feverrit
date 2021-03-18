import './App.css';
import Axios from 'axios';
import { useState } from 'react';
function App() {
  const [userList, setUserList] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState("");
  const [feverritDrink, setFeverritDrink] = useState("");

  const getUser = () => {
    Axios.get('http://localhost:3001/users').then((res) => {
      setUserList(res.data);
    });
  }

  const insertFeverritDrink = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      position: position,
      feverritDrink: feverritDrink
    }).then(() => {
      setUserList([
        ...userList,
        {
          name: name,
          age: age,
          position: position,
          feverritDrink: feverritDrink
        },
      ])
    })
  }

  return (
    <div className="App">
      <div className="display container">
        <h1>CCP Feverrit Drink</h1>
        <div className="information">
          <form action="">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Name : </label>
              <input className="form-control" type="text" placeholder="Enter Name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="age">Age : </label>
              <input className="form-control" type="number" placeholder="Enter Age"
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="position">Position : </label>
              <input className="form-control" type="text" placeholder="Enter Position"
                onChange={(event) => { setPosition(event.target.value) }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="feverritdrink">Feverrit Drink : </label>
              <input className="form-control" type="text" placeholder="Enter Feverrit Drink"
                onChange={(event) => { setFeverritDrink(event.target.value) }}
              />
            </div>
            <button className="btn btn-success form-control mb-3" onClick={insertFeverritDrink}>Add Feverrit Drink</button>
          </form>
        </div>
        <hr />
        <div className="feverritdrink">
          <button className="btn btn-primary form-control" onClick={getUser}>Show Feverrit Drink</button>
          <br /><br />
          {userList.map((val, key) => {
            return (
              <div className="users card  mb-2">
                <div className="card-body text-left">
                  <p className="card-text">
                    Name : {val.name}
                  </p>
                  <p className="card-text">
                    Age : {val.age}
                  </p>
                  <p className="card-text">
                    Position : {val.position}
                  </p>
                  <p className="card-text">
                    Feverrit Drink : {val.feverritDrink}
                  </p>
                </div>
              </div>
            )
          })}

        </div>
        <br/>
      </div>

    </div>
  );
}

export default App;
