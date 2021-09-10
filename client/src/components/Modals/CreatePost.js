import React, { useState, useEffect } from 'react';
import './CreatePost.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { Select } from '@material-ui/core';
import Quill from 'quill'
import { useStyles } from './utils'


const CreatePost = ({ handleClose, display, handleSave }) => {
    // const formRef = React.useRef();
    const [postInformation, setValues] = useState({});
    const classes = useStyles();

    const handleChange = (prop) => (event) => {
        console.log('on change')
        setValues({ ...postInformation, [prop]: event.target.value });

    };

    const publishPost = (e) => {
        // console.log(window.getQuill().getLines())
        const newPost = [
            postInformation.title,
            postInformation.subTitle,
            new Date(),
            document.getElementsByClassName('ql-editor')[0].innerHTML
        ]


        handleSave(newPost)
        handleClose()
        //earse the inputs
    }


    const onLoad = () => {
        const quill = new Quill(document.getElementById('editor-container'), {
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                    ['blockquote', 'code-block'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    // [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
                    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
                    [{ 'direction': 'rtl' }],                         // text direction
                    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                    [{ 'font': [] }],
                    [{ 'align': [] }],
                ]
            },
            placeholder: 'הכנס טקסט',
            theme: 'snow'
        });
        quill.format('align', 'right');
        //debugger
        window.getQuill = () => quill;

    }
    useEffect(onLoad, [])


    /**************************************************************** */
    let inDisplay;
    display ? inDisplay = 'block' : inDisplay = 'none';

    return (
        <modal className="popup-box" style={{ display: inDisplay }}>
            <div className="container" style={{ marginTop: "20px" }}>
                <div className="main-body">
                    <div className="row" style={{ display: "flex" }}>
                        {/* closeIcon */}
                        <div className="col-lg-3">
                            <div className="card" style={{ height: "600px" }}>
                                <div className="card-body">
                                    <span className="close-icon" onClick={handleClose}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="/assets/images/msg.png" alt="Admin" class="rounded-circle p-1" width="110" style={{ backgroundColor: "rgba(59, 182, 177,0.09)" }} />
                                        <div className="mt-3">
                                            <h4>פוסט חדש</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-9" dir="rtl" >
                            <div className="card" style={{height: "600px" }}>
                                <div className="card-body row mb-3" dir="rtl">
                                    {/* <form ref={formRef}> */}
                                    <TextField fullWidth
                                        label="כותרת"
                                        id="titleId"
                                        className={clsx(classes.margin)}
                                        onChange={handleChange('title')}
                                        value={postInformation.title}
                                    />
                                    <TextField fullWidth
                                        label=" כותרת משנית"
                                        id="subTitleId"
                                        className={clsx(classes.margin)}
                                        onChange={handleChange('subTitle')}
                                        value={postInformation.subTitle}
                                    />
                                    {/* </form> */}

                                    <div style={{ width: '807px' }}>
                                        <div >
                                            <label for="about">טקסט</label>
                                            <input name="about" type="hidden" />
                                            <div style={{ height: '230px' }} id="editor-container" />
                                        </div>
                                    </div>
                                </div>


                                <div style={{ display: 'flex', width: '100%', 'justifyContent': 'center', 'alignItems': 'center', height: '148px' }} >
                                    <Input type="button" className="btn btn-primary px-4" value="פרסם" style={{ background: "#3bb6b1", fontWeight: 'bold', width: "400px" }} onClick={publishPost} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </modal >
    )
}





export default CreatePost;