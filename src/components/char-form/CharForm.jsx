import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage as FormikErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import './CharForm.css';
import Button from '../button/Button';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

const CharForm = () => {
    const { getCharacterByName, loading, error, clearError } = useMarvelService()
    const [char, setChar] = useState(null)

    const onCharLoaded = (char) => {
        setChar(char)
    }

    const updateChar = (name) => {
        if (!name) return
        clearError()

        getCharacterByName(name)
            .then(onCharLoaded)
    }

    const errorMessage = error ? <div><ErrorMessage /></div> : null
    const result = !char ? null : char.length > 0 ?
        <div className='char-form-link'>
            {`There is! Visit ${char[0].name} page?`}
            <Link to={`/${char[0].id}`}>
                <Button text={"TO PAGE"} />
            </Link>
        </div> :
        <p className='char-form-error'>The character was not found. Check the name and try again</p>

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
                    updateChar(values.name)
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
                            <div className='error-message'><FormikErrorMessage name="name" /></div>
                        </div>
                        <Button
                            type={"submit"}
                            text={"FIND"}
                            color={"rgb(159, 0, 19)"}
                        />
                    </div>
                </Form>
            </Formik>
            {errorMessage}
            {result}
        </div>
    );
};

export default CharForm;