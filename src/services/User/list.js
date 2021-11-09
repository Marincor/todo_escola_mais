
const url = "https://jsonplaceholder.typicode.com/todos"

export default async function getListUser() {

    return await fetch(url).then(req => req.json())
    .catch(error => console.log(error))

}