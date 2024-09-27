import { useField } from 'formik';
import { Checkbox, FormControlLabel, FormGroup, FormControl, FormLabel, Box } from '@mui/material';

const MultipleSelectInput = ({ label, name, options }) => {
    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers;
    const errorText = meta.touched && meta.error ? meta.error : '';

    return (
        <FormControl component="fieldset" margin="normal" fullWidth>
            <FormLabel component="legend">{label}</FormLabel>
            <FormGroup>
                {options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        control={
                            <Checkbox
                                checked={field.value.includes(option)}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setValue([...field.value, option]);
                                    } else {
                                        setValue(field.value.filter((val) => val !== option));
                                    }
                                }}
                            />
                        }
                        label={option}
                    />
                ))}
            </FormGroup>
            {errorText && <Box color="red">{errorText}</Box>}
        </FormControl>
    );
};

export default MultipleSelectInput;
