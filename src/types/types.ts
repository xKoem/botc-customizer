export interface Variable {
    key: string;
    default: string;
}

export interface Template {
    key: string;
    description: string;
    cssText: string;
    variables?: Variable[];
}

export interface TemplateState {
    key: string;
    isNew: boolean;
    enabled: boolean;
    variables: Record<string, string>;
}

export interface TemplateStateForCss {
    key: string;
    enabled: boolean;
    variables: Record<string, string>;
}

export interface Separator {
    beforeKey: string;
    description: string;
}