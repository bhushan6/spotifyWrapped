// Client ID 2f787d8106b84f5e98a38ad79e054168

// MmY3ODdkODEwNmI4NGY1ZTk4YTM4YWQ3OWUwNTQxNjg6Y2YwOTY3MTUzMzZjNGU3NjlmYjY0MzExYzVmOGY2MjE=

// curl -H "Authorization: Basic " -d grant_type=authorization_code -d code=MQCbtKe...44KN -d redirect_uri=https%3A%2F%2Fwww.foo.com%2Fauth https://accounts.spotify.com/api/token

const authrise_uri = "https://accounts.spotify.com/authorize"
const client_id = process.env.REACT_APP_CLIENT_ID
console.log(process.env.REACT_APP_CLIENT_ID)
const redirect_uri = "http://localhost:3000/"
const encoded_uri = encodeURI(redirect_uri)
const scope = [
    "user-top-read",
    "user-read-email",
    "user-library-read"
]

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial

    }, {})
}

export const login_uri = `${authrise_uri}?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope.join('%20')}&show_dialog=true`
