import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Breadcrumb, Divider } from 'semantic-ui-react';
import { Folder, CreateNewFolder } from '../components';
import FolderContext from '../context/FolderContext'

const SubFolders = () => {
    const { id } = useParams();
    const { state, dispatch } = useContext(FolderContext);

    const createFolder = name => {
        dispatch({ type: 'CREATE_SUB_FOLDER', name, parentFolderId: id });
    }

    console.log('Sub Folder');
    console.log({ state, id })
    const folder = state[id] ? state[id] : {}
    console.log(folder);
    return (
        <Container>
            <Divider hidden />
            <Breadcrumb size="small">
                <Breadcrumb.Section link as={Link} to="/folders">Folders</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right chevron' />
                <Breadcrumb.Section active>{folder.name}</Breadcrumb.Section>
            </Breadcrumb>
            <Divider />
            <section>
                <div className="folders-container">
                    {
                        folder.subfolder && Object.entries(folder.subfolder).map(([id, folder]) => <Folder key={id} id={id} name={folder.name} />)
                    }
                    <CreateNewFolder createFolder={createFolder} />
                </div>
            </section>
        </Container>
    )
}

export default SubFolders;