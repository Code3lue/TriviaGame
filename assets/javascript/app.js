var answers = ["Yes", "bacho", "emt", "all"];


var data = $('input');


var correct = 0;
var incorrect = 0;
var timer = 20;

function startGame() {

	for ( var i = 0; i < data.length; i++) {
		if (data[i].checked) {

			if (answers.indexOf(data[i].value) !== -1) {

				correct++;

			} //end if


		else {
			
			incorrect++;

			} //end else statement
		} //end if statement

		
	} //end for loop statement

	var missed = correct + incorrect;

	if (missed !== 4) {
		incorrect += (4 - missed);
	}

		

		
	console.log(correct);
	console.log(incorrect);
}; // end function





$(".start").on("click", function() {

	$(".start").css('display', 'none');
	$(".data").css('display', 'block');

	var startTimer = setInterval(function() {
		timer--;
		$(".counter").html('Time Remaining: ' + timer)

		if(timer == 0) {

			clearInterval(startTimer);

			$('.data').css('display', 'none');
			$(".timeUp").html("Times Up!");
			$(".right").html('You have ' + correct + ' answers right');
		$(".wrong").html('You have ' + incorrect + ' answers wrong');
			startGame();

		}

	}, 1000);

	$(".done").on("click", function() {

		startGame();

		$(".right").html('You have ' + correct + ' answers right');
		$(".wrong").html('You have ' + incorrect + ' answers wrong');
		$(".data").css('display', 'none');

		
	});
});