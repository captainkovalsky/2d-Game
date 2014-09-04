var Game = (function(window, undefined){
	var stage,
		renderer,
		interactivity = true,
		sprites = [];
		
		function getRandomInt(min, max){
		  return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function animate(){
			requestAnimFrame(animate);
			renderer.render(stage);	
		}

		function hasCollision(toCheckSprite){
			var i = 0,
				hasCollision =  false,
				countSprites = sprites.length,
				currentSprite;

				if(sprites.length === 0){
					return false;
				}

			for( ;i < countSprites; i++){
				currentSprite = sprites[i];
				console.log('current sprite: ', currentSprite);
				console.log('to check sprite: ', toCheckSprite);
			}
			return false;
		}

	function createSprite(imagePath){
		var texture = PIXI.Texture.fromImage(imagePath, true);
		return new PIXI.Sprite(texture);
	}

	var init = function(){
		stage = new PIXI.Stage(GameConfig.BACKGROUND_COLOR, interactivity);
		renderer = PIXI.autoDetectRenderer(GameConfig.WIDTH, GameConfig.HEIGHT);
		var replaceRendererElement = document.getElementById("game");
		replaceRendererElement.appendChild(renderer.view);
	}	

	var createPutinSprite = function(){
		var putinSprite = createSprite("resources/poutin.jpg"),
			putinHeight = putinSprite.height,
			putinWidth = putinSprite.width,
			x = getRandomInt(putinWidth, GameConfig.WIDTH - putinWidth),
			y = getRandomInt(putinHeight, GameConfig.HEIGHT - putinHeight);
			putinSprite.anchor.x = 0.5;
			putinSprite.anchor.y = 0.5;
			putinSprite.position.x = x;
			putinSprite.position.y = y;
			putinSprite.setInteractive(interactivity);
		putinSprite.click = function(mouseData){
			console.log('add wound sprite');
		}
		return putinSprite;
	}

	var changePosition = function(toChangePositionSprite){
			var spriteHeight = toChangePositionSprite.height,
				spriteWidth = toChangePositionSprite.width,
				x = getRandomInt(spriteWidth, GameConfig.WIDTH - spriteWidth),
				y = getRandomInt(spriteHeight, GameConfig.HEIGHT - spriteHeight);
				toChangePositionSprite.position.x = x;
				toChangePositionSprite.position.y = y;
			return void(0);
	}

	var start = function(){
		var putinCount = 15,
			currentPutin;

		while(putinCount > 0){
			toAddPutin = createPutinSprite();
			while(hasCollision(toAddPutin)){
				changePisition(toAddPutin);
			}
			putinCount = putinCount - 1;
		sprites.push(toAddPutin);
		stage.addChild(toAddPutin);
		}
	
		requestAnimFrame(animate);
	}

	return{
		init: init,
		start: start
	}
})(window);