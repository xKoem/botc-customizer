import {Template} from "../types/types";

export const templates: Template[] = [
    {
        "key": "disable_script_name_center",
        "description": "Disable script name",
        "cssText": ".town-info > .edition {\r\n    display: none;\r\n}\r\n\r\n.town-info > .meta {\r\n    display: none !important;\r\n}",
        "variables": []
    },
    {
        "key": "disable_pointer_events_on_character_mid",
        "description": "Disable pointer events for character mid",
        "cssText": ".team-special.role-dusk,\r\n.team-special.role-dawn,\r\n.team-special.role-minioninfo,\r\n.team-special.role-demoninfo{\r\n    color:{{color}};\r\n}",
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
        "cssText": ".team-special.role-dusk,\r\n.team-special.role-dawn,\r\n.team-special.role-minioninfo,\r\n.team-special.role-demoninfo{\r\n    color:{{color}}{{another}}{{andanother}};\r\n}",
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
