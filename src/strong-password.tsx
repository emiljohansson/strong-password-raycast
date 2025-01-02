import { Clipboard, showHUD } from '@raycast/api'

const pattern = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export function randomString() {
	let index = 6
	let value = ''
	while (index--) {
		const charIndex = Math.floor(Math.random() * pattern.length)
		value += pattern[charIndex]
	}
	return value
}

export default async function Command() {
	const password = `${randomString()}-${randomString()}-${randomString()}`
	await Clipboard.copy(password)
	await showHUD(password)
}
