
const ar = "../static/images/ar.PNG";
const al = "../static/images/al.PNG";
const mr_fl = "../static/images/mr_fl.PNG";
const ml_fr = "../static/images/ml_fr.PNG";
const rarr = "../static/images/rarr.PNG";
const larr = "../static/images/larr.PNG";

//define the stimuli array
const stimuli_flanker = [
  { stim: al, stimsign: "<<<<<", resp1: ar, resp1sign: ">>>>>", resp2: al, resp2sign: "<<<<<", correct_response: 1, condition: 1 },
  { stim: al, stimsign: "<<<<<", resp1: al, resp1sign: "<<<<<", resp2: ar, resp2sign: ">>>>>", correct_response: 0, condition: 1 },
  { stim: ar, stimsign: ">>>>>", resp1: ar, resp1sign: ">>>>>", resp2: al, resp2sign: "<<<<<", correct_response: 0, condition: 1 },
  { stim: ar, stimsign: ">>>>>", resp1: al, resp1sign: "<<<<<", resp2: ar, resp2sign: ">>>>>", correct_response: 1, condition: 1 },
  { stim: al, stimsign: "<<<<<", resp1: ml_fr, resp1sign: ">><>>", resp2: mr_fl, resp2sign: "<<><<", correct_response: 0, condition: 2 },
  { stim: al, stimsign: "<<<<<", resp1: mr_fl, resp1sign: "<<><<", resp2: ml_fr, resp2sign: ">><>>", correct_response: 1, condition: 2 },
  { stim: ar, stimsign: ">>>>>", resp1: ml_fr, resp1sign: ">><>>", resp2: mr_fl, resp2sign: "<<><<", correct_response: 1, condition: 2 },
  { stim: ar, stimsign: ">>>>>", resp1: mr_fl, resp1sign: "<<><<", resp2: ml_fr, resp2sign: ">><>>", correct_response: 0, condition: 2 },
  { stim: mr_fl, stimsign: "<<><<", resp1: al, resp1sign: "<<<<<", resp2: ar, resp2sign: ">>>>>", correct_response: 0, condition: 3 },
  { stim: mr_fl, stimsign: "<<><<", resp1: ar, resp1sign: ">>>>>", resp2: al, resp2sign: "<<<<<", correct_response: 1, condition: 3 },
  { stim: ml_fr, stimsign: ">><>>", resp1: al, resp1sign: "<<<<<", resp2: ar, resp2sign: ">>>>>", correct_response: 1, condition: 3 },
  { stim: ml_fr, stimsign: ">><>>", resp1: ar, resp1sign: ">>>>>", resp2: al, resp2sign: "<<<<<", correct_response: 0, condition: 3 },
  { stim: mr_fl, stimsign: "<<><<", resp1: mr_fl, resp1sign: "<<><<", resp2: ml_fr, resp2sign: ">><>>", correct_response: 1, condition: 4 },
  { stim: mr_fl, stimsign: "<<><<", resp1: ml_fr, resp1sign: ">><>>", resp2: mr_fl, resp2sign: "<<><<", correct_response: 0, condition: 4 },
  { stim: ml_fr, stimsign: ">><>>", resp1: mr_fl, resp1sign: "<<><<", resp2: ml_fr, resp2sign: ">><>>", correct_response: 0, condition: 4 },
  { stim: ml_fr, stimsign: ">><>>", resp1: ml_fr, resp1sign: ">><>>", resp2: mr_fl, resp2sign: "<<><<", correct_response: 1, condition: 4 }
];