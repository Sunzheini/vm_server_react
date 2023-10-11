import {createContext, useContext, useState} from 'react';

export const SampleContext = createContext(
    {
        sample: 'default value',
    }
);
