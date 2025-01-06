// const path = "day_2/input.txt";
const path = "day_2/input-test.txt";
const file = Bun.file(path);
const test = await file.text();
let levels = test.split("\n")
levels = levels.map(level => {
    const reports = level.split(" ")
    return reports.map((report) => Number(report))
})



const redNosedReports = (reports) => {
    let safeReports = 0
    
    reports.forEach((report, index) => {
        let prev = report[0]
        const direction = report[0] > report[1] ? -1 : 1
        let unsafeCount = 0
        for (let i = 0; i < report.length; i++) {
            const level = report[i];
            
            const magnitude = Math.abs(prev - level)
            // console.log('magnitude: ', magnitude);
            if (3 < magnitude) {
                unsafeCount++
                // console.log('magnitude: ', magnitude, unsafeCount);
                // break
            }

            if (prev === level && i !== 0) {
                // console.log("Same level");
                unsafeCount++
            }

            if (direction === 1 && prev > level ) {
                // console.log("Increase", prev, level);
                unsafeCount++
            }

            if (direction === -1 && prev < level) {
                // console.log("Decrease", prev, level);
                unsafeCount++
            }

            prev = level
            
        }
        
        console.log('unsafeCount: ', unsafeCount, report);
        if (unsafeCount <= 1) safeReports++
        
    });
    return safeReports
}

console.log(redNosedReports(levels));
// console.log(redNosedReports([levels[500]]));

// 527 too low
