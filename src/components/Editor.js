import React from 'react';
import { AiFillSetting } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Controlled } from "react-codemirror2";
import "codemirror/theme/ayu-dark.css";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

const Editor = ({ lang, icon, color, mode, value, onChange }) => {
    const handleChange = (editor, data, value) => {
        onChange(value);
    }
    return (
        <>
            <div className='editor'>
                <div className='editor__inner'>
                    <div className='editor__inner__heading'>
                        <span style={{
                            display: "flex",
                            placeContent: "center",
                            padding: "0.2rem 0.5rem",
                            fontSize: "1rem",
                            color: "black",
                            marginRight: "0.4rem",
                            borderRadius: "0.4rem",
                            background: color
                        }}>{icon}</span>
                        {lang}
                    </div>
                    <div className='editor__inner__icons'>
                        <span><AiFillSetting /></span>
                        <span><MdKeyboardArrowDown /></span>
                    </div>
                </div>
                <Controlled
                value = {value}
                onBeforeChange = {handleChange}
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: mode,
                        lineNumbers: true,
                        theme: "ayu-dark"
                    }} />
            </div>
        </>
    );
};

export default Editor;
