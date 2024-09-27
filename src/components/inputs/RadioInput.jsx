import { useField } from 'formik';
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Box } from '@mui/material';

const YesNoInput = ({ label, name }) => {
    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers;
    const errorText = meta.touched && meta.error ? meta.error : '';

    return (
        <FormControl component="fieldset" margin="normal" fullWidth>
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup
                {...field}
                value={field.value === true ? 'true' : field.value === false ? 'false' : ''}
                onChange={(e) => setValue(e.target.value === 'true')}
                row
            >
                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
            {errorText && <Box color="red">{errorText}</Box>}
        </FormControl>
    );
};

export default YesNoInput;
