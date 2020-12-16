'use strict'

const {replaceEntities, escapeHtml} = require('remarkable').utils

const rule = (imageRule) => (tokens, i, opt, env) => {
	const img = imageRule(tokens, i, opt, env)
	return '<figure>' + img + '<figcaption>'
	+ (tokens[i].title ? escapeHtml(replaceEntities(tokens[i].title)) : '')
	+ '</figcaption></figure>'
}

const plugin = (md) => {
	md.renderer.rules.image = rule(md.renderer.rules.image)
}

module.exports = plugin
