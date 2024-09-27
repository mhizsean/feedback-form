import { Box } from '@mui/material'
import { Form, Formik } from 'formik'
import ButtonComponent from '../button/Button'
import TextInput from '../inputs/TextInput'

const SurveyForm = () => {
    return (
        <Box>
            <Formik>
                <Form>
                    <TextInput label="Name" name="name" />
                    <ButtonComponent>Submit</ButtonComponent>
                </Form>
            </Formik>
        </Box>
    )
}

export default SurveyForm