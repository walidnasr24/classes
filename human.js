export default class Human{
name;
job;
skills=[];
getJob(job){
console.log(`${(this.job=job)}`);
}
leaveJob(){
console.log("unemployed");
}
learnNewSkill(skill){
console.log(`${(this.skills.push(skill))}`);
}
forgetSkill(skill){
let index=this.skills.indexOf(skill);
let tab=this.skills;
console.log(`${tab.splice(index,1)}`);

}


}