// env-config.js
const debug = process.env.NODE_ENV !== 'production'
const name = 'academy'

module.exports = {
    'process.env.BACKEND_URL': !debug ? `/${name}` : '',
}
