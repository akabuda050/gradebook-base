import { Skill, Priority, Mastery, Grade, GradeMastery, SkillConfig, SkillMastery, SkillMasteryGroup, SkillConfigGroup, Assessment, Candidate } from '../interfaces';

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

export function createGradeMastery(name: string, grade: Grade, mastery: Mastery): GradeMastery {
    return { name, grade, mastery };
}

export function createSkillConfig(name: string, skill: Skill, priority: Priority, gradesMasteries: GradeMastery[]): SkillConfig {
    return { name, skill, priority, gradesMasteries };
}

export function createSkillConfigGroup(name: string, configs: SkillConfig[]): SkillConfigGroup {
    return { name, configs };
}

export function createSkillMastery(name: string, skill: Skill, mastery: Mastery): SkillMastery {
    return { name, skill, mastery };
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
    createGradeMastery,
    createSkillConfig,
    createSkillConfigGroup,
    createSkillMastery,
    createSkillMasteryGroup,
    createAssessment,
    createCandidate,
}