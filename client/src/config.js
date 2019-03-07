const CONFIG = {}

if ( process.env.NODE_ENV === 'development' ) {
	CONFIG.API_URL = 'http://localhost:3001'
} else if ( process.env.NODE_ENV === 'production' ) {
	CONFIG.API_URL = 'http://localhost:3002'
}

export default CONFIG
