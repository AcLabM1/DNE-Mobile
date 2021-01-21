# DNE-Mobile

## Description

DNE-Mobile contient toutes les sources de la partie mobile de l'application DNE, effectuée dans le cadre du cours AcLab au sein de la promotion Master Informatique, Ingénierrie et Innovation 2022 à l'Université Catholique de Lille.
Celle-ci permet aux étudiants de visualiser leurs notes, leurs absences, leur planning, intéragir avec leur tuteur, etc..
Pour les tuteurs, elle permettra de visualiser les cours que l'étudiant suit, d'intéragir avec lui ou ses responsables.
Pour les responsables, elle permettra la saisie des notes, l'interaction avec l'étudiant / le tuteur, etc..

## Maquettage

Pour le développement de cette application nous avons réalisé des maquettes en amont via le logiciel Adobe XD, idéal pour réaliser des maquettes pour des applications mobiles. Des modifications ont été aportées à la version finale, cependant, ces maquettes ont été notre ligne de conduite pour le développement de l'application. Voici quelques images tirées de notre maquette :

![alt text](https://ibb.co/0G0zgkd) ![alt text](https://ibb.co/zHh0bdy) ![alt text](https://ibb.co/zHh0bdy)

Maquette complète disponible ci-après : https://xd.adobe.com/view/54702321-ff21-4b5b-bbce-e3e56ab45cb7-0123/?fullscreen

## Installation

### Prérequis

#### Node

Il faudra installer **nodejs** et **npm**. Voici les commandes à lancer sous Ubuntu 20.04 :
```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

#### Expo

Il faudra égalemer installer **expo**. Voici la commande à lancer sous Ubuntu 20.04 :

```
npm install expo-cli --global
```

Il sera ensuite nécessaire d'installer l'**application expo** sur votre smartphone (Android ou iOS).

Celle-ci est disponible directement sur le **Play Store** ou l'**Apple Store**.

**/!\ ATTENTION :** Il faudra que votre ordinateur et votre smartphone soient connectés sur le même réseau Wifi pour pouvoir voir les modifications de votre application en temps réel sur votre smartphone.

### Installation de l'application

Pour récupérer les sources du projet, veuillez lancer cette commande :

```
git clone https://github.com/AcLabM1/DNE-Mobile.git
```

Une fois dans le dossier de l'application, installez les dépendances :

```
npm install
```

## Lancement

Pour lancer l'application, lancez simplement cette commande :

```
npm start
```

Un **QR Code** apparaîtra alors dans votre terminal ainsi que dans un onglet de votre navigateur.

Pour tester l'application sur votre smartphone, il faudra alors **lancer l'application expo**, sélectionner **Scan QR Code** et **scanner le QR code**.

L'application devrait se lancer sur votre smartphone et se rafraichir à chaque fois que vous enregistrerez une modification dans le code.
