import { IGrade, IGradeMasteryScore, ISkillConfig, ISkillMastery } from '.';

export interface IAssessment {
  name: string;
  grade: IGrade[];
  skillConfig: ISkillConfig[];
  skillMastery: ISkillMastery[];
}
