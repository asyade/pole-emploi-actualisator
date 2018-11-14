const Nightmare = require('nightmare')
const nightmare = Nightmare({ show:  true })

const config = {
    id: 'XXXXXXXXX',
    secret: 'XXXXXX',
    code: 'XXXX'
}

nightmare
    .goto('https://entreprise.pole-emploi.fr/accueil/particulieremployeur')
    .click('.menu-link-candidat')
    .wait('#identifiant')
    .type('#identifiant', config.id)
    .click('.btn-lg')
    .wait('#val_cel_0')
    .wait('#val_cel_1')
    .wait('#val_cel_2')
    .wait('#val_cel_3')
    .wait('#val_cel_4')
    .wait('#val_cel_5')
    .wait('#val_cel_6')
    .wait('#val_cel_7')
    .wait('#val_cel_8')
    .wait('#val_cel_9')
    .wait('#codepostal')
    .type('#codepostal', config.code)
    .evaluate(config => {
        var passwordKeys = {}
        for (var i = 0; i < 10; i++) {
            var elem = document.getElementById('val_cel_' + i)
            var img = window.getComputedStyle(elem).backgroundImage
            img = img.substr(img.length - 7, 1)
            passwordKeys[parseInt(img)] = elem.id
        }
        console.log(passwordKeys)
        Array.from(config.secret).map(elem => document.getElementById(passwordKeys[parseInt(elem)]).click())
    }, config)
    .click('.btn-lg')
    .wait('.situation-content')
    .evaluate(() => {
        if (document.querySelector('.situation-content ul > li > .info').innerText.substr(0, 5) === 'Valid') {
            console.log('No refresh needed !')
        }
    })
    .wait(100000)
    .end()
    .then(console.log)
    .catch(console.error)
