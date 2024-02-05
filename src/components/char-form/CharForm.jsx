import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';


import './CharForm.css';
import Button from '../button/Button';

const CharForm = () => {

    const [searchChar, setSearchChar] = useState("")

    console.log(searchChar)

    return (
        <div className='char-form'>
            <Formik
                initialValues={{
                    name: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(4, "Minimum 4 symbols")
                })}
                onSubmit={values => {
                    setSearchChar(values.name)
                }}>
                <Form className='char-form-block'>
                    <h5 className='char-form-title'>Or find a character by name:</h5>

                    <div className='char-form-items'>
                        <div >
                            <Field
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter name"
                            />
                            <div className='error-message'><ErrorMessage name="name" /></div>
                        </div>
                        <Button
                            type={"submit"}
                            text={"FIND"}
                            color={"rgb(159, 0, 19)"}
                        />
                    </div>
                </Form>
            </Formik>

        </div>
    );
};

export default CharForm;