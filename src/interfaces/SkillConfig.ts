import { GradeConfig } from "./GradeConfig";
import { Skill } from "./Skill";

export interface SkillConfig {
    name: string;
    skill: Skill;
    gradesConfig: GradeConfig[];
}