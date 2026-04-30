import { useState } from "react";
import {
    Button,
    Box,
    Typography,
    IconButton,
    Drawer
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloseIcon from "@mui/icons-material/Close";

export default function UsageDescription() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Box display="flex" justifyContent="flex-end">
                <Button
                    size="small"
                    variant="text"
                    startIcon={<HelpOutlineIcon />}
                    onClick={() => setOpen(true)}
                    sx={{
                        textTransform: "none",
                        fontWeight: 500,
                        opacity: 0.8
                    }}
                >
                    How to use
                </Button>
            </Box>

            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                ModalProps={{
                    BackdropProps: {
                        sx: {
                            backgroundColor: "rgba(0,0,0,0.5)"
                        }
                    }
                }}
                PaperProps={{
                    sx: {
                        width: { xs: "100%", sm: 420 },

                        // 🔥 CRITICAL FIXES
                        backgroundColor: "#111318",
                        backgroundImage: "none",
                        color: "text.primary",
                    }
                }}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    px={3}
                    py={2}
                >
                    <Typography variant="h6" fontWeight={600}>
                        Usage
                    </Typography>

                    <IconButton size="small" onClick={() => setOpen(false)}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>

                {/* Content */}
                <Box px={3} py={2}>
                    <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                        Follow these steps to apply your custom CSS in BotC:
                    </Typography>

                    <Box
                        component="ol"
                        sx={{
                            pl: 3,
                            m: 0,
                            "& li": {
                                mb: 1.5,
                                lineHeight: 1.6
                            }
                        }}
                    >
                        <li>
                            Generate the CSS using this application - it will be copied to your clipboard automatically.
                        </li>
                        <li>
                            Open App Settings in BotC (press "Q" or click the cogwheel on the right-hand side), then go to the third tab → Settings.
                        </li>
                        <li>
                            Scroll to the Advanced section and find "Custom CSS rules".
                        </li>
                        <li>
                            Paste the generated configuration (enable "I know what I'm doing..."). Make sure you paste everything that was copied, not just the CSS - this will be helpful if you want to modify it later.
                        </li>
                        <li>
                            Enjoy your new look.
                        </li>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}