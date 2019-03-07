import config from '../config'

const { API_URL } = config

export default {
	getUsers: () => {
		return new Promise((resolve, reject) => {
			fetch(`${API_URL}/api/users`, {
				credentials: 'include'
			})
			.then(body => body.json()).then(res => {
				res.success ? resolve(res.users) : reject()
			}).catch(() => reject())
		})
	}
}