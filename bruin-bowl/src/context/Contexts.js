import { createContext } from 'react';




// sign in and sign up modal
// pass in a string to show at the top
export const ModalIsOpenContext = createContext(
    {
        context: "",
        setContext: () => {}
    }
);

// the signed in user
export const UserContext = createContext(
    {
        context: null,
        setContext: () => {}
    }
);