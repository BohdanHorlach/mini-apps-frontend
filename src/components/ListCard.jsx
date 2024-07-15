import { Box, Stack, Typography } from "@mui/material";


const ListCard = ({children}) => {
    return <>
        <Box sx={{
            px: 2,
            width: "-webkit-fill-available"
        }}>
            <Typography variant="body1" color="text.secondary">List Card</Typography>
        </Box>
        <div className='card-list'>
            <div className='list-wrapper'>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        p: 2,
                    }}
                >
                    {children}
                </Stack>
            </div>
        </div>
    </>
}


export default ListCard;