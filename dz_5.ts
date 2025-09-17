// Class with properties and methods
class User {
    skills: string[];

    constructor(param: string[]) {
        this.skills = param;
    };
    addSkill(param: string): void;
    addSkill(params: string[]): void;
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills);
            console.log(skillOrSkills);
        } else {
            this.skills.concat(skillOrSkills);
            console.log(skillOrSkills);
        }
    }
}

new User([]).addSkill('WebDev');
new User([]).addSkill(['HR','Python','TS','PHP']);

// Function reload
function run(distance: string): string;
function run(distance: number): number;
function run(distance: number | string): number | string {
    if (typeof distance == 'number') {
        return 777;
    } else {
        return 'This is string';
    }
};

// Init
console.log(run(543));