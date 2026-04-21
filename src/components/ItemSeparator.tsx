import { Divider, Typography, Box } from "@mui/material";
import { Separator } from "../types/types";

interface Props {
    separator: Separator;
}

export default function ItemSeparator({ separator }: Props) {
    return (
        <Box my={3}>
            <Divider textAlign="left">
                <Typography variant="subtitle2" color="text.secondary">
                    {separator.description}
                </Typography>
            </Divider>
        </Box>
    );
}