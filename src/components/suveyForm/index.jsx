import { Box, Input } from '@mui/material'
import { Form, Formik } from 'formik'

const SurveyForm = () => {
    return (
        <Box>
            <Formik>
                <Form>
                    The form block
                </Form>
            </Formik>
        </Box>
    )
}

export default SurveyForm