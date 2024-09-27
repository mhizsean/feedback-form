import { Box, Typography } from '@mui/material'
import React from 'react'

const FeedbackResponse = ({ feedback_text, name, rating, feedback, referral, improvements, likes }) => {
    return (
        <Box>
            <Typography variant="h5">{feedback_text}</Typography>
            <Typography variant="body1">Thank you for your feedback <strong>{name}</strong>! </Typography>
            <Box>
                <Typography variant="body1">Your rating: {rating}</Typography>
                {likes ? <>
                    <Typography variant="body1">You liked our services of:</Typography>
                    <strong>{likes}</strong>
                </> : null}
                {rating ? <>
                    <Typography variant="body1">You gave us a rating of:</Typography>
                    <strong>{rating}</strong>
                </> : null}
                {improvements ? <>
                    <Typography variant="body1">You asked us to improve on:</Typography>
                    <strong>{improvements}</strong>
                </> : null}
                {feedback ? <>
                    <Typography variant="body1">You gave an additional feedback</Typography>
                    <strong>{feedback}</strong>
                </> : null}
            </Box>

        </Box>
    )
}

export default FeedbackResponse