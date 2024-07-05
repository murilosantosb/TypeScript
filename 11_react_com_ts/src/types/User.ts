export interface User {
    name: string,
    email: string,
    password: string
    setName: (name: string) => void,
    setEmail: (email: string) => void,
    setPassword: (password: string) => void

    user: {
        name?: string,
        email?: string,
        password?: string
    }

    setUser: (user: Object) => void
}