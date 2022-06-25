import {Routes, Route, useRoutes} from "react-router-dom"
import { UserProvider, ReducerProvider } from "./Context"
import Header from "./component/Header"
import routes from "./route/Routes";

function App() {

  return (
    <UserProvider>
       <ReducerProvider>
         <Header />
             {useRoutes(routes)}
        </ReducerProvider>
      </UserProvider>
  );
}

export default App;
