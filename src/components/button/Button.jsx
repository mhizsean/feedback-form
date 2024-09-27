import { Button } from '@mui/material';

const ButtonComponent = ({ children, variant = 'contained', color = 'primary', onClick, type = 'button', ...props }) => {
    return (
        <Button
            variant={variant}
            color={color}
            onClick={onClick}
            type={type}
            {...props}
        >
            {children}
        </Button>
    );
};

export default ButtonComponent;
