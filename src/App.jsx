import { Fragment } from "react";

function App() {
  let users = [
    { name: "john", surname: "Due", age: 23 },
    { name: "john2", surname: "Due2", age: 25 },
  ];
  return (
    <Fragment>
      <div className="grid grid-colors-3 gap-3">
        {users.map((user) => {
          return (
            <div className="border">
              <h2>Name:{user.name}</h2>
              <h2>Surname:{user.surname}</h2>
              <h2>Age:{user.age}</h2>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default App;
