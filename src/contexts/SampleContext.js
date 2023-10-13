import {createContext, useContext, useState} from 'react';

export const SampleContext = createContext(
    {
    }
);

export const authContext = createContext(
    {
        token: null,
        setToken: () => {},
    }
);

