import { useState } from "react";
import { Box, Container, Typography } from "@mui/material"
import SurveyForm from "../components/suveyForm"
import PageLayout from "../layout/PageLayout";
import surveyData from '../data.json';
import FeedbackResponse from "../components/response/Response";
import ButtonComponent from "../components/button/Button";

const FeedbackPage = () => {
    const [responses, setResponses] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = (data) => {
        setLoading(true);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                setLoading(false);
            }, 2000);
        });

    }
    const handleSubmit = async (data) => {
        try {
            await handleFormSubmit(data);
            setResponses(data);
        } catch (error) {
            return error;
        }
    };

    const handleReset = () => {
        setResponses(null);
    };
    return (
        <Container
            disableGutters
            maxWidth="md"
            sx={{
                px: 0,
                boxShadow: 5,
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: 2,
                "&.MuiContainer-maxWidthMd": {
                    maxWidth: "700px",
                },
            }}>
            <PageLayout title={surveyData.title}>
                <Box sx={{ p: 3 }}>
                    {responses ? (
                        <Box>
                            <FeedbackResponse {...responses} />
                            <Typography sx={{ mt: 3 }}>To submit another response click the button below</Typography>
                            <ButtonComponent variant="contained" sx={{ textTransform: 'none', mt: 3 }} onClick={handleReset}>Click here</ButtonComponent>
                        </Box>
                    ) : (
                        <>
                            {loading ? (
                                <Typography> Submitting your response...</Typography>

                            ) : (

                                <SurveyForm data={surveyData.questions} onSubmit={handleSubmit} />
                            )}
                        </>

                    )}
                </Box>
            </PageLayout>
        </Container>
    )
}

export default FeedbackPage;