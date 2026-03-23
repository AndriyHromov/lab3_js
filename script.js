(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {

        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            SpeakGoodbye.speak(names[i]);
        } else {
            SpeakHello.speak(names[i]);
        }
    }
console.log("=== Additional Task: Name Length Check ===");

    for (var i = 0; i < names.length; i++) {

        if (names[i].length > 5) {
            console.log("Special Hello " + names[i]);
        } else {
            console.log("Short Name " + names[i]);
        }
    }
})();
