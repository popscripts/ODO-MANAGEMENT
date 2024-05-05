let API_URL = process.env.REACT_APP_API_URL || ''

const FetchClient = {
    async get(endpoint: string) {
        return await fetch(API_URL + endpoint, {
            method: 'GET',
            credentials: 'include'
        })
    },

    async post(endpoint: string, body: object) {
        return await fetch(API_URL + endpoint, {
            method: 'POST',
            body: JSON.stringify(body),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },

    async patch(endpoint: string, body: object) {
        return await fetch(API_URL + endpoint, {
            method: 'PATCH',
            body: JSON.stringify(body),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },

    async delete(endpoint: string, body: object) {
        return await fetch(API_URL + endpoint, {
            method: 'DELETE',
            body: JSON.stringify(body),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },

    async put(endpoint: string, body: object) {
        return await fetch(API_URL + endpoint, {
            method: 'PUT',
            body: JSON.stringify(body),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export default FetchClient
