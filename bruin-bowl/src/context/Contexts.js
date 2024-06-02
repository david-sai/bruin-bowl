import { createContext } from 'react';


// sign in and sign up modal
export const ModalIsOpenContext = createContext(
    {
        context: false,
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