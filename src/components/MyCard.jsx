import { Card, CardContent, Typography } from "@mui/material";


const MyCard = ({title, discription, isInlineBlock = false}) => {
    return <Card sx={{
        displayPrint: isInlineBlock === true ? "inline-block" : "block",
        borderRadius: 3,
        my: 1
    }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {discription}
            </Typography>
        </CardContent>
    </Card>
}


export default MyCard;