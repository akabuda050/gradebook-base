import { SkillConfigGroup } from "./SkillConfigGroup";
import { SkillMasteryGroup } from "./SkillMasteryGroup";

export interface Assessment {
    name: string;
    configGroups: SkillConfigGroup[];
    skillMasteryGroups: SkillMasteryGroup[];
}