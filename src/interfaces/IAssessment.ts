import { ISkillConfigGroup, ISkillMasteryGroup } from ".";

export interface IAssessment {
    name: string;
    skillConfigGroup?: ISkillConfigGroup;
    skillMasteryGroup?: ISkillMasteryGroup;
}