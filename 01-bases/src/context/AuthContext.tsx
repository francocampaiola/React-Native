import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

enum AuthStatus {
    'checking' = 'checking',
    'authenticated' = 'authenticated',
    'unathenticated' = 'unathenticated'
}

interface AuthState {
    status: AuthStatus
    token?: string
    user?: User
    isChecking: boolean
    isAuthenticated: boolean
    loginWithEmailPassword: (email: string, password: string) => void
    logout: () => void
}

interface User {
    name: string
    email: string
}

export const AuthContext = createContext({} as AuthState)

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [status, setStatus] = useState<AuthStatus>(AuthStatus.checking)
    const [user, setUser] = useState<User>()

    useEffect(() => {
        setTimeout(() => {
            setStatus(AuthStatus["unathenticated"])
        }, 1500)
    }, [])

    const loginWithEmailPassword = (email: string, password: string) => {
        console.log(password)
        setUser({
            name: 'Franco Campaiola',
            email: email
        })
        setStatus(AuthStatus["authenticated"])
    }

    const logout = () => {
        setUser(undefined)
        setStatus(AuthStatus["unathenticated"])
    }

    return (
        <AuthContext.Provider value={{
            status: status,
            user: user,
            isChecking: status === AuthStatus.checking,
            isAuthenticated: status === AuthStatus.authenticated,
            loginWithEmailPassword,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}