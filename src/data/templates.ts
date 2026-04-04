import {Template} from "../types/types";

export function templates(): Template[] {
    return json;
}

const json: Template[] = [
    {
        key: "disable_script_name_center",
        description: "Disable script name",
        cssText: `.town-info > .edition { 
                     display: none;
                    }
                    
                    .town-info > .meta { 
                     display: none !important;
                    }`,
        variables: []
    },
    {
        key: "disable_pointer_events_on_character_mid",
        description: "Disable pointer events for character mid",
        cssText: `.character-mid {
                      pointer-events: none;
                    }`
    },
    {
        key: "night_order_dusk_demon_minion",
        description: "Night order dusk dawn minion demon info color",
        cssText: `.team-special.role-dusk,
                    .team-special.role-dawn,
                    .team-special.role-minioninfo,
                    .team-special.role-demoninfo{
                      color:{{color}};
                    }`,
        variables: [{
            key: "color",
            default: "#ddd"
        }]
    },
    {
        key: "test",
        description: "Night order dusk dawnd",
        cssText: `.team-special.role-dusk,
                    .team-special.role-dawn,
                    .team-special.role-minioninfo,
                    .team-special.role-demoninfo{
                      color:{{color}};
                    }`,
        variables: [{
            key: "color",
            default: "#ddd"
        }]
    }
]

