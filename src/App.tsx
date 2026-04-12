import { useEffect, useState } from "react";
import { templates } from "./data/templates";
import { TemplateState } from "./types/types";
import {extractJsonConfig, generateCSS} from "./utils/cssGenerator";
import {Button, Box, TextField, Container} from "@mui/material";
import Item from "./components/Item";
import { Snackbar, Alert } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {mapFromSavedJsonToConfig} from "./Helpers";
import SaveIcon from '@mui/icons-material/Save';
import UploadIcon from '@mui/icons-material/Upload';
import RestoreIcon from '@mui/icons-material/Restore';



export default function App() {
    const [state, setState] = useState<TemplateState[]>([]);
    const [cssValue, setCssValue] = useState("");
    const [copied, setCopied] = useState(false);
    const [errorOnClipboard, setErrorOnClipboard] = useState(false);
    const [loadedFromClipboard, setLoadedFromClipboard] = useState(false);
    const [resetToDef, setResetToDef] = useState(false);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("cssConfig") || "[]");
        const initial = mapFromSavedJsonToConfig(saved);
        setState(initial);
    }, []);

    const updateTemplate = (key: string, newState: Partial<TemplateState>) => {
        setState(prev =>
            prev.map(t => (t.key === key ? { ...t, ...newState } : t))
        );
    };

    const handleGenerate = () => {
        const css = generateCSS(state, templates);
        setCssValue(css);
        localStorage.setItem("cssConfig", JSON.stringify(state));
        navigator.clipboard.writeText(css).then(r => {
            setCopied(true);
        });
    };

    const handleFromClipboard = () => {
        navigator.clipboard.readText().then(text => {
            const config = extractJsonConfig(text)
            console.log(config);
            if (config) {
                try {
                    const json = JSON.parse(config)
                    const parsed = mapFromSavedJsonToConfig(json)
                    setState(parsed);
                    setLoadedFromClipboard(true);
                } catch {
                    setErrorOnClipboard(true);
                    return;
                }
            }
        })
    };

    const handleResetToDefaults = () => {
        setState(mapFromSavedJsonToConfig([]));
        setResetToDef(true);
    };

    return (
        <div className="main">
            <Header/>
            <Container maxWidth="md">
            <Box p={3}>
                {templates.map(template => {
                    const current = state.find(s => s.key === template.key);
                    if (!current) return null;

                    return (
                        <Item
                            key={template.key}
                            template={template}
                            state={current}
                            onToggle={() =>
                                updateTemplate(template.key, {
                                    enabled: !current.enabled
                                })
                            }
                            onChangeVar={(varKey, value) =>
                                updateTemplate(template.key, {
                                    variables: {
                                        ...current.variables,
                                        [varKey]: value
                                    }
                                })
                            }
                        />
                    );
                })}

                <div className="buttons">
                    <Button onClick={handleFromClipboard}
                            variant="contained"
                            startIcon={<UploadIcon />}
                    >
                        Load old config from clipboard
                    </Button>

                    <Button onClick={handleGenerate}
                            variant="contained"
                            startIcon={<SaveIcon />}
                    >
                        Save and Generate CSS
                    </Button>

                    <Button onClick={handleResetToDefaults}
                            variant="contained"
                            startIcon={<RestoreIcon />}
                    >
                        Reset to defaults
                    </Button>
                </div>

                <TextField
                    multiline
                    rows={10}
                    fullWidth
                    value={cssValue}
                    sx={{ mt: 2 }}
                />

                <Snackbar
                    open={copied}
                    autoHideDuration={2500}
                    onClose={() => setCopied(false)}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                    <Alert severity="success" variant="filled">
                        Copied to clipboard!
                    </Alert>
                </Snackbar>

                <Snackbar
                    open={loadedFromClipboard}
                    autoHideDuration={3500}
                    onClose={() => setLoadedFromClipboard(false)}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                    <Alert severity="success" variant="filled">
                        Config loaded from clipboard!
                    </Alert>
                </Snackbar>

                <Snackbar
                    open={errorOnClipboard}
                    autoHideDuration={3500}
                    onClose={() => setErrorOnClipboard(false)}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                    <Alert severity="error" variant="filled">
                        Error on copying from clipboard!
                    </Alert>
                </Snackbar>

                <Snackbar
                    open={resetToDef}
                    autoHideDuration={3500}
                    onClose={() => setResetToDef(false)}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                    <Alert severity="info" variant="filled">
                        Loaded default state!
                    </Alert>
                </Snackbar>

            </Box>
            <Footer/>

            </Container>
        </div>
    );
}