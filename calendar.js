const today = new Date();
const year = today.getFullYear();
let month = today.getMonth() + 1;

// console.log(year,month);

if (process.argv[2] === "-m") {
    month = Number(process.argv[3]);
    if(!(month >= 1 && month <= 12)) {
        console.log("月は1から12の間で指定してください。");
        process.exit(1);
    }
} 

const firstDays = new Date(year,month-1,1).getDay();
const lastDate = new Date(year,month,0).getDate();

// console.log(firstDays,lastDate);

if (month >= 10) {
    console.log(`     ${month}月 ${year}`);
} else {
    console.log(`      ${month}月 ${year}`);
}
console.log('日 月 火 水 木 金 土');

let line = "   ".repeat(firstDays);
for (let day = 1;day <= lastDate;day++) {
    line = line + String(day).padStart(2) + " ";
    if((firstDays +day) % 7 === 0) {
        line = line + "\n";
    }
    }
console.log(line);

