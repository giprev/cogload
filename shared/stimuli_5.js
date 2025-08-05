// function setArrays (){
//     nbackStimuli = {};
//     nbackStimuli.stimuliFirstBlock = [];
//     nbackStimuli.stimuliSecondBlock = [];
//     nbackStimuli.stimuliPractice = [];
//     nbackStimuli.correctResponse;
//     nbackStimuli.target;
//   }
function setArrays (){
    nbackStimuli = {};
    nbackStimuli.stimuliEasy = [];
    nbackStimuli.stimuliHard = [];
    nbackStimuli.stimuliPracticeEasy = [];
    nbackStimuli.stimuliPracticeHard = [];
    nbackStimuli.correctResponse;
    nbackStimuli.target;
  }
  
  function defineNullBack() {
    nbackStimuli.practiceList = ["B", "P", "X", "K", "H", "M", "Q", "X", "N","T"];
    nbackStimuli.stimuliListFirstBlock = ["R", "B", "Q", "N", "Q", "K", "X", "X", "N", "R", "B", "X", "M", "H", "X", "T", "R", "X", "P", "P", "M", "M", "Q", "K", "T", "P", "X", "H", "N", "T", "X", "H", "Q", "N", "R", "K", "M", "K", "B", "X", "K", "T", "B", "X", "R", "P", "N", "H", "B", "X"]
    nbackStimuli.stimuliListSecondBlock = ["H", "Q", "X", "R", "M", "R", "Q", "H", "Q", "X", "H", "T", "X", "Q", "B", "N", "K", "P", "K", "R", "B", "X", "R", "X", "X", "N", "K", "X", "P", "N", "P", "X", "T", "P", "T", "B", "H", "M", "M", "Q", "N", "M", "K", "X", "H", "M", "T", "X", "B", "P"]
  }
  
  function defineEasyBack() {
    nbackStimuli.practiceListEasy = ["B", "P", "K", "K", "H", "M", "Q", "Q", "X", "N"];
    //nbackStimuli.stimuliListFirstBlock = ["H", "H", "T", "X", "H", "N", "X", "B", "N", "M", "X", "X", "B", "R", "X", "Q", "B", "Q", "T", "T","Q", "M", "R", "N","P", "P", "B", "B", "P","M",  "R", "R", "N", "N", "K", "Q", "Q", "K", "K", "T", "P", "K", "P", "M", "M", "K",  "R", "H", "T", "H", "T", "P", "H", "M", "P", "K", "X", "Q", "K", "P", "Q", "T", "M"]
    nbackStimuli.stimuliListEasy = ["K", "R", "N","P","H", "B","B","T", "H", "H",  "X", "K", "M", "K", "K", "P",  "P",  "B", "X", "M", "X", "X", "R", "Q", "N", "H", "P", "Q", "Q","H", "P", "B", "N", "M", "M","B", "K", "M", "Q", "X", "N",  "N", "T", "R", "R", "T", "T", "R", "T", "Q", "T", "P", "H", "M", "P", "K", "X", "Q", "K", "P", "Q", "T", "M"]
}
  
  function defineHard2Back() {
    nbackStimuli.practiceListHard = ["B", "K", "P", "K", "H", "Q", "M", "Q", "X", "N"];
    //nbackStimuli.stimuliListFirstBlock = ["H", "M", "N", "K", "B", "K", "R", "T", "K", "B", "X", "R", "K", "R", "N", "X", "Q", "X", "T", "M", "Q", "P", "R", "H", "B", "M", "B", "P", "M", "N", "M", "H", "Q", "N", "X", "N", "P", "R", "H", "P", "H", "P", "T", "X", "B", "Q", "T", "Q", "T", "K"]
    nbackStimuli.stimuliListHard = ["T", "B", "T", "B", "Q", "P", "T", "M", "K", "M", "K", "X", "Q", "K", "B", "H", "Q", "P", "Q", "H", "N", "N", "H", "H", "B", "M", "R", "M", "P", "R", "P", "T", "X", "K", "N", "P", "N", "X", "M", "R", "T", "R", "B", "Q", "H", "X", "R", "X", "K", "N"]
  }
  
  function defineHard3Back() {
    console.log("function defineHard3Back runs")
    nbackStimuli.practiceListHard = ["B", "K", "P", "H", "K", "Q", "M", "X", "Q", "N"];
    //nbackStimuli.stimuliListFirstBlock = ["N", "K", "X", "Q", "M", "X", "Q", "X", "T", "P", "Q", "T", "P", "K", "Q", "N", "R", "B", "T", "R", "N", "X", "K", "N", "R", "K", "Q", "M", "R", "B", "K", "P", "M", "H", "N", "M", "T", "P", "X", "B", "H", "T", "B", "B", "H", "P", "M", "H", "R", "H", "T", "P", "H", "M", "P", "K", "X", "Q", "K", "P", "Q", "T", "M"]
    nbackStimuli.stimuliListHard = ["T", "P", "H", "M", "P", "K", "X", "Q", "K", "P", "Q", "T", "M", "R", "Q", "X", "K", "B", "R", "X", "B", "P", "H", "M", "T", "H", "M", "N", "K", "X", "N", "R", "X", "T", "K", "P", "T", "M", "B", "Q", "B", "N", "H", "N", "H", "R", "B", "Q", "R", "N", "T", "P", "H", "M", "P", "K", "X", "Q", "K", "P", "Q", "T", "M"]
  }
  
  /* 63 n-back stimuli: 10 before each target task (6 target tasks of 15 seconds each = 1min 30) + 3 at the end so participants are incentivized to keep the letters in mind for the last task. */