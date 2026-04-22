import {Template, TemplateStateForCss} from "../types/types";

const cssConfigStart = "/*Start of JSON config - do not remove"
const cssConfigEnd = "End of JSON config - do not remove*/"

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
    state: TemplateStateForCss[],
    templates: Template[]
) {
    const initialConfig = `${cssConfigStart}\n${JSON.stringify(state)}\n${cssConfigEnd}`;

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

export function extractJsonConfig(css: string) {
    return css.split(cssConfigEnd)
        .at(0)
        ?.replace(cssConfigStart, "").trim() || ""
}