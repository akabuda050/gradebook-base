import { ISkill, IPriority, IGradeMastery } from ".";

export interface ISkillConfig {
    name: string;
    skill: ISkill;
    priority: IPriority;
    gradeMastery: IGradeMastery[];
}