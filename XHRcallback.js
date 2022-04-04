var XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        xhr.status === 200 ? console.log(xhr.header) : console.error('error')
    }
}
xhr.open('GET', 'https://google.com')
xhr.send()