function generateOnePeriodFromToday(period) {
	var oneWeek = new Array();
	var temp = new Date();
	var period = 7;

	for (var i = 0; i < period; i++) {
		oneWeek.push(new Date(temp));
		temp.setDate(temp.getDate() + 1);
	};

	return oneWeek;
}