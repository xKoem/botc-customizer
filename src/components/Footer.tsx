import {Container, CssBaseline, Link, Typography} from "@mui/material";
import './Footer.css'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {"Copyright © Darky Customizer "}
            {new Date().getFullYear()}
            {". "}
            <Link color="inherit" href="https://github.com/xKoem/botc-customizer/issues">
                Report Issues
            </Link>
        </Typography>
    );
}

export default function Footer() {
    return (
        <div className="footer-container">
            <CssBaseline />
            <footer className="footer">
                <Container>
                    <Typography variant="subtitle2" color="textSecondary">
                        This website is a fan-made project created for non-commercial purposes. It is not affiliated with, endorsed by, or associated with The Pandemonium Institute, the creators of Blood on the Clocktower.
                    </Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}