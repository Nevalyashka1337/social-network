export default {
	getUser: username => {
		return new Promise((resolve, reject) => {
			fetch(`http://localhost:3001/api/user/${username}`, {
				credentials: 'include'
			})
			.then(body => body.json()).then(res => {
				res.success ? resolve(res.user) : reject()
			}).catch(() => reject())
		})
	}
}