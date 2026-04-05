import { useEffect, useState } from "react";
import { templates } from "./data/templates";
import { TemplateState } from "./types/types";
import { generateCSS } from "./utils/cssGenerator";
import { Button, Box, TextField } from "@mui/material";
import Item from "./components/Item";
import { Snackbar, Alert } from "@mui/material";

export default function App() {
    const [state, setState] = useState<TemplateState[]>([]);
    const [cssTestValue, setCssTestValue] = useState("");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("cssConfig") || "[]");

        const initial = templates.map(t => ({
            key: t.key,
            enabled: saved.find((s: any) => s.key === t.key)?.enabled ?? true,
            variables: Object.fromEntries(
                t.variables?.map(v => [
                    v.key,
                    saved.find((s: any) => s.key === t.key)?.variables?.[v.key] ??
                    v.default ??
                    ""
                ]) ?? []
            )
        }));

        setState(initial);
    }, []);

    const updateTemplate = (key: string, newState: Partial<TemplateState>) => {
        setState(prev =>
            prev.map(t => (t.key === key ? { ...t, ...newState } : t))
        );
    };

    const handleGenerate = () => {
        const css = generateCSS(state, templates);
        setCssTestValue(css);
        localStorage.setItem("cssConfig", JSON.stringify(state));
        navigator.clipboard.writeText(css).then(r => {
            setCopied(true);
        });
    };

    return (
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

            <Button onClick={handleGenerate} variant="contained">
                Save and Generate CSS
            </Button>

            <TextField
                multiline
                rows={10}
                fullWidth
                value={cssTestValue}
                sx={{ mt: 2 }}
            />

            <Snackbar
                open={copied}
                autoHideDuration={1500}
                onClose={() => setCopied(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert severity="success" variant="filled">
                    Copied to clipboard!
                </Alert>
            </Snackbar>
        </Box>
    );
}