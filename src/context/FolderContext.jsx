import React, { createContext, useReducer } from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
const FolderContext = createContext();

const createNewFolder = (name) => {
    const newFolder = {};
    newFolder[shortid.generate()] = {
        name,
        subfolder: {}
    }
    return newFolder;
}

const folderReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_FOLDERS':
            return action.folders;
        case 'CREATE_FOLDER':
            return Object.assign({}, state, createNewFolder(action.name));
        case 'CREATE_SUB_FOLDER':
            state[action.parentFolderId].subfolder = Object.assign({}, state[action.parentFolderId].subfolder, createNewFolder(action.name));
            console.log(state);
            return Object.assign({}, state);
        default:
            return state;
    }
}

export const FolderContextProvider = (props) => {
    const user = useSelector(state => state.user);
    console.log({ user })
    const initState = user.profile && user.profile.folders ? user.profile.folders : {};
    console.log({ initState });
    const [state, dispatch] = useReducer(folderReducer, initState);
    console.log('FolderContextProvider')
    return (
        <FolderContext.Provider value={{ state, dispatch }}>
            {props.children}
        </FolderContext.Provider>
    )
}

export default FolderContext;