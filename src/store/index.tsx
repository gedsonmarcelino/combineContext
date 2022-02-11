import React from 'react';

import { UserContextProvider } from './UserContext';
import { PostContextProvider } from './PostContext';

import { combineComponents } from './combineComponents';

const providers = [UserContextProvider, PostContextProvider];

export const AppContextProvider = combineComponents(...providers);
