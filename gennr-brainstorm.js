/* gennr ideas

This isn't real code.

*/
let artboard = new gennr.plotter()

artboard
	.pageSize(200,200)
	.defaultPen(SHARPIE, "0x000000")
	.background("0xdddddd")
	.onStart(myLogger)
	.onIteration(mylogger)
	.onComplete(myLogger)

let pattern = new gennr.pattern()

pattern
	.origin(gennr.pos.centre)
	.style(gennr.styles.circular)
	.direction(gennr.dir.outwardSpiral)
	.randomize(myRandomizer)
	.repeater(myRepeater)

artboard.draw(pattern)
