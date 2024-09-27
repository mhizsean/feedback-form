import { TextField } from '@mui/material';
import { useField } from 'formik';

const TextInput = ({ label, name, multiline = false, rows = 1 }) => {
    const [field, meta] = useField(name);
    const errorText = meta.touched && meta.error ? meta.error : '';

    return (
        <TextField
            {...field}
            label={label}
            fullWidth
            variant="standard"
            error={!!errorText}
            helperText={errorText}
            margin="normal"
            multiline={multiline}
            rows={rows}
        />
    );
};

export default TextInput;
