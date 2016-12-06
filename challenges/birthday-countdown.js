/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE

//This was my first birthdayReminder function.  The next version sorts. It's
//also split up and probably a lot neater.

// function birthdayReminder(birthdaysArray){
//   var today = new Date()
//   var remindArray = []
//   birthdaysArray.forEach(function(splitter){
//     var nextDob = splitter.dob.split('/');
//     nextDob.pop();
//     console.log(today.getMonth())
//     if(nextDob[0]<=(today.getMonth()+1)||(nextDob[0]<=(today.getMonth()+1)&&nextDob[1]<=today.getDate())){
//       nextDob.push('2017');
//     } else {
//       nextDob.push('2016');
//     }
//   nextDob = nextDob.join('/');
//   tempDaysUntil = daysUntilDate(nextDob);
//   console.log(tempDaysUntil);
//   remindArray.push(splitter.name+"'s birthday is in "+tempDaysUntil+" days.");
//   })
//   console.log(remindArray);
//   return remindArray;
// }

function birthdayReminder(birthdaysArray){
  var nextBDayArray = birthdaysArray.map(nextBDay);
  nextBDayArray.sort(compare);
  var remindArray = nextBDayArray.map(buildRemindArray);
  return remindArray;
}

function buildRemindArray(buildInfo){
  return buildInfo.name+"'s birthday is in "+buildInfo.nextBDay+" days.";
}

function nextBDay(splitter){
  var today = new Date()
  var nextDob = splitter.dob.split('/');
  nextDob.pop();
    if(nextDob[0]<=(today.getMonth()+1)||(nextDob[0]<=(today.getMonth()+1)&&nextDob[1]<=today.getDate())){
      nextDob.push('2017');
    } else {
      nextDob.push('2016');
    }
  nextDob = nextDob.join('/');
  splitter.nextBDay = daysUntilDate(nextDob);
  return splitter;
}

function compare(a,b) {
  if (a.nextBDay < b.nextBDay)
    return -1;
  if (a.nextBDay > b.nextBDay)
    return 1;
  return 0;
}

function daysUntilDate (dateEntered){
  var today = Date.now();
  var laterDate = Date.parse(dateEntered);
  var dateUntil = Math.ceil((laterDate-today)/(8.64*Math.pow(10,7)));
  return dateUntil
}
