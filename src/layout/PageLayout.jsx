import { Box, Typography } from "@mui/material";

const PageLayout = ({ children, title }) => {
    return (
        <Box>
            <Typography variant="h4" sx={{
                bgcolor: '#182854',
                color: '#fff',
                py: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>{title}</Typography>
            {children}
        </Box>
    );
}

export default PageLayout