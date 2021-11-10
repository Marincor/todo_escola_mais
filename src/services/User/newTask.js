const url = 'https://jsonplaceholder.typicode.com/posts';


export default async function createTask(title, body, id) {


    return await fetch(url, {

        method: "POST",
        body: JSON.stringify ({
            title: title,
            body: body,
            userId: id,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(res => res.json());

}