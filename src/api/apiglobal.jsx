const handleApi = async ({ search, setData }) => {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=24`)
        if (!response.ok) {
            throw new Error('Error')
        }
        const data = await response.json()
        setData(data.items || [])
    } catch (error) {
        console.error(`Error al obtener los datos: ${error}`)
        setData([])
    }
}

export default handleApi