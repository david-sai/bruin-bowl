import { createContext } from 'react';

//Below is the contect to manage the visibility/content of components like sign in & sign up.
//It provides a string which will indicate which modal should be on display
export const ModalIsOpenContext = createContext(
    {
        context: "",
        setContext: () => {}
    }
);

//This creates context that manages the state of the current user. 
export const UserContext = createContext(
    {
        context: null, 
        setContext: () => {}
    }
);