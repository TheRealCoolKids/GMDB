import React from 'react';
import { Formik, Form, Field } from "formik";
import { TextField, FormGroup } from "@material-ui/core";

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
                            <TextField id="outlined-basic" label="Title" variant="outlined">
                                <Field name="title" type="text" />
                            </TextField>
                        </FormGroup>
                        <FormGroup className="review-form">
                            <TextField id="outlined-basic" label="Your Review" variant="outlined" multiline rows={5}>
                                <Field name="text" type="text" />
                            </TextField>
                        </FormGroup>
                    </Form>
                )
                }
            </Formik>
        </>
    );
}

export default ReviewForm;