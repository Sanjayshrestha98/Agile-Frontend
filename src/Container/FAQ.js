import { Component, React, useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import { Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Form, Formik } from 'formik';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const successnotify = () => toast.error("Your Question Has Been Delivered", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});


const errornotify = () => toast.error("Error Sending Question", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

const initialValues = {
    question: "",
}

const onSubmit = values => {
    console.log('Formdata', values)
    const response = axios
        .post(`http://localhost:90/add/faq`, values).then(result => {
            console.log(result.data)
            if (result.data.success) {
                successnotify()
            } else {
                errornotify()
            }
        }).catch(error => {
            console.error("Error Registering User", error)
        })
}


function FAQ() {

    const classes = useStyles();
    const [data, setRowData] = useState([]);


    useEffect(() => {

        axios.post('http://localhost:90/getunanswered/' + true)

            .then((response) => {
                setRowData(response.data.data)
                console.log(response.data)
                this.setState(
                    {
                        faq: response.data.data
                    }
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className="faqsection">

            <div className={classes.root}>

                <div className="title">
                    Freqently Asked Questions
                </div>

                <div>
                    {data.map(value => (

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>{value.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {value.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    ))}
                </div>


            </div>
            <div className="ask">

                <Formik
                    initialValues={initialValues}
                    //  validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div className="title"> Ask A Question </div>

                        <div className="form-label-group form-control">
                            <Field
                                type="text" name="question" id="question"
                            />
                            <label htmlFor="question">Ask Any Question </label>

                            <ErrorMessage name='question' render={msg => <div className="error">{msg}</div>} />
                        </div>

                        <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"

                            type="submit"
                        >Ask
                        </button>

                    </Form>

                </Formik>

                <ToastContainer/>


            </div>
        </div>

    )
}

export default FAQ