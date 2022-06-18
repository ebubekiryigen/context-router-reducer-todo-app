import Login from "../pages/Login";
import Home from "../pages/Home";
import TodoApp from "../pages/todo/TodoApp"
import PageNotFound from "../pages/PageNotFound";

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/todo',
        element: <TodoApp />
    },
    {
        path: '/user/:name',
        element: <TodoApp />
    },
    {
        path: '*',
        element: <PageNotFound />
    }

]    
export default routes