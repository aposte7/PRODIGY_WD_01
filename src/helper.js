/**
 * Links a parent element with a child HTML string using a specified method.
 * @param {Element|string} parent - The parent element or the selector for the parent element (e.g., "#parent" or ".parent").
 * @param {string} childHTML - HTML string.
 * @param {string} [method='innerHTML'] - The insertion method: 'innerHTML', 'append', 'prepend', 'before', 'after'.
 * @returns {Object} - An object containing the status and message of the operation.
 */
export function linkParent(parent, childHTML, method = 'innerHTML') {
	const parentElm =
		typeof parent === 'string' ? document.querySelector(parent) : parent

	const methods = {
		innerHTML: () => (parentElm.innerHTML = childHTML),
		append: () => parentElm.insertAdjacentHTML('beforeend', childHTML),
		prepend: () => parentElm.insertAdjacentHTML('afterbegin', childHTML),
		before: () => parentElm.insertAdjacentHTML('beforebegin', childHTML),
		after: () => parentElm.insertAdjacentHTML('afterend', childHTML),
	}

	let condition = {
		status: 'not-started',
		message: '',
	}

	// Check if parent element exists
	if (!parentElm) {
		return {
			...condition,
			status: 'error',
			message: 'Parent element not found',
		}
	}

	// Validate the method provided
	try {
		if (!methods[method]) {
			throw new Error('Invalid method specified')
		}

		methods[method]()

		return {
			...condition,
			status: 'completed',
			message: `HTML inserted successfully using method: ${method}`,
		}
	} catch (err) {
		console.log(`error occurred while adding children to ${parent}`)
		return {
			...condition,
			status: 'error',
			message: err.message || 'Failed to insert HTML',
		}
	}
}
