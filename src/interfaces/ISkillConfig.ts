import { ISkill, IWeight, IGradeMastery } from ".";

export interface ISkillConfig {
    name: string;
    skill: ISkill;
    weight: IWeight;
    gradeMastery: IGradeMastery[];
}