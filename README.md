# Gradebook Base

Defines simple interfaces for gradebook projects.

# Run dev

```bash
npm install
npm run dev
```

# Build

```bash
npm install
npm run build
```

# Example of usage

```js
import * GradeBook from 'gradebook-base';

// Init grades and weights.
const mastery0 = GradeBook.createMastery('Noob', 0);
const mastery1 = GradeBook.createMastery('Beginner', 2);
const mastery2 = GradeBook.createMastery('Intermediate', 4);
const mastery3 = GradeBook.createMastery('Advanced', 5);

const weight1 = GradeBook.createWeight('Low', 0.25);
const weight2 = GradeBook.createWeight('Medium', 0.5);
const weight3 = GradeBook.createWeight('High', 0.75);
const weight4 = GradeBook.createWeight('Top', 1);

const grade1 = GradeBook.createGrade('Junior', 0);
const grade2 = GradeBook.createGrade('Middle', 1);
const grade3 = GradeBook.createGrade('Senior', 2);

// Create skills.
const skill1 = GradeBook.createSkill(
  'JavaScript',
  'JavaScript programming language',
  'Some comment',
);
const skill2 = GradeBook.createSkill(
  'Vue.js',
  'Vue.js front-end framework',
  'Some comment',
);
const skill3 = GradeBook.createSkill(
  'Node.js',
  'Node.js back-end JavaScript runtime environment',
  'Some comment',
);

const skill4 = GradeBook.createSkill('English', 'Level of English', 'Some comment');

// Set weights for skills.
const skillConfig1 = GradeBook.createSkillConfig(
  'JavaScript Config',
  skill1,
  weight4,
  [
    GradeBook.createGradeMastery(grade1, mastery1),
    GradeBook.createGradeMastery(grade2, mastery2),
    GradeBook.createGradeMastery(grade3, mastery3),
  ],
);
const skillConfig2 = GradeBook.createSkillConfig('Vue.js Config', skill2, weight2, [
  GradeBook.createGradeMastery(grade1, mastery1),
  GradeBook.createGradeMastery(grade2, mastery2),
  GradeBook.createGradeMastery(grade3, mastery3),
]);
const skillConfig3 = GradeBook.createSkillConfig(
  'Node.js Config',
  skill3,
  weight3,
  [
    GradeBook.createGradeMastery(grade1, mastery1),
    GradeBook.createGradeMastery(grade2, mastery2),
    GradeBook.createGradeMastery(grade3, mastery3),
  ],
);
const skillConfig4 = GradeBook.createSkillConfig(
  'Node.js Config',
  skill4,
  weight3,
  [
    GradeBook.createGradeMastery(grade1, mastery1),
    GradeBook.createGradeMastery(grade2, mastery2),
    GradeBook.createGradeMastery(grade3, mastery3),
  ],
);

// Setup assessment and candidate.
const assessment = GradeBook.createAssessment(
  'JS',
  [grade1, grade2, grade3],
  [weight1, weight2, weight3, weight4],
  [mastery0, mastery1, mastery2, mastery3],
  [skillConfig1, skillConfig2, skillConfig3, skillConfig4],
);

const candidate = GradeBook.createCandidate('John Doe', [assessment]);

// Complete assessment.
const skillMastery1 = GradeBook.createSkillMastery(skill1, mastery3);
const skillMastery2 = GradeBook.createSkillMastery(skill2, mastery2);
const skillMastery3 = GradeBook.createSkillMastery(skill3, mastery3);
const skillMastery4 = GradeBook.createSkillMastery(skill3, mastery3);

assessment.skillMastery = [
  skillMastery1,
  skillMastery2,
  skillMastery3,
  skillMastery4,
];

// Calculate result and get grade.
console.log({
  candidate,
  results: GradeBook.calculateCandidateAssesmentResults(candidate),
});

```
