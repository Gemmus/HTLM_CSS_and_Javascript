/*
The program announces the name of the winner and the results by printing it to the console:
*/
'use strict';
const numberOfCandidates = parseInt(prompt('Please enter the number of the candidates:'));
let list = [];
for (let n = 1; n <= numberOfCandidates; n++) {
   let nameOfCandidate = prompt('Name for candidate ' + n + ':');
   let candidate = {'name': nameOfCandidate,'votes': 0};
   list.push(candidate);
}
const numberOfVotes = parseInt(prompt('Please enter the number of the voters:'));
for (let v = 1; v <= numberOfVotes; v++) {
   let nameOfVoted = prompt('Name for candidate:');
   let indexChecker = list.findIndex(candidate => candidate.name === nameOfVoted);
   if (indexChecker >= 0) {
      list[indexChecker].votes += 1;
   }
}
let sortedList = list.sort((a, b) => (a.votes < b.votes) ? 1 : (a.votes > b.votes) ? -1 : 0);
console.log('The winner is ' + sortedList[0].name + ' with ' + sortedList[0].votes + ' votes.');
console.log('Result:');
for (let position = 0; position < sortedList.length; position++) {
   console.log('' + sortedList[position].name + ': ' + sortedList[position].votes + ' votes');
}