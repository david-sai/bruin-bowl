import { createContext } from 'react';


// sign in and sign up modal
export const ModalIsOpenContext = createContext(
    {
        context: false,
        setContext: () => {}
    }
);