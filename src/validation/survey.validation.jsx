import * as Yup from 'yup';

export const createValidationSchema = (questions) => {
    const schemaFields = {};

    questions.forEach((question) => {
        const { name, type, validation, condition } = question;
        let validator;
        if (condition && questions.find(q => q.name === condition.name)?.value !== condition.value) {
            return;
        }

        switch (type) {
            case 'text':
            case 'textarea':
                validator = Yup.string();
                if (validation?.required) {
                    validator = validator.required(`Please enter ${question.label.toLowerCase()}.`);
                }
                break;
            case 'multiple_choice':
                validator = Yup.string();
                if (validation?.required) {
                    validator = validator.required(`Please select an option for ${question.label}.`);
                }
                break;
            case 'yes_no':
                validator = Yup.boolean().nullable();
                if (validation?.required) {
                    validator = validator.required(`Please select an option for ${question.label}.`);
                }
                break;
            case 'rating':
                validator = Yup.number();
                if (validation?.required) {
                    validator = validator.required(`We would appreciate your rating.`);
                }
                break;
            case 'multiple_select':
            case 'multiple_select_with_other':
                validator = Yup.array();
                if (validation?.required) {
                    validator = validator.min(
                        validation.minChoices || 1,
                        `Please select at least ${validation.minChoices || 1} option.`
                    );
                }
                break;
            default:
                validator = Yup.mixed();
        }

        schemaFields[name] = validator;
    });

    return Yup.object().shape(schemaFields);
};
