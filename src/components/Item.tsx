import { Checkbox, TextField, Box, Typography } from "@mui/material";
import { Template, TemplateState } from "../types/types";

interface Props {
    template: Template;
    state: TemplateState;
    onToggle: () => void;
    onChangeVar: (key: string, value: string) => void;
}

export default function TemplateItem({
                                         template,
                                         state,
                                         onToggle,
                                         onChangeVar
                                     }: Props) {
    return (
        <Box mt={2} p={2} border="1px solid #ccc">
            <Checkbox checked={state.enabled} onChange={onToggle} />

            <Typography variant="h6">
                {template.description}
            </Typography>

            {template.variables?.map(v => (
                <TextField
                    key={v.key}
                    label={v.key}
                    value={state.variables[v.key]}
                    onChange={e => onChangeVar(v.key, e.target.value)}
                    fullWidth
                    margin="normal"
                />
            ))}
        </Box>
    );
}