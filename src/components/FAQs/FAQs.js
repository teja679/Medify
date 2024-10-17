import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from '../../assets/faqs-banner.png'
import { useState } from "react";

export const CustomizedAccordions = ({ data }) => {
    const [expanded, setExpanded] = useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            {data.map((item, index) => (
                <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                    <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                        <Typography
                            fontSize={18}
                            fontWeight={700}
                            color='#1B3C74'
                            lineHeight={1.2}
                        >
                            {item.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            fontSize={14}
                        >
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}

export default function FAQs() {

    const faqs = [
        {
            question: 'Why choose our medical for your family?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Why we are different from others?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Trusted & experience senior care & love',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'How to get appointment for emergency cases?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        }
    ]

    return (
        <Box py={4}>
            <Container maxWidth='xl'>
                <Typography color='primary.main' fontWeight={600} textAlign='center'>
                    Get Your Answer
                </Typography>
                <Typography textAlign='center' variant='h2' mb={2}>
                    Frequently Asked Questions
                </Typography>
                <Grid container alignItems='center' spacing={5}>

                    <Grid item xs={12} md={6}>
                        <Box
                            src={faqBanner}
                            component='img'
                            width={1}
                            height='auto'
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box maxWidth={450}>
                            <CustomizedAccordions data={faqs} />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}