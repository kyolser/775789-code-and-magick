
var renderStatistics = function(ctx, names, times){
	var CLOUD_X = 100; 
	var CLOUD_Y = 10; 
	var CLOUD_WIDTH = 420; 
	var CLOUD_HEIGHT = 270; 
	var BAR_WIDTH = 40;
	var BAR_MAX_WIDTH = 150;
	var GAP = 50;
	var CLOUD_GAP = 10;
	var TEXT_HEIGHT = 20

	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
	ctx.fillRect(CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
	ctx.fillStyle = 'white';
	ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
	ctx.fillStyle = 'black';
	ctx.font = '16px PT Mono';
	ctx.textBaseline = 'hanging';
	ctx.fillText('Ура вы победили!', CLOUD_X + GAP, TEXT_HEIGHT);
	ctx.fillText('Список результатов:', CLOUD_X + GAP, TEXT_HEIGHT * 2);

	var maxTime = times[0];
	for (var i = 0; i < times.length; i++){
		if (maxTime < times[i]){
			maxTime = times[i];
		}
	}

	var result;
	for (var i = 0; i < times.length; i++){
		result = Math.round(times[i]) * BAR_MAX_WIDTH/maxTime;
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.fillText(names[i], CLOUD_X + GAP + ((GAP + BAR_WIDTH) * i), CLOUD_HEIGHT - TEXT_HEIGHT);
		ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + ((GAP + BAR_WIDTH) * i), (TEXT_HEIGHT * 3) + (BAR_MAX_WIDTH - result));
		names[i] === "Вы" ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
		ctx.fillRect(CLOUD_X + GAP + ((GAP + BAR_WIDTH) * i), (TEXT_HEIGHT * 4) + (BAR_MAX_WIDTH - result), BAR_WIDTH, result);
	}
}
