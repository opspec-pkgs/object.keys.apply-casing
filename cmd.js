const camelcaseKeys = require('camelcase-keys')
const kebabcaseKeys = require('kebabcase-keys')
const snakecaseKeys = require('snakecase-keys')
let object = require('/object.json')
const fs = require('fs')

const { casing } = process.env
if ('camel' === casing) {
    object = camelcaseKeys(object)
} else if ('kebab' === casing) {
    object = kebabcaseKeys(object)
} else if ('snake' === casing) {
    object = snakecaseKeys(object)
} else {
    console.log(`unexpected casing: ${casing}`)
    process.exit(1)
}

fs.writeFileSync(
    '/object.json',
    JSON.stringify(object)
)