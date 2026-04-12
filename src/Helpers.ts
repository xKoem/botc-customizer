import {templates} from "./data/templates";

export const mapFromSavedJsonToConfig = (json: any)=> {
    return templates.map(t => ({
        key: t.key,
        enabled: json.find((s: any) => s.key === t.key)?.enabled ?? true,
        variables: Object.fromEntries(
            t.variables?.map(v => [
                v.key,
                json.find((s: any) => s.key === t.key)?.variables?.[v.key] ??
                v.default ??
                ""
            ]) ?? []
        )
    }));
}