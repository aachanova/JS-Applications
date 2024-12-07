# Cheat Sheet

## Init Project

- [X] 
- [X] 
  - add script for lite-server in json file lite
- [X] 
- [X] 
- [X] Add init js file (app.js)
  - add app.js + console.log('It works')
  - add src/app.js in html file + test it
- [X] Setup lit-html lib export
- [X] Setup page.js lib export
- [X] Start page.js

## Views & Routing

- [X] Add empty views (without navigation)

  - import page in app.js
    - add homeView template + `<h1>`It working`</h1>`
    - add page('/', homeView) in app.js and test it
    - add the remaining views templates without navigation

  - [X] Add page routes
- [X] Modify navigation links in html file
  -navigationMiddleware must be commented

## API

- [X] Add requester function for api module (in lib)

## User session

- [X] Add user util module (utils folder + usersUtils.js)
- [X] Add set user data function
- [X] Add clear user data function
- [X] Add get user data function

## Register

- [X] Add template to register view
  - console.log('submit') in Handler function to test the register submit button
- [X] Add api reuqest for register
- [X] Handle submit register form
- [X] Add validation with alert
- [X] Add error handling with alert
  - redirect to ? home page

## Login

- [X] Add template to login view
- [X] Add api request for login
- [X] Handle submit login form
- [X] Add validation with alert
- [X] Add error handling with alert

## Logout

- [X] Add api request for logout

## Navigation

- [X] Add navigation view
- [X] Create navigation middleware
- [X] Add middleware to page.js

## Home page

- [X] Implement homeView

## Market / Dashboard page

- [X] Add HTML to template
- [X] Add items api module
- [X] Add get all items request
  - console.log(data)
- [X] Render items dynamically

## Create

- [X] Add HTML to template
- [X] Add form submit handler
- [X] Add api request for create

## Details

- [X] Add details view to page routes with itemId param
- [X] Add HTML to template
- [X] Add get one api request
- [X] Hide buttons when not owner
- [X] Set href attribute for edit and delete links

## Edit

- [X] Add HTML to template
- [X] Prepopulate values in the form using getOne request
- [X] Add form submit handler
- [X] Add api request for edit
- [X] Redirect on successfull request

## Delete

- [X] Use delete view without rendering template
- [X] Show confirm dialog
- [X] Add delete reuqest in items api
- [X] redirect on successful deletion

## Notifications

- [X] Setup notifications middleware
- [X] Add middleware to page
- [X] Add showNotification function to ctx
- [X] Setup timeout ti hide notification in 3 seconds
- [X] Replace all places where using alert with showNotifications
