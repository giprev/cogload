// Function to create display stimulus + countdown bar
function display_flanker(stimulus) {
	var stim = stimuli_flanker[stimulus].stim;

	return "<div style='font-size: 10pt; position: relative; left: 5%; display: flex; align-items: center;'>Time left<div id = 'countdownbar' style = 'margin: 0px 25px;'><div id = 'timeleft'></div></div><div style='align-self: baseline;'>Score<br><span style='font-size:27pt;'><b>" + total_flanker + "</b></span></div></div><div style='height: 130px;'></div>" +
	"<img src='" + stim + "' width='290'><p><br></p>"
}

var createFlankerBlock = function(flanker) {
	var trial_flanker = {
		type: "jspsych-html-button-response",
		stimulus: function() { return display_flanker(flanker[block_trial_count]); },
		choices: function() { return [stimuli_flanker[flanker[block_trial_count]].resp1, stimuli_flanker[flanker[block_trial_count]].resp2]; },
		button_html: function() {
			var choice1 = '<button class="choiceStyle" style="font-family: Open Sans; font-weight: 1000;"><div style="color: black; font-size: 34pt; font-weight: 200;">_</div><img src=%choice% width="290"></button>'
			var choice2 = '<button class="choiceStyle" style="font-family: Open Sans; font-weight: 1000;"><div style="color: black; font-size: 34pt; font-weight: 200;">_</div><img src=%choice% width="290"></button>'

			return [choice1, choice2];
		},  
		margin_horizontal: '53px',
		on_start: function() {
			// Set up timer if it's the first trial
			if (block_trial_count == 0) {
				block_time_limit = practice_indicator == 1 ? practice_duration : main_duration;
				block_start = Date.now();

				end_timer = setTimeout(function() {

					block_trial_count = 0;
					timeout = 1;

					// console.log("Block timed out at this trial", block_trial_count, timeout); // Here to debug

					// this function is all you need to end the current timeline
					jsPsych.endCurrentTimeline();

				}, block_time_limit);
			}
		},
		on_load: function() {
			countdown(block_start, block_time_limit);
		},
		on_finish: function(data) {
			data.block_trial_count = timeout == 1 ? block_trial_count : block_trial_count + 1;
			data.task = "flanker";
			data.practice_indicator = practice_indicator;
			data.item = flanker[block_trial_count]; // flanker here is the array of trials, 100 between 1:16 for practice, 500 for main test. Data item is the line number of the stimuli and choices associated
			data.stim = stimuli_flanker[flanker[block_trial_count]].stimsign;
			data.resp1 = stimuli_flanker[flanker[block_trial_count]].resp1sign;
			data.resp2 = stimuli_flanker[flanker[block_trial_count]].resp2sign;
			data.correct_response = stimuli_flanker[flanker[block_trial_count]].correct_response;
			data.condition = stimuli_flanker[flanker[block_trial_count]].condition;
			data.accuracy = data.response == stimuli_flanker[flanker[block_trial_count]].correct_response ? 1 : 0;
			data.timeout = timeout;

			switch(timeout) {
				case 0:
					total_flanker = data.accuracy == 1 ? total_flanker + 1 : total_flanker - 1;
					break;
				case 1:
					total_flanker = total_flanker;
					break;
			}

			data.score_after_trial = total_flanker;

			// console.log(data, block_time_limit - (Date.now()-block_start), (Date.now() - block_start)) // Here to debug
		}
	}

	var feedback_flanker = {
		type: "jspsych-html-button-response",
		stimulus: function() { return display_flanker(flanker[block_trial_count]); },
		choices: function() { return [stimuli_flanker[flanker[block_trial_count]].resp1, stimuli_flanker[flanker[block_trial_count]].resp2]; },
		button_html: function() {
			var resp = jsPsych.data.get().last(1).values()[0].response;
			var correct_response = jsPsych.data.get().last(1).values()[0].correct_response;

			switch (resp) {
				case 0:
					var feedback1 = correct_response == 0 ? '<div style="color: #1ED760; font-size: 34pt; font-weight: 200;">&#10004;</div>' : '<div style="color: red; font-size: 34pt; font-weight: 200;">&#10008;</div>';
					var feedback2 = '<div style="color: black; font-size: 34pt; font-weight: 200;">_</div>';
					break;
				case 1:
					var feedback1 = '<div style="color: black; font-size: 34pt; font-weight: 200;">_</div>';
					var feedback2 = correct_response == 1 ? '<div style="color: #1ED760; font-size: 34pt; font-weight: 200;">&#10004;</div>' : '<div style="color: red; font-size: 34pt; font-weight: 200;">&#10008;</div>';
					break;
			}

			var choice1 = '<button class="choiceStyle" style="font-family: Open Sans; font-weight: 1000; color: #0000FF;">' + feedback1 + '<img src=%choice% width="290"></button>'
			var choice2 = '<button class="choiceStyle" style="font-family: Open Sans; font-weight: 1000; color: #0000FF;">' + feedback2 + '<img src=%choice% width="290"></button>'

			return [choice1, choice2];
		},
		margin_horizontal: '53px',
		on_start: function() {
			block_trial_count++
		},
		on_load: function() {
			countdown(block_start, block_time_limit);
		},
		trial_duration: 500,
		response_ends_trial: false
	}

	var block_flanker = {
		timeline: [trial_flanker, feedback_flanker],
		loop_function: function() {
			return true;
		}
	}

	return block_flanker;
}

function countdown(start, timelimit) {

	var timeleft_bar = document.getElementById("timeleft");
	var timeleft_width = (timelimit - (Date.now() - start))*100/timelimit;
	timeleft_bar.style.width = timeleft_width + "%";

	function shorten_timebar() {
		if (timeleft_width <= 0) {
			clearInterval(update_timeleft)
		} else {
			timeleft_width -= 10*100/timelimit // 10: time interval set in setInterval;
			timeleft_bar.style.width = timeleft_width + "%";
		}
	}

	var update_timeleft = setInterval(shorten_timebar, 10);
}