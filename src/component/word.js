const amit=[
	"gandu",
	"chutiya",
	"mota",
	"roneighldo",
	"lund",
	"terimaakichut",
	"saale",
	"lulli",
	"dukaan",
	"jethalal",
	"heater",
	"gym-boy",
	"protein",
	"diet",
	"rajai",
	"landu",
	"peanutbutter",
	"eggs",
	"bhopali",
	"hero",
	"hawasi",
	"hello-ji",
	"gandi-baat",
	"oooobhyiiii",
	"randi",
	"fifa"
];

 function randomword(){
 	return amit[Math.floor(Math.random()*amit.length)];
}

export {randomword};