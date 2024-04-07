import { FetchClientType } from '../types/fetchClient.type'
import FetchClient from '../utils/FetchClient'

class AuthService {
    private httpClient: FetchClientType = FetchClient

    async logIn(username: string, password: string) {
        try {
            const response = await this.httpClient.post('/api/auth/login', {
                username,
                password
            })
            return response.json()
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async logOut() {
        try {
            const response = await this.httpClient.get('/api/auth/logout')
            return response.json()
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async getUserData() {
        try {
            const response = await this.httpClient.get('/api/auth/user')
            return response.json()
        } catch (e) {
            console.error(e)
            throw e
        }
    }
}

export default new AuthService()
