import React, { useContext } from 'react';
import Editor from './Editor';
import { CodeContext } from '../context/CodeProvider';

const Codearea = () => {
    const { html, setHtml, css, setCss, js, setJs } = useContext(CodeContext);
    return (
        <>
            <div className='codearea'>
                <div className='codearea__container'>
                    <Editor
                        lang="HTML"
                        icon="/"
                        color="#FF3C41"
                        mode="xml"
                        value={html}
                        onChange={setHtml}
                    />
                    <Editor
                        lang="CSS"
                        icon="*"
                        color="#0EBEFF"
                        mode="css"
                        value={css}
                        onChange={setCss}
                    />
                    <Editor
                        lang="JS"
                        icon="( )"
                        color="#FCD000"
                        mode="javascript"
                        value={js}
                        onChange={setJs}
                    />
                </div>
            </div>
        </>
    );
};

export default Codearea;
