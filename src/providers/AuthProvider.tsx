import React, { createContext, ReactNode, useContext, useState } from 'react'
import AuthService from '../services/authService'
import { User } from '../types/auth.type'
import io from 'socket.io-client'
import { API_URL } from '../config'
export const socket = io(API_URL, {
    withCredentials: true
})

export type Children = {
    children: ReactNode | ReactNode[]
}

const userDataPlaceholder = {
    id: 0,
    username: '',
    openDayId: 1,
    accountType: { id: 0, name: '' },
    pictureName: null,
    name: null,
    ManagedClassroom: null,
    Group: null
}

const LogInContext = createContext<Function>(() => {})
const LogOutContext = createContext<Function>(() => {})
const UserDataContext = createContext<User>(userDataPlaceholder)
const LoggedInContext = createContext(false)
const GetUserDataContext = createContext(async () => {})

export function useLogIn() {
    return useContext(LogInContext)
}

export function useLogOut() {
    return useContext(LogOutContext)
}

export function useUserData() {
    return useContext(UserDataContext)
}

export function useLoggedIn() {
    return useContext(LoggedInContext)
}

export function useGetUserData() {
    return useContext(GetUserDataContext)
}

export default function AuthProvider({ children }: Children) {
    const [userData, setUserData] = useState<User>(userDataPlaceholder)
    const [loggedIn, setLoggedIn] = useState(false)

    async function logIn(username: string, password: string) {
        const response = await AuthService.logIn(username, password).then(
            (response) => {
                return response
            }
        )

        if (response.error) {
            return response
        }

        await getUserData().then(() => {
            setLoggedIn(true)
        })

        return response
    }

    async function logOut() {
        return await AuthService.logOut().then((response) => {
            setLoggedIn(false)
            setTimeout(() => setUserData(userDataPlaceholder), 300)
            socket.removeAllListeners()
            return response
        })
    }

    async function getUserData() {
        return await AuthService.getUserData().then((response) => {
            setUserData(response.result)
            return response
        })
    }

    return (
        <LogInContext.Provider value={logIn}>
            <LogOutContext.Provider value={logOut}>
                <UserDataContext.Provider value={userData}>
                    <LoggedInContext.Provider value={loggedIn}>
                        <GetUserDataContext.Provider value={getUserData}>
                            {children}
                        </GetUserDataContext.Provider>
                    </LoggedInContext.Provider>
                </UserDataContext.Provider>
            </LogOutContext.Provider>
        </LogInContext.Provider>
    )
}
