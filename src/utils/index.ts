import { ISkill, IWeight, IMastery, IGrade, IGradeMastery, ISkillConfig, ISkillMastery, ISkillMasteryGroup, ISkillConfigGroup, IAssessment, ICandidate, ISkillConfigGroupScore, IGradeMasteryScore, ICandidateAssessmentResult } from '../interfaces';

export function createSkill(name: string, description: string, comment?: string): ISkill {
    return { name, description, comment };
}

export function createWeight(name: string, value: number): IWeight {
    return { name, value };
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

export function createSkillConfig(name: string, skill: ISkill, weight: IWeight, gradeMastery: IGradeMastery[] = []): ISkillConfig {
    return { name, skill, weight, gradeMastery };
}

export function createSkillConfigGroup(name: string, skillConfig: ISkillConfig[] = []): ISkillConfigGroup {
    return { name, skillConfig };
}

export function createSkillMastery(name: string, skill: ISkill, mastery: IMastery): ISkillMastery {
    return { name, skill, mastery };
}

export function createSkillMasteryGroup(name: string, skillMastery: ISkillMastery[] = []): ISkillMasteryGroup {
    return { name, skillMastery };
}

export function createAssessment(name: string, skillConfigGroup?: ISkillConfigGroup, skillMasteryGroup?: ISkillMasteryGroup): IAssessment {
    return { name, skillConfigGroup, skillMasteryGroup };
}

export function createCandidate(name: string, assessment: IAssessment[]): ICandidate {
    return { name, assessment };
}

export function calculateGradeMasteryScore(group: ISkillConfigGroup): ISkillConfigGroupScore {
    let result: ISkillConfigGroupScore = {
        gradeMasteryScore: [],
    }

    return group.skillConfig.reduce((totals, config) => {
        config.gradeMastery.forEach((m) => {
            const scoreInedx = totals.gradeMasteryScore.findIndex((grade) => grade.name === m.grade.name);
            if (scoreInedx === -1) {
                const gradeMasteryTotal: IGradeMasteryScore = {
                    name: m.grade.name,
                    score: m.mastery.level,
                };

                totals.gradeMasteryScore.push(gradeMasteryTotal);
            } else {
                totals.gradeMasteryScore[scoreInedx]['score'] += m.mastery.level * config.weight.value;
            }
        });

        return totals;

    }, result)
}

export function calculateSkillMasteryScore(skillMasteryGroup: ISkillMasteryGroup, skillConfigGroup: ISkillConfigGroup): number {
    return skillMasteryGroup.skillMastery.reduce((acc, mastery) => {
        const weight = skillConfigGroup.skillConfig.find((config) =>
            config.skill.name === mastery.skill.name)?.weight.value || 0;

        acc += weight * mastery.mastery.level;
        return acc;
    }, 0);
}

export function calculateGrade(skillConfigGroupScore: ISkillConfigGroupScore, score: number): IGrade['name'] | undefined {
    let closestMinValue = null;
  
    for (let i = 0; i < skillConfigGroupScore.gradeMasteryScore.length; i++) {
        let currentValue = skillConfigGroupScore.gradeMasteryScore[i];
        
        if (currentValue.score <= score && (closestMinValue === null || score - currentValue.score <= score - closestMinValue.score)) {
            closestMinValue = currentValue;
        }
    }
  
  return closestMinValue?.name;
}

export function calculateAssesmentResult(assessment: IAssessment): ICandidateAssessmentResult {
    const result: ICandidateAssessmentResult = {
        assessment: assessment,
        score: 0,
    }

    if (!assessment.skillConfigGroup || !assessment.skillMasteryGroup) {
        return result;
    }

    const gradesMasteryScore = calculateGradeMasteryScore(assessment.skillConfigGroup);
    const score = calculateSkillMasteryScore(assessment.skillMasteryGroup, assessment.skillConfigGroup);

    result.score = score;
    result.grade = calculateGrade(gradesMasteryScore, result.score);

    return result;
}

export function calculateCandidateAssesmentResults(candidate: ICandidate): ICandidateAssessmentResult[] {
    const results: ICandidateAssessmentResult[] = [];

    candidate.assessment.forEach((assessment) => {
        results.push(
            calculateAssesmentResult(assessment)
        );
    });

    return results;
}

export default {
    createSkill,
    createWeight,
    createMastery,
    createGrade,
    createGradeMastery,
    createSkillConfig,
    createSkillConfigGroup,
    createSkillMastery,
    createSkillMasteryGroup,
    createAssessment,
    createCandidate,
    calculateGrade,
    calculateGradeMasteryScore,
    calculateSkillMasteryScore,
    calculateAssesmentResult,
    calculateCandidateAssesmentResults
}