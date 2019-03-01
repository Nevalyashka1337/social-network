export default {
	checkAuth: () => {
		return new Promise((res, rej) => {
			setTimeout(() => {
				Math.random() > 0.5 ? res() : rej()
			}, 1500);
		})
	} 
}