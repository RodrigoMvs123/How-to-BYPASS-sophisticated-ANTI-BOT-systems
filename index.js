import fetch from 'node-fetch'
import { HttpsProxyAgent } from 'http-proxy-agent'

const username = 'wucodewithania'
const password = 'aGxyEg2BKzhM'

const agent = new HttpsProxyAgent(
    `http://${username}:${password}@unblock.oxylabs.io:60000`
)

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const response = await fetch('https://www.walmart.com/search?q=games', {
    method: 'GET',
    agent: agent
})

console.log(await response.text())
