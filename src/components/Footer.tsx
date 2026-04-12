import {AppBar, Toolbar, Typography} from "@mui/material";

export default function Footer() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{
                        color: 'inherit',
                    }}
                >
                </Typography>
            </Toolbar>
        </AppBar>
    );
}