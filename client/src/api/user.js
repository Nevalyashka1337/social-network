import { API_URL } from '../config'

export default {
	getUser: username => {
		return new Promise((resolve, reject) => {
			fetch(`${API_URL}/api/user/${username}`, {
				credentials: 'include'
			})
			.then(body => body.json()).then(res => {
				res.success ? resolve(res.user) : reject()
			}).catch(() => reject())
		})
	}
}