const URL_API = 'https://jsonplaceholder.typicode.com/posts'

export const getPosts = async () => {
  try {
    const response = await fetch(URL_API)
    if (!response.ok) {
      throw new Error('Error en la solicitud')
    }

    const data = await response.json()
    if (!Array.isArray(data)) {
      throw new Error('Los datos no estan en el formato esperado')
    }

    return data
  } catch (error) {
    throw new Error('Ha ocurrido un error:' + error.message)    
  }
}