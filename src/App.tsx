import React from 'react'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import { useLoggedIn } from './providers/AuthProvider'
import MainScreen from './screens/MainScreen/MainScreen'

function App() {
    const loggedIn = useLoggedIn()
    return (
        <main>
            {loggedIn && <MainScreen />}
            {/*<MainScreen />*/}
            <LoginScreen />
        </main>
    )
}

export default App
