import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // console.log(user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile =(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            return unsubscribe;
        }
    }, [])

    const value = {
        auth,
        user,
        createUser,
        signUser,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;