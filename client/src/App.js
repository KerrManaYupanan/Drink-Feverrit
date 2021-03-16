import './App.css';
function App() {
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
          <button className="btn btn-primary form-control">Show Feverrit Drink</button>
        </div>
      </div>

    </div>
  );
}

export default App;
