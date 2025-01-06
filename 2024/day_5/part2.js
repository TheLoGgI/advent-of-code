const path = "day_5/input.txt";
// const path = "day_5/input-test.txt";
const file = Bun.file(path);
const test = await file.text();

const content = test.split("\n")
const rulesSliceIndex = content.indexOf("");
const rulesContent = content.slice(0, rulesSliceIndex);
const set = new Set(rulesContent);

const pages = content.slice(rulesSliceIndex + 1).map(page => page.split(","));

const sumMedian = (lists) => {
    let sum = 0
    for (let i = 0; i < lists.length; i++) {
        const arr = lists[i];
        const mid = Math.floor(arr.length / 2);
        sum += Number(lists[i][mid])
    }
    return sum
}

const printQueue = (rules, queues) => {

    const correctOrderingList = []
    for (const que of queues) {

        const start = JSON.stringify(que)
        que.sort((a, b) => {
            return rules.has(`${a}|${b}`) ? -1 : 1
        })
        const end = JSON.stringify(que)

        if (start !== end) {
            correctOrderingList.push(que);
        }
        
    }

    console.log('correctOrderingList: ', correctOrderingList.length);
    return sumMedian(correctOrderingList)


}

// printQueue(rulesMap, pages)
console.log('printQueue(rulesMap, pages): ', printQueue(set, pages));

// Answer: 4145

