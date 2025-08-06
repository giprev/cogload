function createBlocks(list, stimuli, level){
  for (let i = 0; i < list.length; i++) {

    if (level === 0){
      targetStimulus = "X"
    }
    else {
      targetStimulus = list[i-level];
    }

    if(i > 0) {
      if (list[i] === targetStimulus){
        correctResponse = "j" 
        target = 1;
      } else {
        correctResponse = "f"
        target = 0;
      }
    } else {
      correctResponse = "f"
      target = 0;
    }
    
    if (list == nbackStimuli.practiceListEasy){
      block = "practice easy"
    } else if (list == nbackStimuli.practiceListHard){
      block = "practice hard"
    } else if (list == nbackStimuli.stimuliListHard) {
      block = "stimuli hard"
    } else {
      block = "stimuli easy"
    }

    let newElement = { stimulus: "<p class='stimulus'>" + list[i] /*+ "</p>" + "<br></br><p> Press either the key f or the key j. </p>" */, data: { test_part: 'test', level: level, correct_response: correctResponse, block: block, trial_number: i+1, target: target, letter: list[i] } }
    stimuli.push(newElement)
  }
}