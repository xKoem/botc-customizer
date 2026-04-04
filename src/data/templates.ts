import {Template} from "../types/types";

export const templates: Template[] = [
    {
        "key": "disable_script_name_center",
        "description": "Disable script name",
        "cssText": ".town-info > .edition {\n    display: none;\n}\n\n.town-info > .meta {\n    display: none !important;\n}",
        "variables": []
    },
    {
        "key": "disable_pointer_events_on_character_mid",
        "description": "Disable pointer events for character mid",
        "cssText": ".team-special.role-dusk,\n.team-special.role-dawn,\n.team-special.role-minioninfo,\n.team-special.role-demoninfo{\n    color:{{color}};\n}",
        "variables": [
            {
                "key": "color",
                "default": "#ccc"
            }
        ]
    },
    {
        "key": "test",
        "description": "Night order costam",
        "cssText": ".team-special.role-dusk,\n.team-special.role-dawn,\n.team-special.role-minioninfo,\n.team-special.role-demoninfo{\n    color:{{color}}{{another}}{{andanother}};\n}",
        "variables": [
            {
                "key": "color",
                "default": "#ccc"
            },
            {
                "key": "another",
                "default": "some text"
            },
            {
                "key": "andanother",
                "default": "some more text"
            }
        ]
    }
];
