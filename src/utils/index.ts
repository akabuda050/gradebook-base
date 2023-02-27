import { ISkill, IPriority, IMastery, IGrade, IGradeMastery, ISkillConfig, ISkillMastery, ISkillMasteryGroup, ISkillConfigGroup, IAssessment, ICandidate, ISkillConfigGroupScore, IGradeMasteryTotal } from '../interfaces';

export function createSkill(name: string, description: string, comment?: string): ISkill {
    return { name, description, comment };
}

export function createPriority(name: string, weight: number): IPriority {
    return { name, weight };
}

export function createMastery(name: string, level: number): IMastery {
    return { name, level };
}

export function createGrade(name: string): IGrade {
    return { name };
}

export function createGradeMastery(name: string, grade: IGrade, mastery: IMastery): IGradeMastery {
    return { name, grade, mastery };
}

export function createSkillConfig(name: string, skill: ISkill, priority: IPriority, gradeMastery: IGradeMastery[]): ISkillConfig {
    return { name, skill, priority, gradeMastery };
}

export function createSkillConfigGroup(name: string, skillConfig: ISkillConfig[]): ISkillConfigGroup {
    return { name, skillConfig };
}

export function createSkillMastery(name: string, skill: ISkill, mastery: IMastery): ISkillMastery {
    return { name, skill, mastery };
}

export function createSkillMasteryGroup(name: string, skillMastery: ISkillMastery[]): ISkillMasteryGroup {
    return { name, skillMastery };
}

export function createAssessment(name: string, skillConfigGroup: ISkillConfigGroup, skillMasteryGroup: ISkillMasteryGroup): IAssessment {
    return { name, skillConfigGroup, skillMasteryGroup };
}

export function createCandidate(name: string, assessment: IAssessment[]): ICandidate {
    return { name, assessment };
}

export function calculateSkillConfigGroupGradeTotals(group: ISkillConfigGroup): ISkillConfigGroupScore {
    let result: ISkillConfigGroupScore = {
        gradeMasteryTotal: [],
    }

    return group.skillConfig.reduce((totals, config) => {
        config.gradeMastery.forEach((m) => {
            const gradeTotal = totals.gradeMasteryTotal.findIndex((grade) => grade.name === m.grade.name);
            if (gradeTotal === -1) {
                const gradeMasteryTotal: IGradeMasteryTotal = {
                    name: m.grade.name,
                    total: m.mastery.level,
                };

                totals.gradeMasteryTotal.push(gradeMasteryTotal);
            } else {
                totals.gradeMasteryTotal[gradeTotal]['total'] += m.mastery.level;
            }
        });

        return totals;

    }, result)
}

export function calculateSkillSkillMasteryTotals(group: ISkillMasteryGroup, skillConfigGroup: ISkillConfigGroup): number {
    return group.skillMastery.reduce((acc, mastery) => {
        const priority = skillConfigGroup.skillConfig.find((config) =>
            config.skill.name === mastery.skill.name)?.priority.weight || 0;

        acc += priority * mastery.mastery.level;
        return acc;
    }, 0);
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
    calculateSkillConfigGroupGradeTotals,
    calculateSkillSkillMasteryTotals
}