var Game = (function(window, undefined){
	var stage, renderer;

		function animate(){
			requestAnimFrame(animate);
			renderer.render(stage);	
		}

		function createSprite(imagePath){
			var texture = PIXI.Texture.fromImage(imagePath);
			return new PIXI.Sprite(texture);
		}
	var init = function(){
		stage = new PIXI.Stage(GameConfig.BACKGROUND_COLOR);
		renderer = PIXI.autoDetectRenderer(GameConfig.WIDTH, GameConfig.HEIGHT);
		var replaceRendererElement = document.getElementById("game");
		replaceRendererElement.appendChild(renderer.view);
	}	

	var start = function(){
		var poutinSprite = createSprite("resources/poutin.jpg");
		poutinSprite.anchor.x = 0.5;
		poutinSprite.anchor.y = 0.5;
		poutinSprite.position.x = GameConfig.WIDTH / 2;
		poutinSprite.position.y = GameConfig.HEIGHT / 2;
		stage.addChild(poutinSprite);
		requestAnimFrame(animate);
	}

	return{
		init: init,
		start: start
	}
})(window);