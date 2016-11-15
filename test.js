'use strict'

const Remarkable = require('remarkable')
const disparity = require('disparity')

const figure = require('.')

const assertEqualString = (a, b) => {
	if (a === b) return
	process.stdout.write(disparity.chars(a, b) + '\n')
	process.exit(1)
}



const expected = `\
<p>foo <figure><img src="url" alt="alt" title="title"><figcaption>title</figcaption></figure> bar</p>`

const generated = new Remarkable()
	.use(figure)
	.render('foo ![alt](url "title") bar')
	.trim()

assertEqualString(generated, expected)
