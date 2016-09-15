function LoadDictionary(word) {
	$.get("/scripts/typo/dictionaries/en_US/en_US.aff", function (affData) {
		document.getElementById("affDataOut").innerHTML = "<p>AFF DATA LOADED</p>";
		$.get("/scripts/typo/dictionaries/en_US/en_US.dic", function (wordData) {
			document.getElementById("wordDataOut").innerHTML = "<p>WORD DATA LOADED</p>";
			var dictionary = new Typo("en_US", affData, wordData);
			var output = dictionary.check(word);
			return output;

		});
	});
};



function getLetters() {
	sizeArray = $("wordSizes").val().split('');
	lengthSize = sizeArray.length;
	letterArray = $("#puzzle").val().split('');
	lengthPuzzle = letterArray.length;
	var word = ' '

	for (i = 0; i < 9; i++) {
		var pos = i + 1;
		for (j = 0; j < sizeArray[0]; j++) {
			word = word + letterArray[mapping3x3[]];
			for
		}
	}
}

var i, j;
var letterArray = [];
var sizeArray = [];
var lengthPuzzle;
var lengthSize;
var oldPos = 0;
var newPos = 0;
var mapping3x3 = [{
		1, {
			2, 4, 5
		}
	},
	{
		2, {
			1, 3, 4, 5, 6
		}
	},
	{
		3, {
			2, 5, 6
		}
	},
	{
		4, {
			1, 2, 5, 7, 8
		}
	},
	{
		5, {
			1, 2, 3, 4, 6, 7, 8, 9
		}
	},
	{
		6, {
			2, 3, 5, 8, 9
		}
	},
	{
		7, {
			4, 5, 8
		}
	},
	{
		8, {
			4, 5, 6, 7, 9
		}
	},
	{
		9, {
			5, 6, 8
		}
	}
						 		];