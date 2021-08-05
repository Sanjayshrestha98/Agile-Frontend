import { Component, React, useEffect, useState } from 'react'

import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));




function FAQ() {

    const classes = useStyles();
    const [data, setRowData] = useState([]);



    useEffect(() => {

        axios.get('http://localhost:90/getallfaq')
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
                <div className="title"> Ask A Question </div>
                <input type="text" />
                <button>
                    Ask
                </button>
            </div>
        </div>

    )
}

export default FAQ