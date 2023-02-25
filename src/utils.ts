import { Skill } from "./interfaces/Skill";
import { Priority } from "./interfaces/Priority";
import { Mastery } from "./interfaces/Mastery";
import { Grade } from "./interfaces/Grade";
import { GradeConfig } from "./interfaces/GradeConfig";
import { SkillConfig } from "./interfaces/SkillConfig";
import { SkillConfigGroup } from "./interfaces/SkillConfigGroup";
import { SkillMastery } from "./interfaces/SkillMastery";
import { SkillMasteryGroup } from "./interfaces/SkillMasteryGroup";
import { Assessment } from "./interfaces/Assessment";
import { Candidate } from "./interfaces/Candidate";

export function createSkill(name: string, description: string, comment?: string): Skill {
    return { name, description, comment };
}

export function createPriority(name: string, weight: number): Priority {
    return { name, weight };
}

export function createMastery(name: string, level: number): Mastery {
    return { name, level };
}

export function createGrade(name: string): Grade {
    return { name };
}

export function createGradeConfig(grade: Grade, priority: Priority, mastery: Mastery): GradeConfig {
    return { name: `${grade.name}: ${priority.name} - ${mastery.name}`, grade, priority, mastery };
}

export function createSkillConfig(name: string, skill: Skill, gradesConfig: GradeConfig[]): SkillConfig {
    return { name, skill, gradesConfig };
}

export function createSkillConfigGroup(name: string, configs: SkillConfig[]): SkillConfigGroup {
    return { name, configs };
}

export function createSkillMastery(name: string, skill: Skill, mastery: Mastery): SkillMastery {
    return { name: `${name}: ${skill.name} - ${mastery.name}`, skill, mastery };
}

export function createSkillMasteryGroup(name: string, skillMasteries: SkillMastery[]): SkillMasteryGroup {
    return { name, skillMasteries };
}

export function createAssessment(name: string, configGroups: SkillConfigGroup[], skillMasteryGroups: SkillMasteryGroup[]): Assessment {
    return { name, configGroups, skillMasteryGroups };
}

export function createCandidate(name: string, assessments: Assessment[]): Candidate {
    return { name, assessments };
}

export default {
    createSkill,
    createPriority,
    createMastery,
    createGrade,
    createGradeConfig,
    createSkillConfig,
    createSkillConfigGroup,
    createSkillMastery,
    createSkillMasteryGroup,
    createAssessment,
    createCandidate,
}