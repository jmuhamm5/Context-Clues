var friends = ['Dip Shit', 'Fuck Tard', 'Annoying Asshole', 'Scum Bucket', 'Phony AssKisser'];
var locations = ['strip club', 'kitchen', 'living room', 'driveway', 'backyard', 'mueseum', 'park', 'bedroom', 'bathroom', 'attic'];
var weapons = ['candle', 'lube', 'lotion', 'condom', 'eraser', 'fork', 'nail', 'spoon', 'pillow', 'toothpaste', 'peppermint', 'gum', 'pineapple', 'apple', 'butter', 'cup', 'glove', 'dagger', 'socks', 'rake'];


// document.body.onload = myFunc();
// function myFunc() {
//   return function() {
//     // code here
//   };
// }
//
// $(document).ready(function(){
//     // call functions here
// });


document.addEventListener('DOMContentLoaded', function() {
  for (var i = 1; i<=100; i++) {
    var heading = document.createElement('h3');
    heading.innerHTML = 'Accusation '+ i;

    var randomFriend = friends[Math.floor(Math.random() * friends.length)];
    var randomLocation = locations[Math.floor(Math.random() * locations.length)];
    var randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];

    var o = {
      friend: randomFriend,
      location: randomLocation,
      weapon: randomWeapon
    }

    var newFunc = alertAccusation.bind(o);

    heading.addEventListener('click', newFunc);

    document.body.appendChild(heading);
  }
});




function alertAccusation() {
  console.log(this);
  alert('I accuse '+ this.friend +' in ' +this.location+ ' with '+this.weapon);
}
