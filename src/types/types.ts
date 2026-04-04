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
    enabled: boolean;
    variables: Record<string, string>;
}