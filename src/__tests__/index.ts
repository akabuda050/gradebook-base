import utils from "../utils";

// Example
const mastery0 = utils.createMastery("Noob", 0);
const mastery1 = utils.createMastery("Beginner", 2);
const mastery2 = utils.createMastery("Intermediate", 4);
const mastery3 = utils.createMastery("Advanced", 5);

const priority1 = utils.createPriority("Low", 0.25);
const priority2 = utils.createPriority("Medium", 0.5);
const priority3 = utils.createPriority("High", 0.75);
const priority4 = utils.createPriority("High", 1);

const grade1 = utils.createGrade("Junior");
const grade2 = utils.createGrade("Middle");
const grade3 = utils.createGrade("Senior");

const skill1 = utils.createSkill("JavaScript", "JavaScript programming language", "Some comment");
const skill2 = utils.createSkill("Vue.js", "Vue.js front-end framework", "Some comment");
const skill3 = utils.createSkill("Node.js", "Node.js back-end JavaScript runtime environment", "Some comment");

const group1 = utils.createSkillConfigGroup("JS Skill Config Group 1", [
    utils.createSkillConfig('Skill 1 Config',
        skill1, priority1,
        [
            utils.createGradeMastery('Skill 1 Junior Mastery', grade1, mastery1),
            utils.createGradeMastery('Skill 1 Middle Mastery', grade2, mastery2),
            utils.createGradeMastery('Skill 1 Senior Mastery', grade3, mastery3),
        ]
    ),
    utils.createSkillConfig('Skill 2 Config',
        skill2, priority2,
        [
            utils.createGradeMastery('Skill 2 Junior Mastery', grade1, mastery1),
            utils.createGradeMastery('Skill 2 Middle Mastery', grade2, mastery2),
            utils.createGradeMastery('Skill 2 Senior Mastery', grade3, mastery3),
        ]
    ),
    utils.createSkillConfig('Skill 3 Config',
        skill3, priority3,
        [
            utils.createGradeMastery('Skill 3 Junior Mastery', grade1, mastery1),
            utils.createGradeMastery('Skill 3 Middle Mastery', grade2, mastery2),
            utils.createGradeMastery('Skill 3 Senior Mastery', grade3, mastery3),
        ]
    ),
]);

const skillMasteryGroup1 = utils.createSkillMasteryGroup('JS Skill Mastery Group 1', [
    utils.createSkillMastery('Skill Mastery 1', skill1, mastery3),
    utils.createSkillMastery('Skill Mastery 2', skill2, mastery2),
    utils.createSkillMastery('Skill Mastery 3', skill3, mastery3),
])

const candidate = utils.createCandidate('John Doe', [
    utils.createAssessment(
        'JS',
        group1,
        skillMasteryGroup1,
    )
]);

console.log({
    candidate,
    results: utils.calculateCandidateAssesmentResults(candidate),
});
