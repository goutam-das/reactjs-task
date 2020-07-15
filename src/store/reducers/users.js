import shortid from 'shortid';

const folders1 = {};
const subfolders1 = {};

subfolders1[shortid.generate()] = {
    name: 'My Sub Folder',
    subfolder: {}
}

folders1[shortid.generate()] = {
    name: 'My Folder',
    subfolder: subfolders1
}

folders1[shortid.generate()] = {
    name: 'My Document',
    subfolder: subfolders1
}


const folders2 = {};
const subfolders2 = {};

subfolders2[shortid.generate()] = {
    name: 'My Sub Folder',
    subfolder: {}
}


subfolders2[shortid.generate()] = {
    name: 'My Sub Folder 1',
    subfolder: {}
}

folders2[shortid.generate()] = {
    name: 'My Folder 1',
    subfolder: {}
}

folders2[shortid.generate()] = {
    name: 'My Folder 2',
    subfolder: subfolders2
}

folders2[shortid.generate()] = {
    name: 'My Folder 6',
    subfolder: {}
}

folders2[shortid.generate()] = {
    name: 'My Folder 4',
    subfolder: subfolders1
}

const INIT_STATE = [
    {
        name: 'Demo 1',
        email: 'demo1@gmail.com',
        password: 'demo1',
        folders: folders1
    },
    {
        name: 'Demo 2',
        email: 'demo2@gmail.com',
        password: 'demo2',
        folders: folders2
    }
]

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case "REGISTER":
            return [...state, action.newUser];
        default:
            return state;
    }
}