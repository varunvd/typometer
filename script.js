function get_time(total_seconds) 
{
	function make_pretty(num)
	{
		return( num < 10  ? "0" : "")+num;
	}
	
	var hours = Math.floor(total_seconds/3600);
	total_seconds = total_seconds % 3600;
	
	var minutes = Math.floor(total_seconds/60);
	total_seconds = total_seconds%60;
	
	var seconds = Math.floor(total_seconds);
	
	hours = make_pretty(hours);
	minutes = make_pretty(minutes);
	seconds = make_pretty(seconds);

	var currentTimeString = hours + " : " + minutes + " : "+ seconds;
	
	return currentTimeString
}
function keys()
{
	var elapsed_seconds = 0;
	setInterval(function() {
		elapsed_seconds = elapsed_seconds+1;
		$('#tex').text(get_time(elapsed_seconds));
	}, 1000);
	$(document).keypress(function (e) {
		e.preventDefault();
		var lettercounter = 0;
		var keyID = e.which;
		if(e.keyCode != 16) {
			if($('.letter:first').text().charCodeAt(0) === e.which || $('.letter:first').text().charCodeAt(0) === 160)
			{
				$('.letter:first').removeClass('letter').addClass('correctletter');
			}
			if($('.letter').length==0)
				changeit(get_time(elapsed_seconds))			
		 	
}
})
}
function changeit(elapsed_seconds)
{
	$('#tex').detach()
	elapsed_seconds="Total time taken is "+elapsed_seconds
	$('#result').text(elapsed_seconds)	
}
function submit_it()
{
	var sentence = document.getElementById('req').value
	$("#req").detach()
	$("#math").detach()
	var letters = sentence.split('')
	var line = $('<div class="letters"></div>');
	$(letters).each(function() {
		var letter = this;
		if(letter == ' ')
		{
			letter = '&nbsp;';
		}
		line.append($('<div class="letter"></div>').html(letter));
	});
	$('#word-container').append(line)
	keys()
}
		



