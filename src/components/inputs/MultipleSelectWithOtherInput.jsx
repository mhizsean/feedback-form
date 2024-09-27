import { useField } from 'formik';
import { Checkbox, FormControlLabel, FormGroup, FormControl, FormLabel, TextField, Box } from '@mui/material';

const MultipleSelectWithOtherInput = ({ label, name, options }) => {
    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers;
    const errorText = meta.touched && meta.error ? meta.error : '';
    const [otherValue, setOtherValue] = useState('');

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
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={field.value.includes('Other')}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setValue([...field.value, 'Other']);
                                } else {
                                    setValue(field.value.filter((val) => val !== 'Other'));
                                    setOtherValue('');
                                }
                            }}
                        />
                    }
                    label="Other"
                />
                {field.value.includes('Other') && (
                    <TextField
                        value={otherValue}
                        onChange={(e) => setOtherValue(e.target.value)}
                        placeholder="Please specify"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                )}
            </FormGroup>
            {errorText && <Box color="red">{errorText}</Box>}
        </FormControl>
    );
};

export default MultipleSelectWithOtherInput;
