import React from 'react';
import { Formik, Form, Field } from "formik";
import { TextField, FormGroup, TextareaAutosize } from "@material-ui/core";

function ReviewForm(props) {

    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("");

    const submit = () => {

    }

    return (
        <>
            <Formik
                initialValues={{ title, text }}
                onSubmit={submit}
            >
                {props => (
                    <Form>
                        <FormGroup className="review-form">
                            <TextField id="outlined-basic" name="title" label="Title" variant="outlined" />
                        </FormGroup>
                        <FormGroup className="review-form">
                            <TextareaAutosize id="outlined-basic" label="Your Review" name="text" variant="outlined" rows={5} />
                        </FormGroup>
                    </Form>
                )
                }
            </Formik>
        </>
    );
}

export default ReviewForm;