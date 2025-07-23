const practice_duration = 30000; // duration of practice
const main_duration = 90000; // duration of main task
let total_flanker = 0;
let block_trial_count = 0;
let practice = 1; // Indicator of whether the trials being shown belong to the practice phase
let timeout = 0; // Indicator whether trial was responded to when the task timed out
let block_start;
let block_time_limit;
let items_flanker = Array.from(Array(16).keys()); // Array from 0-15