import { createContext, useState } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)
    // window.setCurrentUser = setCurrentUser
    // type this into the browser console to see the user logged in as in the navbar
    // setCurrentUser({
    //     firstName: "testing",
    //     lastName: "login"
    // })

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider