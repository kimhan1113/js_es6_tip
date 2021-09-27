
let check = "check";

const member = {
    name: '봉구',
    age: 30,
    job : "개발자"
}

const job = {
    task : "frontend",
    tool: "react",
    salary: 5000
}

function introduceMember(member){
    const {name, age, job} = member
    return `이사람의 이름은 ${name} 이고 ${age}살이고 ${job}란 직업을 가졌다.}`
}

// console.log(introduceMember(member));

// const memberJob = {...member}
const memberJob = {area:'seoul', ...member, gender:'men'}
// console.log(memberJob)

const frontend = ["react", "vue", "angular"];
const backend = ["spring", "django", "nodejs"];

const fullstack = [...frontend, ...backend];

// console.log(fullstack);



const BONUS_RATE = 0.2;
const myLastYearDistanceList = [30, 20];
const myDistanceList = [99, 50, 60, 15, ...myLastYearDistanceList];

// bad

function getMileageList(distanceList){
    let mileageList = [];
    for(let i =0; i<distanceList.length; i++){
        mileageList.push(distanceList[i] * BONUS_RATE)
    }
    return mileageList;
}

// good
function getMileageLists(distanceList){
    let mileageList = distanceList.map((compo) => {
        return compo * BONUS_RATE;
    });
    return mileageList;
}

console.log(getMileageLists(myDistanceList));

