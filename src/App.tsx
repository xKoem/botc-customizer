import { useEffect, useState } from "react";
import { templates } from "./data/templates";
import { TemplateState } from "./types/types";
import { generateCSS } from "./utils/cssGenerator";
import { Button, Box, TextField } from "@mui/material";
import TemplateItem from "./components/Item";

export default function App() {
    const [state, setState] = useState<TemplateState[]>([]);
    const [output, setOutput] = useState("");

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("cssConfig") || "[]");

        const initial = templates().map(t => ({
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
        const css = generateCSS(state, templates());
        setOutput(css);
        localStorage.setItem("cssConfig", JSON.stringify(state));
    };

    return (
        <Box p={3}>
            {templates().map(template => {
                const current = state.find(s => s.key === template.key);
                if (!current) return null;

                return (
                    <TemplateItem
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
                Generate CSS
            </Button>

            <TextField
                multiline
                rows={10}
                fullWidth
                value={output}
                sx={{ mt: 2 }}
            />
        </Box>
    );
}