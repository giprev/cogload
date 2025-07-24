const ar = "../static/images/ar.PNG";
const al = "../static/images/al.PNG";
const mr_fl = "../static/images/mr_fl.PNG";
const ml_fr = "../static/images/ml_fr.PNG";



function add(a, b) {
    return a + b;
}
var stimuli_flanker = [
	{stim: al, stimsign: "<<<<<", resp1: ar, resp1sign: ">>>>>", resp2: al, resp2sign: "<<<<<", correct_response: 1, condition: 1},
	{stim: al, stimsign: "<<<<<", resp1: al, resp1sign: "<<<<<", resp2: ar, resp2sign: ">>>>>", correct_response: 0, condition: 1},
	{stim: ar, stimsign: ">>>>>", resp1: ar, resp1sign: ">>>>>", resp2: al, resp2sign: "<<<<<", correct_response: 0, condition: 1},
	{stim: ar, stimsign: ">>>>>", resp1: al, resp1sign: "<<<<<", resp2: ar, resp2sign: ">>>>>", correct_response: 1, condition: 1},
	{stim: al, stimsign: "<<<<<", resp1: ml_fr, resp1sign: ">><>>", resp2: mr_fl, resp2sign: "<<><<", correct_response: 0, condition: 2},
	{stim: al, stimsign: "<<<<<", resp1: mr_fl, resp1sign: "<<><<", resp2: ml_fr, resp2sign: ">><>>", correct_response: 1, condition: 2},
	{stim: ar, stimsign: ">>>>>", resp1: ml_fr, resp1sign: ">><>>", resp2: mr_fl, resp2sign: "<<><<", correct_response: 1, condition: 2},
	{stim: ar, stimsign: ">>>>>", resp1: mr_fl, resp1sign: "<<><<", resp2: ml_fr, resp2sign: ">><>>", correct_response: 0, condition: 2},
	{stim: mr_fl, stimsign: "<<><<", resp1: al, resp1sign: "<<<<<", resp2: ar, resp2sign: ">>>>>", correct_response: 0, condition: 3},
	{stim: mr_fl, stimsign: "<<><<", resp1: ar, resp1sign: ">>>>>", resp2: al, resp2sign: "<<<<<", correct_response: 1, condition: 3},
	{stim: ml_fr, stimsign: ">><>>", resp1: al, resp1sign: "<<<<<", resp2: ar, resp2sign: ">>>>>", correct_response: 1, condition: 3},
	{stim: ml_fr, stimsign: ">><>>", resp1: ar, resp1sign: ">>>>>", resp2: al, resp2sign: "<<<<<", correct_response: 0, condition: 3},
	{stim: mr_fl, stimsign: "<<><<", resp1: mr_fl, resp1sign: "<<><<", resp2: ml_fr, resp2sign: ">><>>", correct_response: 1, condition: 4},
	{stim: mr_fl, stimsign: "<<><<", resp1: ml_fr, resp1sign: ">><>>", resp2: mr_fl, resp2sign: "<<><<", correct_response: 0, condition: 4},
	{stim: ml_fr, stimsign: ">><>>", resp1: mr_fl, resp1sign: "<<><<", resp2: ml_fr, resp2sign: ">><>>", correct_response: 0, condition: 4},
	{stim: ml_fr, stimsign: ">><>>", resp1: ml_fr, resp1sign: ">><>>", resp2: mr_fl, resp2sign: "<<><<", correct_response: 1, condition: 4}
];

function generateFlankerTrials(stimuli, totalLength = 100) {
  // Step 1: Shuffle the original stimuli once
  const shuffledBase = [...stimuli].sort(() => Math.random() - 0.5);

  // Step 2: Repeat until total trials >= 100
  let repeated = [];
  while (repeated.length < totalLength) {
    repeated.push(...shuffledBase);
  }

  // Step 3: Trim to exactly 100
  repeated.length = totalLength;

  // Step 4: Final shuffle
  return repeated.sort(() => Math.random() - 0.5);
}

const flanker_trials_100 = generateFlankerTrials(stimuli_flanker, 100);

// Log to check length and preview
console.log("Total trials:", flanker_trials_100.length);
console.log("Sample trial:", flanker_trials_100[0]);
// Test cases
console.log(add(1, 2)); // Expected output: 3
console.log(add(-1, 1)); // Expected output: 0
console.log(add(0, 0)); // Expected output: 0
console.log(add(1.5, 2.5)); // Expected output: 4
