import App from "./App";
import Searching from '@components/Searching'
import ErrorDefault from "./error/errorDefault";

const routes = [
    {
        path: '',
        element: <App/>,
        errorElement: <ErrorDefault/>,
        children: [
            {
                // INFO: Defino una ruta dinámica para que cambie cada vez que el usuario busca un libro.
                path: '/:book',
                element: <Searching/>,
            }
        ]
    }
]

export default routes