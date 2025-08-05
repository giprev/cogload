const level = 3; //available levels: 0, 1, 2, 3
const fixationDuration = 500;
const letterDuration = 1500;
const feedBackDuration = 200; // 1000

const language = en; //available languages: english (en), hungarian (hu), french (fr), spanish (es) and portuguese (pt)

const practice_duration = 30000; // duration of practice
const main_duration = 15000; // duration of main task
let total_flanker = 0;
let block_trial_count = 0;
let practice_indicator = 0; // Indicator of whether the trials being shown belong to the practice phase A !! Practice déjà défini dans experiment
let timeout = 0; // Indicator whether trial was responded to when the task timed out
let block_start;
let block_time_limit;
let items_flanker = Array.from(Array(16).keys()); // Array from 0-15