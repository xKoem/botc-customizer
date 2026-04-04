import {Template, TemplateState} from "../types/types";

export function applyVariables(
    css: string,
    vars: Record<string, string>
) {
    let result = css;

    Object.entries(vars).forEach(([key, value]) => {
        const regex = new RegExp(`{{${key}}}`, "g");
        result = result.replace(regex, value);
    });

    return result;
}

export function generateCSS(
    state: TemplateState[],
    templates: Template[]
) {
    const initialConfig = `/*Start of JSON config - do not remove\n${JSON.stringify(
        state
    )}\nEnd of JSON config - do not remove*/`;

    let finalCSS = `${initialConfig}\n\n`;

    state
        .filter(t => t.enabled)
        .forEach(t => {
            const template = templates.find(tp => tp.key === t.key)!;

            const css = applyVariables(template.cssText, t.variables);

            finalCSS += `/* ${template.description} */\n${css}\n\n`;
        });

    return finalCSS;
}