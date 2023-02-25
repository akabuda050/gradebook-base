import { Mastery } from "./Mastery";
import { Skill } from "./Skill";

export interface SkillMastery {
    name: string;
    skill: Skill;
    mastery: Mastery;
}