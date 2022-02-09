import React, { useContext, useState, useEffect } from 'react';
import Editor from './Editor';
import { CodeContext } from '../context/CodeProvider';
import Quotes from "./Quotes";

const Output = () => {
    const [code, setCode] = useState('');
    const { html, css, js } = useContext(CodeContext);
    const src = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `
    useEffect(() => {
        setTimeout(() => {
            setCode(src);
        }, 1500)
    }, [html, css, js])

    return (
        <>
            <div className='output'>
                {
                    (!html && !css && !js) ? <Quotes /> :
                        <div style={{ height: "43vh" }}>
                            <iframe
                                srcDoc={code}
                                title='output'
                                sandbox='allow-scripts'
                                frameBorder="0"
                                width="100%"
                                height="100%"
                            />
                        </div>
                }
            </div>
        </>
    )
};

export default Output;
