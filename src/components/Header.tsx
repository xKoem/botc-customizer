import {AppBar, Toolbar, Typography} from "@mui/material";

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        color: 'inherit',
                    }}
                >
                    BotC Darky Customizer
                </Typography>
            </Toolbar>
        </AppBar>
    );
}