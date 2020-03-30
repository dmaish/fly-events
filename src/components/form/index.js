import React from 'react';
import { useFormik } from 'formik';

import { yupEventObj } from './validation';
import eventsDummyData from './../../components/events-dummy-data';
import './index.scss';

const RegisterForm = (props) => {
    const { allEventsStateHandler } = props;
    var dialog = document.querySelector('dialog');

    const formik = useFormik({
            initialValues: {
            title: '',
            owner: '',
            date: '',
            start: '',
            end: '',
            location: '',
            photoUrl: '',
            },
            validationSchema: yupEventObj,
            onSubmit: values => {
                const {initialValues, title, owner, date, start, end, location, photoUrl} = values;
                console.log('formsub')
                alert(JSON.stringify(values, null, 2));
                const newEvent = {
                    initialValues,
                    title,
                    owner,
                    date,
                    start,
                    end,
                    location,
                    photoUrl
                }
                eventsDummyData.push(newEvent)
                allEventsStateHandler();
                dialog.close();
            },
        });

    return(
        <dialog class="mdl-dialog">
            <h6 class="mdl-dialog__title">Add New Event</h6>
            <div class="mdl-dialog__content"></div>
                    <form className="form" autoComplete="off" onSubmit={formik.handleSubmit}>

                            <div className="input-container">
                                <div className="input-label">
                                    <div className="input-label">
                                <span >title</span>
                                    {formik.touched.title && formik.errors.title ? 
                                        <span className="error-span">{formik.errors.title}</span>
                                    : null}
                                </div>
                                </div>
                                <input name="title" {...formik.getFieldProps('title')}>
                                </input>
                            </div>

                            <div className="input-container">
                                <div className="input-label">
                                    <span >owner</span>
                                    {formik.touched.owner && formik.errors.owner ? 
                                        <span className="error-span">{formik.errors.owner}</span>
                                    : null}
                                </div>
                                <input name="owner" {...formik.getFieldProps('owner')} > 
                                </input>
                            </div>
                            
                            <div className="input-container">
                                <div className="input-label">
                                    <span >description</span>
                                    {formik.touched.description && formik.errors.description ? 
                                        <span className="error-span">{formik.errors.description}</span>
                                    : null}
                                </div>
                                <input name="description" {...formik.getFieldProps('description')}>
                                </input>
                            </div>  

                            <div className="input-container">
                                <div className="input-label">
                                <span >date</span>
                                    {formik.touched.date && formik.errors.date ? 
                                        <span className="error-span">{formik.errors.date}</span>
                                    : null}
                                </div>
                                <input name="date" {...formik.getFieldProps('date')} >
                                </input>
                            </div>                 

                            <div className="input-container">
                                <div className="input-label">
                                <span >start</span>
                                    {formik.touched.start && formik.errors.start ? 
                                        <span className="error-span">{formik.errors.start}</span>
                                    : null}
                                </div>
                                <input name="start" {...formik.getFieldProps('start')}>
                                </input>
                            </div>

                            <div className="input-container">
                                <div className="input-label">
                                    <div className="input-label">
                                <span >end</span>
                                    {formik.touched.end && formik.errors.end ? 
                                        <span className="error-span">{formik.errors.end}</span>
                                    : null}
                                </div>
                                </div>
                                <input name="end" {...formik.getFieldProps('end')}>
                                </input>
                            </div>                

                            <div className="input-container">
                            <div className="input-label">
                                <div className="input-label">
                                <span >location</span>
                                    {formik.touched.location && formik.errors.location ? 
                                        <span className="error-span">{formik.errors.location}</span>
                                    : null}
                                </div>
                            </div>
                            <input name="location" {...formik.getFieldProps('location')}>
                            </input>
                        </div>    

                        <div className="input-container">
                            <div className="input-label">
                                <div className="input-label">
                                <span >photoUrl</span>
                                    {formik.touched.photoUrl && formik.errors.photoUrl ? 
                                        <span className="error-span">{formik.errors.photoUrl}</span>
                                    : null}
                                </div>
                            </div>
                            <input name="photoUrl" {...formik.getFieldProps('photoUrl')}>
                            </input>
                        </div>    
                        <div class="dialog-actions">
                            <button type="button" className="close" onClick={() => dialog.close()}>CANCEL</button>
                            <button type="submit" >ADD EVENT</button>
                        </div>
                    </form>
            
    </dialog>
    );
}

export default RegisterForm;