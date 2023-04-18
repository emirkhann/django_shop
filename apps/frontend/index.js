async function sendPostRequest(url, data){
    return await fetch(
        url, {
            method: 'POST',
            headers: {
                'Content-Type': 'applications/json'
            },
            body: JSON.stringify(data)

        }
    )
    .then(response => response.json())
    .catch((error) => {console.error(error)})
}

sendPostRequest(
    'http://127.0.0.1:8000/auth/users/activation/',
    {
        uid: "",
        token: ""
    }
)