import {AppBar, Toolbar, Typography} from "@mui/material";

const version = "0.1"
const cssVersion = "1.0"

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
                Darky Customizer {version}, css {cssVersion} Copyright ©2026
            </Toolbar>
        </AppBar>
    );
}