import { Skill, Priority, GradeMastery } from ".";

export interface SkillConfig {
    name: string;
    skill: Skill;
    priority: Priority;
    gradesMasteries: GradeMastery[];
}