function createMedalTable (medals) {
    const datas = {};
    for (let i = 0; i < medals.length; i++) {
        for (let z = 0; z <= 2; z++){
            const a = medals[i].podium[z].split('.');
            const key = a[1];
            if (Object.prototype.hasOwnProperty.call(datas, key) === false){
                const obj = {};
                if (a[0] === "1") {
                    obj[key] = 3;
                } else if (a[0] === "2") {
                    obj[key] = 2;
                } else if (a[0] === "3") {
                    obj[key] = 1;
                }
                Object.assign(datas, obj);
            }else{
                if (a[0] === "1") {
                    datas[key] += 3;
                }else if (a[0] === "2") {
                    datas[key] += 2;
                }else if (a[0] === "3") {
                    datas[key] += 1;
                }
            }
        }
    }
    return datas;
}

describe("Medal Table Generator", () => {
    // Test function, please do not edit
    it("creates correct data structure ", () => {
        // Input data
        const medals = [{
                sport: "cycling",
                podium: ["1.China", "2.Germany", "3.ROC"]
            },
            {
                sport: "fencing",
                podium: ["1.ROC", "2.France", "3.Italy"]
            },
            {
                sport: "high jump",
                podium: ["1.Italy", "1.Qatar", "3.Belarus"]
            },
            {
                sport: "swimming",
                podium: ["1.USA", "2.France", "3.Brazil"]
            }
        ];

        // Expected output data
        const medalTable = {
            "Italy": 4,
            "France": 4,
            "ROC": 4,
            "USA": 3,
            "Qatar": 3,
            "China": 3,
            "Germany": 2,
            "Brazil": 1,
            "Belarus": 1,
        };

        const actualResult = createMedalTable(medals);
        expect(actualResult).toMatchObject(medalTable);
    })
});