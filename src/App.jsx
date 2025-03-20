// import { Fragment } from "react";

// function App() {
//   let users = [
//     { name: "john", surname: "Due", age: 23 },
//     { name: "john2", surname: "Due2", age: 25 },
//   ];
//   return (
//     <Fragment>
//       <div className="grid grid-colors-3 gap-3">
//         {users.map((user) => {
//           return (
//             <div className="border">
//               <h2>Name:{user.name}</h2>
//               <h2>Surname:{user.surname}</h2>
//               <h2>Age:{user.age}</h2>
//             </div>
//           );
//         })}
//       </div>
//     </Fragment>
//   );
// }

// export default App;

// import { Fragment } from "react"

// export default function UserCards() {
//   const users = [
//     {
//       name: "Leanne Graham",
//       username: "Bret",
//       email: "Sincere@april.biz",
//       address: {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: "92998-3874",
//       },
//       phone: "1-770-736-8031 x56442",
//       company: {
//         name: "Romaguera-Crona",
//         catchPhrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets",
//       },
//     },
//     {
//       name: "Ervin Howell",
//       username: "Antonette",
//       email: "Shanna@melissa.tv",
//       address: {
//         street: "Victor Plains",
//         suite: "Suite 879",
//         city: "Wisokyburgh",
//         zipcode: "90566-7771",
//       },
//       phone: "010-692-6593 x09125",
//       company: {
//         name: "Deckow-Crist",
//         catchPhrase: "Proactive didactic contingency",
//         bs: "synergize scalable supply-chains",
//       },
//     },
//     {
//       name: "Clementine Bauch",
//       username: "Samantha",
//       email: "Nathan@yesenia.net",
//       address: {
//         street: "Douglas Extension",
//         suite: "Suite 847",
//         city: "McKenziehaven",
//         zipcode: "59590-4157",
//       },
//       phone: "1-463-123-4447",
//       company: {
//         name: "Romaguera-Jacobson",
//         catchPhrase: "Face to face bifurcated interface",
//         bs: "e-enable strategic applications",
//       },
//     },
//     {
//       name: "Patricia Lebsack",
//       username: "Karianne",
//       email: "Julianne.OConner@kory.org",
//       address: {
//         street: "Hoeger Mall",
//         suite: "Apt. 692",
//         city: "South Elvis",
//         zipcode: "53919-4257",
//       },
//       phone: "493-170-9623 x156",
//       company: {
//         name: "Robel-Corkery",
//         catchPhrase: "Multi-tiered zero tolerance productivity",
//         bs: "transition cutting-edge web services",
//       },
//     },
//     {
//       name: "Chelsey Dietrich",
//       username: "Kamren",
//       email: "Lucio_Hettinger@annie.ca",
//       address: {
//         street: "Skiles Walks",
//         suite: "Suite 351",
//         city: "Roscoeview",
//         zipcode: "33263",
//       },
//       phone: "(254)954-1289",
//       company: {
//         name: "Keebler LLC",
//         catchPhrase: "User-centric fault-tolerant solution",
//         bs: "revolutionize end-to-end systems",
//       },
//     },
//     {
//       name: "Mrs. Dennis Schulist",
//       username: "Leopoldo_Corkery",
//       email: "Karley_Dach@jasper.info",
//       address: {
//         street: "Norberto Crossing",
//         suite: "Apt. 950",
//         city: "South Christy",
//         zipcode: "23505-1337",
//       },
//       phone: "1-477-935-8478 x6430",
//       company: {
//         name: "Considine-Lockman",
//         catchPhrase: "Synchronised bottom-line interface",
//         bs: "e-enable innovative applications",
//       },
//     },
//     {
//       name: "Kurtis Weissnat",
//       username: "Elwyn.Skiles",
//       email: "Telly.Hoeger@billy.biz",
//       address: {
//         street: "Rex Trail",
//         suite: "Suite 280",
//         city: "Howemouth",
//         zipcode: "58804-1099",
//       },
//       phone: "210.067.6132",
//       company: {
//         name: "Johns Group",
//         catchPhrase: "Configurable multimedia task-force",
//         bs: "generate enterprise e-tailers",
//       },
//     },
//   ]

//   return (
//     <Fragment>
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-center mb-8">User Directory</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {users.map((user, index) => {
//             return (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 flex items-center justify-center">
//                   <img
//                     src={`https://avatars.dicebear.com/api/initials/${user.name
//                       .split(" ")
//                       .map((n) => n[0])
//                       .join("")}.svg`}
//                     alt={user.name}
//                     className="h-24 w-24 rounded-full border-4 border-white object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h2 className="text-xl font-bold mb-2">{user.name}</h2>
//                   <p className="text-gray-600 mb-1">@{user.username}</p>
//                   <div className="flex items-center mb-3">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-gray-500 mr-1"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                     <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline text-sm">
//                       {user.email}
//                     </a>
//                   </div>
//                   <div className="flex items-center mb-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-gray-500 mr-1"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       />
//                     </svg>
//                     <span className="text-gray-700 text-sm">{user.phone}</span>
//                   </div>
//                   <div className="border-t border-gray-200 pt-4">
//                     <h3 className="font-semibold text-gray-800 mb-2">Company</h3>
//                     <p className="text-gray-700 font-medium">{user.company.name}</p>
//                     <p className="text-gray-600 text-sm italic mt-1">"{user.company.catchPhrase}"</p>
//                   </div>
//                   <div className="mt-4 border-t border-gray-200 pt-4">
//                     <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
//                     <p className="text-gray-700 text-sm">
//                       {user.address.street}, {user.address.suite}
//                       <br />
//                       {user.address.city}, {user.address.zipcode}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </Fragment>
//   )
// }

// import React, { Fragment, useState } from "react";

// function App() {
//   let [count, setCount] = useState(0);
//   function minus() {
//     return --count;
//   }
//   return (
//     <Fragment>
//       <button className="border" onClick={minus}>
//         -
//       </button>
//       <span>{count}</span>
//       <button className="border" onClick={() => setCount(++count)}>
//         +
//       </button>
//     </Fragment>
//   );
// }

// export default App;

// import React, { Fragment, useEffect, useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => setTodos(data));
//   }, []);
//   console.log(todos);
//   return (
//     <Fragment>
//       {todos.map((todo) => {
//         return (
//           <>
//             <h2 className="border">{todo.title}</h2>
//           </>
//         );
//       })}
//     </Fragment>
//   );
// }

// export default App;

import { Fragment } from "react";

function SignUp() {
  return (
    <Fragment>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Sign Up
          </h2>

          <p className="text-center text-gray-600 mb-6">
            It is our great pleasure to have you on board!
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                name="role"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default SignUp;
