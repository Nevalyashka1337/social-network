export default {
	checkAuth: () => {
		return new Promise((resolve, reject) => {
			fetch('http://localhost:3001/api/me', {
				credentials: 'include'
			}).then(res => res.json()).then(res => {
				res.success ? resolve(res.me) : reject()
			}).catch(() => {
				reject()
			})
		})
	},

	signin: (username, password) => {
		return new Promise((resolve, reject) => {
			fetch('http://localhost:3001/api/auth/signin', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			}).then(res => res.json()).then(res => {
				res.success ? resolve(res.me) : reject()
			}).catch(() => {
				reject()
			})
		})
	},

	signup: (username, password) => {
		return new Promise((resolve, reject) => {
			fetch('http://localhost:3001/api/auth/signup', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			}).then(res => res.json()).then(res => {
				res.success ? resolve(res.me) : reject()
			}).catch(() => {
				reject()
			})
		})
	}
}