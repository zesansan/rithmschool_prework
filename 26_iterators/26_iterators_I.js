var users = [
{
  username: "larry",
  email: "larry@foo.com",
  yearsExperience: 22.1,
  favoriteLanguages: ["Perl", "Java", "C++"],
  favoriteEditor: "Vim",
  hobbies: ["Fishing", "Sailing", "Hiking"],
  hometown: {
    city: "San Francisco",
    state: "CA"
  }
},
{
  username: "jane",
  email: "jane@test.com",
  yearsExperience: 33.9,
  favoriteLanguages: ["Haskell", "Clojure", "PHP"],
  favoriteEditor: "Emacs",
  hobbies: ["Swimming", "Biking", "Hiking"],
  hometown: {
    city: "New York",
    state: "NY"
  }
},
{
  username: "sam",
  email: "sam@test.com",
  yearsExperience: 8.2,
  favoriteLanguages: ["JavaScript","Ruby", "Python", "Go"],
  favoriteEditor: "Atom",
  hobbies: ["Golf", "Cooking", "Archery"],
  hometown: {
    city: "Fargo",
    state: "SD"
  }
},
{
  username: "anne",
  email: "anne@test.com",
  yearsExperience: 4,
  favoriteLanguages: ["C#", "C++", "F#"],
  favoriteEditor: "Visual Studio Code",
  hobbies: ["Tennis", "Biking", "Archery"],
  hometown: {
    city: "Albany",
    state: "NY"
  }
},
{
  username: "david",
  email: "david@test.com",
  yearsExperience: 12.5,
  favoriteLanguages: ["JavaScript", "C#", "Swift"],
  favoriteEditor: "Sublime Text",
  hobbies: ["Volunteering", "Biking", "Coding"],
  hometown: {
    city: "Los Angeles",
    state: "CA"
  }
}
]

function printEmails(users){
  users.forEach(function(val){
    console.log(val.email);
  });
}
printEmails(users);

function printHobbies(users){
  users.forEach(function(user){
    user.hobbies.forEach(function(hobby){
      console.log(hobby);
    });
  });
}

function findHometownByState(stateVal){
  return users.find(function(val,idx,arr){
    return val.hometown.state === stateVal; 
  });
}

function allLanguages(users){
  var languages = [];
  users.forEach(function(val){
    val.favoriteLanguages.forEach(function(language){
      if(languages.indexOf(language) === -1){
        languages.push(language);
      }
    });
  });
  return languages;
} 

function hasFavoriteEditor(editor){
  return users.some(function(val){
    return val.favoriteEditor === editor
  });
}

function findByUsername(user){
  return users.find(function(val){
   if(val.username === user){
    return val;
   } 
  });
}

