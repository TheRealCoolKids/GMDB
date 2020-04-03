import React from 'react';
import {Formik, Form, Field} from "formik";
import {TextField} from "@material-ui/core";

function ReviewForm(props) {

    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("");

    const submit = () =>{

    }

    return (
        <>
            <Formik
            initialValues={{title,text}}
            onSubmit={submit}
            >
                {props => (
                    <Form>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined">
                            <Field name="title" type="text" />
                        </TextField>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined">
                            <Field name="text" type="text" />
                        </TextField>
                    </Form>
                )
                }
            </Formik>
        </>
    );
}

export default ReviewForm;