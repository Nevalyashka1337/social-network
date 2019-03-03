export default {
	getUsers: () => {
		return new Promise((resolve, reject) => {
			fetch('http://localhost:3001/api/users', {
				credentials: 'include'
			})
			.then(body => body.json()).then(res => {
				res.success ? resolve(res.users) : reject()
			}).catch(() => reject())
		})
	}
}