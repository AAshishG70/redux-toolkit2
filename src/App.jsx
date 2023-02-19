import React from "react";
import { userSlice } from "./features/users/userSlice";
const App = () => {
  const users = userSlice();
  console.log(users);
  return <div>Hello</div>;
};

export default App;
