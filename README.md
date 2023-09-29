# How-to-BYPASS-sophisticated-ANTI-BOT-systems

https://www.youtube.com/watch?v=uM2bk21_DiI 



Web Unblocker
A Web Unblocker help us bypass complex anti-scraping measures by appearing like an organic user on a website

IP Address
An Internet Protocol (IP) address is a unique numerical identifier for every device or network that connects to the internet

What is a Web Unblocker ?
In the realm of ‘Web Scraping’
A Web Unblocker help us bypass complex anti-scraping measures by appearing like an organic user on a website

https://github.com/oxylabs/web-unblocker 

Steps to bypass anti-bot systems
By using the Web Unblocker used for this tutorial
ML-driven proxy management
Dynamic browser fingerprinting 
Automatic retries 
JavaScript rendering
Worldwide access

Oxylabs UI
https://oxylabs.io/ 
Overview
Web Unblocker
Get started
Start free trial
Create API user

Scrap Walmart
Using Python

Visual Studio Code
EXPLORER
OPEN EDITORS 
.vscode
script.py

script.py
import requests
url = ''
custom_headers = {
    'user-agent': 'Mozilla/5.0 (Macintosh, Intel Mac OS X 10_15_7) AppleWebKit/537.36(KHTML, like Genco) Chrome/108.0.0.0 Safari/537/36',
    'accept-language': 'en-US,en;g=0.9'
}

response =  request.get(url, headers=custom_headers)

print(response.text)

Url Address 
https://www.walmart.com/search?q=games 

Visual Studio Code
Terminal
pip3 install requests

Visual Studio Code
EXPLORER
OPEN EDITORS 
.vscode
script.py

script.py
import requests
url = 'https://www.walmart.com/search?q=games'
custom_headers = {
    'user-agent': 'Mozilla/5.0 (Macintosh, Intel Mac OS X 10_15_7) AppleWebKit/537.36(KHTML, like Genco) Chrome/108.0.0.0 Safari/537/36',
    'accept-language': 'en-US,en;g=0.9'
}

proxies = {
    'http': 'http://wucodewithania:aGxyEg2BzhM@unblock.oxylabs.io:60000',
    'https': 'http://wucodewithania:aGxyEg2BzhM@unblock.oxylabs.io:60000'
}

response =  requests.get(
    url, 
    proxies,
    verify=False,
    headers=custom_headers)

soup = bs4.BeautifulSoup(response.text, "lxml")

product_title = soup.find('span', id="product_title")

print(product_title.getText())

Visual Studio Code
Terminal
pip3 install bs4

Visual Studio Code
EXPLORER
OPEN EDITORS 
.vscode
script.py

script.py
import requests
import bs4

url = 'https://www.walmart.com/search?q=games'
custom_headers = {
    'user-agent': 'Mozilla/5.0 (Macintosh, Intel Mac OS X 10_15_7) AppleWebKit/537.36(KHTML, like Genco) Chrome/108.0.0.0 Safari/537/36',
    'accept-language': 'en-US,en;g=0.9'
}

proxies = {
    'http': 'http://wucodewithania:aGxyEg2BzhM@unblock.oxylabs.io:60000',
    'https': 'http://wucodewithania:aGxyEg2BzhM@unblock.oxylabs.io:60000'
}

response =  requests.get(
    url, 
    proxies,
    verify=False,
    headers=custom_headers)

soup = bs4.BeautifulSoup(response.text, "lxml")

product_title = soup.find('span', id="product_title")

print(product_title.getText())

Visual Studio Code
Terminal
pip3 install lxml

Visual Studio Code
Terminal
pip3 install bs4

Visual Studio Code
EXPLORER
OPEN EDITORS 
.vscode
script.py

script.py
import requests
import bs4

url = 'https://www.walmart.com/search?q=games'
custom_headers = {
    'user-agent': 'Mozilla/5.0 (Macintosh, Intel Mac OS X 10_15_7) AppleWebKit/537.36(KHTML, like Genco) Chrome/108.0.0.0 Safari/537/36',
    'accept-language': 'en-US,en;g=0.9'
}

proxies = {
    'http': 'http://wucodewithania:aGxyEg2BzhM@unblock.oxylabs.io:60000',
    'https': 'http://wucodewithania:aGxyEg2BzhM@unblock.oxylabs.io:60000'
}

response =  requests.get(
    url, 
    proxies,
    verify=False,
    headers=custom_headers)

soup = bs4.BeautifulSoup(response.text, "lxml")

product_title = soup.find('span', attrs={"data-automation-id":"product_title"})

print(product_title.getText())

Run Script

Scrape Google
Using JavaScript

Visual Studio Code
EXPLORER
OPEN EDITORS 
web-unblocker

Visual Studio Code
Terminal
npm init

Visual Studio Code
EXPLORER
OPEN EDITORS 
web-unblocker
package.json 

package.json
{
  "name": "web-unblocker",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

Visual Studio Code
EXPLORER
OPEN EDITORS 
web-unblocker
package.json 

package.json
{
  "type": "module",
  "name": "web-unblocker",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

Visual Studio Code
EXPLORER
OPEN EDITORS 
web-unblocker
package.json 
index.js

index.js
import fetch from 'node-fetch'
import { HttpsProxyAgent } from 'http-proxy-agent'

Visual Studio Code
Terminal
npm i node-fetch https-proxy-agent

Visual Studio Code
EXPLORER
OPEN EDITORS 
web-unblocker
package.json 
index.js

index.js
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

Run Script
Visual Studio Code
Terminal
node index.js 


