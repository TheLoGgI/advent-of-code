const path = "day_2/input.txt";
// const path = "day_2/input-test.txt";
const file = Bun.file(path);
const test = await file.text();
let levels = test.split("\n")
levels = levels.map(level => {
    const reports = level.split(" ")
    return reports.map((report) => Number(report))
})



const redNosedReports = (reports) => {
    let safeReports = 0
    
    reports.forEach(report => {
        let prev = report[0]
        const direction = report[0] > report[1] ? -1 : 1
        let isSafe = true
        for (let i = 0; i < report.length; i++) {
            const level = report[i];
            
            const magnitude = Math.abs(prev - level)
            if (3 < magnitude) {
                isSafe = false
                break
            }

            if (prev === level && i !== 0) {
                isSafe = false
                break
            }

            if (direction === 1 && prev > level || direction === -1 && prev < level) {
                // console.log(prev, level);
                isSafe = false
                break
            }

            prev = level
            
        }
        
        if (isSafe) safeReports++
        
    });
    return safeReports
}

console.log(redNosedReports(levels));