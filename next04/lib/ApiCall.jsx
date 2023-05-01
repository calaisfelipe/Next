

export default async function ApiCall(obj){

    const response = await fetch('http://localhost:3000/api/echo')

    return response.json()

}