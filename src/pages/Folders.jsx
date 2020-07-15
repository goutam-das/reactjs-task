import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Breadcrumb, Divider } from 'semantic-ui-react';
import { Folder, CreateNewFolder } from '../components';
import FolderContext from '../context/FolderContext'

const Folders = () => {
    const params = useParams();
    const { state, dispatch } = useContext(FolderContext);
    console.log({ state, params })

    const createFolder = name => {
        dispatch({ type: 'CREATE_FOLDER', name });
    }

    return (
        <Container>
            <Divider hidden />
            <Breadcrumb size="small">
                <Breadcrumb.Section active>Folders</Breadcrumb.Section>
            </Breadcrumb>
            <Divider />
            <section>
                <div className="folders-container">
                    {
                        Object.entries(state).map(([id, folder]) => <Folder key={id} id={id} name={folder.name} />)
                    }
                    <CreateNewFolder createFolder={createFolder} />
                </div>
            </section>
        </Container>
    )
}

export default Folders;