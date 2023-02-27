import { ISkill, IMastery } from ".";

export interface ISkillMastery {
    name: string;
    skill: ISkill;
    mastery: IMastery;
}