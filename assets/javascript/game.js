<script>
	
	// Generates the number to guess.
	var number = Math.floor((Math.random() * 102) + 19);
	// Generates the values for each gem.
	var blue = Math.floor((Math.random() * 12) + 1);
	var red = Math.floor((Math.random() * 12) + 1);
	var yellow = Math.floor((Math.random() * 12) + 1);
	var green = Math.floor((Math.random() * 12) + 1);
	// Setting initial values to 0.
	var guessTotal = 0;
	var wins = 0;
	var losses = 0;
	// Displays the number you need to guess on the page.
	$(".numberdisplay").html(number);
	// On click events for each gem.
	$(".bluegem").click(function() {
		update(blue);
	});
	$(".redgem").click(function() {
		update(red);
	});
	$(".yellowgem").click(function() {
		update(yellow);
	});
	$(".greengem").click(function() {
		update(green);
	});
	$(".dropdown").click(function() {
		$(".instructions").toggle("slow");
	})
	// The reset function is called when you win or lose a game.
	function reset() {
		// Generates a new number to guess.
		number = Math.floor((Math.random() * 102) + 19);
		// Displays that number on the page.
		$(".numberdisplay").html(number);
		// Generates new values for the gems.
		blue = Math.floor((Math.random() * 12) + 1);
		red = Math.floor((Math.random() * 12) + 1);
		yellow = Math.floor((Math.random() * 12) + 1);
		green = Math.floor((Math.random() * 12) + 1);
		// Resets the total guess to 0.
		guessTotal = 0;
		// Displays the guess total.
		$(".guessdisplay").html(guessTotal);
	};
	// This function updates the user's total guess. 
	function update(color) {
		// Increases the total guess by the value of the chosen gem.
		guessTotal += color;
		// Removes the old total and replaces it with the new total. 
		$(".guessdisplay").empty();
		$(".guessdisplay").append(guessTotal);
		// Checks to see if you win or lose.
		if (guessTotal > number) {
			// Adds a loss.
			losses++;
			// Displays updated losses.
			$("#lossesdisplay").html(losses);
			// Calls the reset function to reset the game.
			reset();

		} else if (guessTotal == number) {
			// Adds a win.
			wins++;
			// Displays the updated wins.
			$("#winsdisplay").html(wins);
			// Calls the reset function to reset the game.
			reset();
		};
	};
</script>
