import { Form, Formik } from 'formik'
import ButtonComponent from '../button/Button'
import FormRender from './formRender';
import { createValidationSchema } from '../../validation/survey.validation';

const SurveyForm = ({ data, onSubmit }) => {
    const validationSchema = createValidationSchema(data);

    const initialValues = data.reduce((values, question) => {
        if (question.type === 'yes_no') {
            values[question.name] = null;
        } else if (question.type === 'multiple_select' || question.type === 'multiple_choice' || question.type === 'multiple_select_with_other') {
            values[question.name] = [];
        } else {
            values[question.name] = '';
        }
        return values;
    }, {});

    return (
        <Formik
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm();
            }}

            initialValues={initialValues}
            validationSchema={validationSchema}
        >
            {formik => (
                <Form>
                    {data.map((question, i) => (
                        <FormRender
                            key={i}
                            question={question}
                            formik={formik}
                        />
                    ))}
                    <ButtonComponent
                        type='submit'
                        sx={{ bgColor: '#182854', color: '#fff', my: 2 }}
                        fullWidth
                    >
                        Submit
                    </ButtonComponent>

                </Form>
            )}

        </Formik>
    )
}

export default SurveyForm