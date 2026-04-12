import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import "./Header.css"

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
                   <Box className="headerInner">
                       <img src="/botc-customizer/favicon.ico" height="32px" alt="logo"/>
                       <div>BotC Darky Customizer</div>
                   </Box>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}