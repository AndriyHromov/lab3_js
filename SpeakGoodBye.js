(function (window) {
    var SpeakGoodbye = {};

    var speakWord = "Goodbye";

    SpeakGoodbye.speak = function (name) {
        console.log(speakWord + " " + name);
    };

    window.SpeakGoodbye = SpeakGoodbye;

})(window);
