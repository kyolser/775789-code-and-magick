'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_MAX_WIDTH = 150;
var GAP = 50;
var CLOUD_GAP = 10;
var TEXT_HEIGHT = 20;
var maxTime;
var result;

window.renderStatistics = function (ctx, names, times) {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
	ctx.fillRect(CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
	ctx.fillStyle = 'white';
	ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
	ctx.fillStyle = 'black';
	ctx.font = '16px PT Mono';
	ctx.textBaseline = 'hanging';
	ctx.fillText('Ура вы победили!', CLOUD_X + GAP, TEXT_HEIGHT);
	ctx.fillText('Список результатов:', CLOUD_X + GAP, TEXT_HEIGHT * 2);
	window.maxTimeFunction(ctx, names, times)
	window.renderResult(ctx, names, times)
}

window.maxTimeFunction = function (ctx, names, times) {
	maxTime = times[0];
	for (var index = 0; index < times.length; index++) {
		if (maxTime < times[index]) {
			maxTime = times[index];
		}
	}
}

window.renderResult = function (ctx, names, times) {
	for (var index2 = 0; index2 < times.length; index2++) {
		result = Math.round(times[index2]) * BAR_MAX_WIDTH / maxTime;
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.fillText(names[index2], CLOUD_X + GAP + ((GAP + BAR_WIDTH) * index2), CLOUD_HEIGHT - TEXT_HEIGHT);
		ctx.fillText(Math.round(times[index2]), CLOUD_X + GAP + ((GAP + BAR_WIDTH) * index2), (TEXT_HEIGHT * 3) + (BAR_MAX_WIDTH - result));
		if (names[index2] === 'Вы') {
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
		} else {
			ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
		}
		ctx.fillRect(CLOUD_X + GAP + ((GAP + BAR_WIDTH) * index2), (TEXT_HEIGHT * 4) + (BAR_MAX_WIDTH - result), BAR_WIDTH, result);
	}
};



