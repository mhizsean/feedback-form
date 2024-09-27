import { Box, Container } from "@mui/material"
import SurveyForm from "../components/suveyForm"
import PageLayout from "../layout/PageLayout";
import surveyData from '../data.json';
const FeedbackPage = () => {
    console.log(surveyData, 'surveyData')
    return (
        <Container disableGutters
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
                    <SurveyForm />
                </Box>
            </PageLayout>
        </Container>
    )
}

export default FeedbackPage;