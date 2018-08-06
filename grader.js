var testScore = [90,98,89,100, 100, 86,94]

function average(testScores){
    var sum = 0;
    testScores.forEach(function(score){
        sum += score;
    });
    var avg = sum/testScores.length;
    console.log(Math.round(avg));
    
}


average(testScore);