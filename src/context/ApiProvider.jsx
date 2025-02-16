import { createContext, useContext, useState } from 'react'

const ApiContext = createContext()

export const ApiProvider = ({ children }) => {
    const [data, setData] = useState([])

    return (
        <ApiContext.Provider value={{ data, setData }}>
            {children}
        </ApiContext.Provider>
    )
}

export const useApi = () => {
    return useContext(ApiContext)
}