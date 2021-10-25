/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production'
const name = 'academy'

module.exports = {
    assetPrefix: !debug ? `/${name}/` : '',
    reactStrictMode: true,
}
