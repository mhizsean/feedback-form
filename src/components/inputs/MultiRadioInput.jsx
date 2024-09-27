import { useField } from 'formik';
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Box } from '@mui/material';

const MultipleChoiceInput = ({ label, name, options }) => {
    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers;
    const errorText = meta.touched && meta.error ? meta.error : '';

    return (
        <FormControl component="fieldset" margin="normal" fullWidth>
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup {...field} onChange={(e) => setValue(e.target.value)} row>
                {options.map((option, index) => (
                    <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                ))}
            </RadioGroup>
            {errorText && <Box color="red">{errorText}</Box>}
        </FormControl>
    );
};

export default MultipleChoiceInput;
