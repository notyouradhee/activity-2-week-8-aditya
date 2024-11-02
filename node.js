function fizzBuzz() {
    let result = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    console.log("FizzBuzz Result:", result);
}



function processScores() {
    let scores = [85, 93, 78, 92, 88, 76, 95, 89];
    let passingScores = scores.filter(score => score >= 80);
    let boostedScores = passingScores.map(score => score + 5);
    let totalClassScore = boostedScores.reduce((sum, score) => sum + score, 0);

    console.log("Passing Scores:", passingScores);
    console.log("Boosted Scores:", boostedScores);
    console.log("Total Class Score:", totalClassScore);
}



function findMinMax(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }

    console.log("Max:", max, "Min:", min);
}

  


function sortAndSum() {
    let numbersArray = [85, 93, 78, 92, 88, 76, 95, 89];
    let sortedArray = [...numbersArray].sort((a, b) => a - b);
    let totalSum = sortedArray.reduce((sum, num) => sum + num, 0);

    console.log("Sorted Array:", sortedArray);
    console.log("Total Sum:", totalSum);
}
fizzBuzz();
processScores();
findMinMax([85, 93, 78, 92, 88, 76, 95, 89]);
sortAndSum();    


