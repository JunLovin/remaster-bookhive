import App from "./App";
import ErrorDefault from "./error/errorDefault";

const routes = [
    {
        path: '',
        element: <App/>,
        errorElement: <ErrorDefault/>
    }
]

export default routes