import React from 'react';
import { Formik, Form, useField } from "formik";
import { TextField, FormGroup, TextareaAutosize, Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import MovieDataService from "../../api/MovieDataService";

function ReviewForm(props) {

    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("");

    const submit = (values) => {
        MovieDataService.saveReview(props.id,{
            title:values.title,
            text:values.text
        })
    }

    return (
        <>
            <Formik
                initialValues={{ title, text }}
                onSubmit={submit}
                enableReinitialize={true}
            >
                {props => (
                    <Form>
                        <FormGroup className="review-form">
                            <TextField id="outlined-basic" onChange={(v)=>setTitle(v.target.value)} name="title" label="Title" variant="outlined" />
                        </FormGroup>
                        <FormGroup className="review-form">
                            <TextareaAutosize id="outlined-basic" onChange={(v)=>setText(v.target.value)} placeholder="Your Review" name="text" variant="outlined" rows={5} />
                        </FormGroup>
                        <FormGroup className="review-form">
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<SendIcon />}
                                type="submit"
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