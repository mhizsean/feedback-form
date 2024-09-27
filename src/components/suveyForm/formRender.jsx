
import TextInput from '../inputs/TextInput';
import MultipleChoiceInput from '../inputs/MultiRadioInput';
import RatingInput from '../inputs/RatingInput';
import MultipleSelectInput from '../inputs/CheckboxSelectInput';
import MultipleSelectWithOtherInput from '../inputs/MultipleSelectWithOtherInput';
import YesNoInput from '../inputs/RadioInput';

const FormRender = ({ question, formik }) => {
    const { type, label, name, options, scale, condition } = question;

    if (condition) {
        const conditionField = formik.values[condition.name];
        if (conditionField !== condition.value) {
            return null;
        }
    }
    switch (type) {
        case 'text':
            return <TextInput label={label} name={name} />;
        case 'textarea':
            return <TextInput label={label} name={name} multiline rows={3} />;
        case 'multiple_choice':
            return <MultipleChoiceInput label={label} name={name} options={options} />;
        case 'rating':
            return <RatingInput label={label} name={name} scale={scale} />;
        case 'multiple_select':
            return <MultipleSelectInput label={label} name={name} options={options} />;
        case 'multiple_select_with_other':
            return <MultipleSelectWithOtherInput label={label} name={name} options={options} />;
        case 'yes_no':
            return <YesNoInput label={label} name={name} />;
        default:
            return null;
    }
};

export default FormRender;

