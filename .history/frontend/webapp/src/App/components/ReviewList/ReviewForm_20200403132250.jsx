import React from 'react';
import { Formik, Form, Field } from "formik";
import { TextField, FormGroup, TextareaAutosize, Button } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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
                            <TextareaAutosize id="outlined-basic" placeholder="Your Review" name="text" variant="outlined" rows={5} />
                        </FormGroup>
                        <FormGroup className="review-form">
                            <Button
                                variant="contained"
                                color="default"
                                startIcon={<CloudUploadIcon />}
                            >
                                Submit
                            </Button>
                        </FormGroup>
                    </Form>
                )
                }
            </Formik>
        </>
    );
}

export default ReviewForm;