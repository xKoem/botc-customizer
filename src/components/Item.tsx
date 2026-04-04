import {Checkbox, TextField, FormControlLabel} from "@mui/material";
import { Template, TemplateState } from "../types/types";
import './Item.css'

interface Props {
    template: Template;
    state: TemplateState;
    onToggle: () => void;
    onChangeVar: (key: string, value: string) => void;
}

export default function Item({
                                         template,
                                         state,
                                         onToggle,
                                         onChangeVar
                                     }: Props) {
    return (
        <div className="item-container">
            <FormControlLabel control={<Checkbox checked={state.enabled} onChange={onToggle}/>}
                                  label={template.description} />
            <div className={"item-variables"}>
                {template.variables?.map(v => (
                    <TextField
                        key={v.key}
                        label={v.key}
                        value={state.variables[v.key]}
                        onChange={e => onChangeVar(v.key, e.target.value)}
                        margin="normal"
                    />
                ))}
            </div>

        </div>
    );
}