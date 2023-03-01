import {
  IGrade,
  IGradeMasteryScore,
  IMastery,
  ISkillConfig,
  ISkillMastery,
  IWeight,
} from '.';

export interface IAssessment {
  name: string;
  grade: IGrade[];
  weight: IWeight[];
  mastery: IMastery[];
  skillConfig: ISkillConfig[];
  skillMastery: ISkillMastery[];
}
