# Graduate Project #

 - [Intro] 
 - [Install Dependencies](#How-to-install-dependencies)
 - [Start Mongo](Start-Mongo)
 - [Start Server](#Start-Server)
 - [Access Server](#How-to-access-the-server)
 - [Seed the Database](#How-to-connect-to-and-seed-the-database)
 - [Instructions](#Instructions-for-typical-user)
 - [References](#References)
---

## Intro ##
I created a website for a flooring business. You can go to website to leave your contact information so you can be contaced for a estimate.

---

## Start Mongo ##
Open a floating terminal and type :

```bash
  `/usr/local/mongodb/bin/mongod --dbpath ~/.mongo`
```

## Install Dependencies For Backend##
Let's install our dependencies. Start by opening your terminal in the projects main directory.

```bash
`cd server`
`npm i`
```
---
## Database Seed ##

Every time you refresh your page your seed will be there.

``` bash
  `npm run seed`
```
---

## Start Server ##
Once all of the dependencies are successfully installed you can start the server by typing the following into the terminal

```bash
  `npm start`
```
---
---
## Install Dependencies for Front End##
Let's install our dependencies. Start by opening your terminal in the projects main directory.
```bash
`cd client`
`npm i`
```
---
## Start React ##
Once all of the dependencies are successfully installed you can start your React by typing the following into the current terminal

```bash
  `npm start`
```
---
 

## Instructions ##
 
 1. Once the user has loaded the page onto their browser, they will see the home/landing page. At the top of the home page is the nav bar. Within the nav bar are links to location page and the job renovations page.  Once the user has submitted a message for an estimate  a message will apear thanking the customer for their message and let them know a contractor will be contacting them soon. At the bottom of the page is the footer, with where to find us on the web, our phone number, email, a clickable link for our "Online Policy" and a clickable link to find our location. The hammer icon is the link to the admin page. If the user clicks hammer in the footer a modal will appear with areas to input the user email address and password.
 2. Once the user clicks on the "location" link they will see the location page. At the top of the location page is the nav bar. Within the nav bar are links to home page and the sign-in modal. If the user clicks "Sign In", a modal will appear with areas to input the user email address and password. There is a map located under the blurb to show where we are located. At the bottom of the page is the footer, with where to find us on the web, our phone number, email, a clickable link for our "Online Policy" and a clickable link to find our location. The hammer icon is the link to the admin page.
 3.When you go to the renovations page you can see current before and after pictures of the most current jobs.
 4. THE ADMIN PAGE once you sign in by clicking on the hammer icon. You use email [admin@gmail.com], and the password is [adminOne]. You are able to go to the admin page and review the Current Messages and once you push respond it will go down to the Previous Messages. You can click on the Previous Messages and see what messages were left, you also have the option to delete it. You Sign Out of the Admin Page by clicking the Sign Out in the NavBar.


## References ##

1. Wikipedia
2. Alysha Eppard
3. Light box

1. I used wikipedia to get some of the images I used in my project.

2. Alysha helped me when I would not be able to figure out how to target something and how to utilize the logic I needed and get my admin side running the way I wanted.

3. Light Box had some images I used.


