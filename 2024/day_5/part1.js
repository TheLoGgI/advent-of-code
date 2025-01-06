const path = "day_5/input.txt";
// const path = "day_5/input-test.txt";
const file = Bun.file(path);
const test = await file.text();

const rulesMap = new Map();
const content = test.split("\n")
const rulesSliceIndex = content.indexOf("");
const rulesContent = content.slice(0, rulesSliceIndex);
rulesContent.forEach(rule => {
    const [key, value] = rule.split("|");
    if (!rulesMap.has(key)) {
        rulesMap.set(key, []);
    }
    rulesMap.set(key, rulesMap.get(key).concat(value));
})

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
    console.log("Total", queues.length);
    const correctOrderingList = []
    for (const que of queues) {
        let correct = true
        for (let i = que.length - 1; i > 0; i--) {
            const slice = que.slice(0, i);
            // console.log('slice: ', slice);
            const update = que[i];
            if (rules.has(update)) {
                // console.log('update: ', update);
                const ruleSet = rules.get(update);
                for (const element of slice) {
                    if (ruleSet.includes(element)) {
                        correct = false
                        break
                    }
                }
            } 

            
        }
        if (correct) {
            correctOrderingList.push(que);
        }
        
        console.groupEnd()
    }
    
    console.log('correctOrderingList: ', correctOrderingList.length);
    // console.log('correctOrderingList: ', correctOrderingList);
    return sumMedian(correctOrderingList)


}

// printQueue(rulesMap, pages)
console.log('printQueue(rulesMap, pages): ', printQueue(rulesMap, pages));