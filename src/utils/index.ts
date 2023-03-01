import {
  ISkill,
  IWeight,
  IMastery,
  IGrade,
  IGradeMastery,
  ISkillConfig,
  ISkillMastery,
  IAssessment,
  ICandidate,
  IGradeMasteryScore,
  IAssessmentResult,
} from '../interfaces';

export function createSkill(
  name: string,
  description: string,
  comment?: string
): ISkill {
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

export function createGradeMastery(
  grade: IGrade,
  mastery: IMastery
): IGradeMastery {
  return { grade, mastery };
}

export function createSkillConfig(
  name: string,
  skill: ISkill,
  weight: IWeight,
  gradeMastery: IGradeMastery[] = []
): ISkillConfig {
  return { name, skill, weight, gradeMastery };
}

export function createSkillMastery(
  name: string,
  skill: ISkill,
  mastery: IMastery
): ISkillMastery {
  return { name, skill, mastery };
}

export function createAssessment(
  name: string,
  grade: IGrade[] = [],
  skillConfig: ISkillConfig[] = [],
  skillMastery: ISkillMastery[] = []
): IAssessment {
  return { name, grade, skillConfig, skillMastery };
}

export function createCandidate(
  name: string,
  assessment: IAssessment[]
): ICandidate {
  return { name, assessment };
}

export function calculateGradeMasteryScore(
  skillConfig: ISkillConfig[]
): IGradeMasteryScore[] {
  let result: IGradeMasteryScore[] = [];

  return skillConfig.reduce(
    (totals: IGradeMasteryScore[], config: ISkillConfig) => {
      config.gradeMastery.forEach((gm) => {
        const scoreIndex = totals.findIndex(
          (grade) => grade.grade.name === gm.grade.name
        );
        if (scoreIndex === -1) {
          const gradeMasteryTotal: IGradeMasteryScore = {
            grade: gm.grade,
            score: gm.mastery.level,
          };

          totals.push(gradeMasteryTotal);
        } else {
          totals[scoreIndex]['score'] += gm.mastery.level * config.weight.value;
        }
      });

      return totals;
    },
    result
  );
}

export function calculateSkillMasteryScore(
  skillMastery: ISkillMastery[],
  skillConfig: ISkillConfig[]
): number {
  return skillMastery.reduce((acc, mastery) => {
    const weight =
      skillConfig.find((config) => config.skill.name === mastery.skill.name)
        ?.weight.value || 0;

    acc += weight * mastery.mastery.level;
    return acc;
  }, 0);
}

export function calculateGrade(
  gradeMasteryScore: IGradeMasteryScore[],
  score: number
): IGrade | undefined {
  let closestMinValue = null;

  for (let i = 0; i < gradeMasteryScore.length; i++) {
    let currentValue = gradeMasteryScore[i];

    if (
      currentValue.score <= score &&
      (closestMinValue === null ||
        score - currentValue.score <= score - closestMinValue.score)
    ) {
      closestMinValue = currentValue;
    }
  }

  return closestMinValue?.grade;
}
function createAssesmentResult(
  assessment: IAssessment,
  grade: IGrade,
  score: number
): IAssessmentResult {
  return { assessment, grade, score };
}

export function calculateAssesmentResult(
  assessment: IAssessment
): IAssessmentResult {
  const result: IAssessmentResult = createAssesmentResult(
    assessment,
    { name: 'N/A' },
    0
  );

  const gradeMasteryScore = calculateGradeMasteryScore(assessment.skillConfig);
  const skillMasteryScore = calculateSkillMasteryScore(
    assessment.skillMastery,
    assessment.skillConfig
  );

  const grade = calculateGrade(gradeMasteryScore, skillMasteryScore);
  if (grade) {
    result.grade = grade;
    result.score = skillMasteryScore;
  }

  return result;
}

export function calculateCandidateAssesmentResults(
  candidate: ICandidate
): IAssessmentResult[] {
  const results: IAssessmentResult[] = [];

  candidate.assessment.forEach((assessment) => {
    results.push(calculateAssesmentResult(assessment));
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
  createSkillMastery,
  createAssessment,
  createCandidate,
  calculateGrade,
  calculateGradeMasteryScore,
  calculateSkillMasteryScore,
  calculateAssesmentResult,
  calculateCandidateAssesmentResults,
};
