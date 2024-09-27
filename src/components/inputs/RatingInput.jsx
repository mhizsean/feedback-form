import { useField } from 'formik';
import { Rating, FormLabel, Box } from '@mui/material';

const RatingInput = ({ label, name, scale = 5 }) => {
    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers;
    const errorText = meta.touched && meta.error ? meta.error : '';

    return (
        <Box marginY={2}>
            <FormLabel component="legend">{label}</FormLabel>
            <Rating
                name={name}
                value={field.value || 0}
                max={scale}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            {errorText && <Box color="red">{errorText}</Box>}
        </Box>
    );
};

export default RatingInput;
