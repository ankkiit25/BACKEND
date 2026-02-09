const scoreArray = ["85",92,"67",40,100,"30",76,"90"]
function analyzeScores(scoreArray){
    let excellentCount = 0;
    let passCount = 0;
    let failCOunt = 0;

    let total = 0;
    let validStudent = 0;

    for(let i = 0; i<scoreArray.length; i++){
        let num = Number(scoreArray[i]);

        if(isNaN(num)){
            continue;
        }

        validStudent++;
        total += num;

        if(num >= 90){
            excellentCount++;
        }
        else if(num >= 60){
            passCount++;
        }
        else(num < 60){
            failCOunt++;
        }

        let category = 
        num >= 90 ? "Excellent":
        num >= 60 ? "Pass":"Fail";
        console.log(num +" "+ category);
    }

    let avg = validStudent == 0 ? 
}