import { SkillConfigGroup, SkillMasteryGroup } from ".";

export interface Assessment {
    name: string;
    configGroups: SkillConfigGroup[];
    skillMasteryGroups: SkillMasteryGroup[];
}