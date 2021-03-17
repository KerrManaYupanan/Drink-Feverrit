import './App.css';
import Axios from 'axios';
import { useState, usestate } from 'react';
function App() {
  const [userList, setUserList] = useState([])

  const getUser = () => {
    Axios.get('http://localhost:3001/users').then((res) => {
      setUserList(res.data);
    });
  }

  return (
    <div className="App">
      <div className="display container">
        <h1>CCP Feverrit Drink</h1>
        <div className="information">
          <form action="">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Name : </label>
              <input className="form-control" type="text" placeholder="Enter Name" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="age">Age : </label>
              <input className="form-control" type="number" placeholder="Enter Age" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="position">Position : </label>
              <input className="form-control" type="text" placeholder="Enter Position" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="feverrit-drink">Feverrit Drink : </label>
              <input className="form-control" type="text" placeholder="Enter Feverrit Drink" />
            </div>
            <button className="btn btn-success form-control mb-3">Add Feverrit Drink</button>
          </form>
        </div>
        <hr />
        <div className="feverritdrink">
          <button className="btn btn-primary form-control" onClick={getUser}>Show Feverrit Drink</button>
          <br/><br/>
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
      </div>

    </div>
  );
}

export default App;
