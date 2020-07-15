import shortid from 'shortid';

const folders = {};
folders[shortid.generate()] = {
    name: 'My Folder',
    subfolders: {}
}

folders[shortid.generate()] = {
    name: 'My Folder 1',
    subfolders: {}
}

folders[shortid.generate()] = {
    name: 'My Folder 2',
    subfolders: {}
}

folders[shortid.generate()] = {
    name: 'My Folder 6',
    subfolders: {}
}

folders[shortid.generate()] = {
    name: 'My Folder 4',
    subfolders: {}
}

const INIT_STATE = {
    loggedIn: false,
    profile: null
}

export default (state = INIT_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case "LOGGED_IN":
            return Object.assign({}, state, { loggedIn: true, profile: action.user });
        case "LOG_OUT":
            return Object.assign({}, state, { loggedIn: false, profile: null });
        default:
            return state;
    }
}