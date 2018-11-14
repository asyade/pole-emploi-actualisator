# pole-emploi-actualisator

Un simple script qui a l'aide de nightmarejs s'occupe d'actualiser votre situation Pole Emploi.

Pour le moment le script ne s'occupe que de l'authentification mais le mois prochain (à compter du 11/14) j'ajouterais la saisie automatique des champs et une configuration heroku ainsi qu'une routine mensuelle :)

## Utilisation

Il suffit de modifier la configuration du script, ouvrez index js et à la ligne 5, 6 et 7 remplacez les X par (respectivement) votre identifiant votre mot de passe et votre code postale

Assurez-vous d'avoir node et npm installer sur la machine et ensuite pour le premier lancement tapez (dans le dossier du script)
`npm install` puis pour chaque actualisation
`node index.js`
