export async function loginUser(creds) {
    const res = await fetch("https://fakestoreapi.com/auth/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    username: creds.username,
                    password: creds.password
                }
            )
        }
    )
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

// function validateForm(email, password) {
//     if (!email || !password) {
//         return false
//     }

//     // You can add more sophisticated validation logic here for email and password

//     return true
// }

// export { validateForm }