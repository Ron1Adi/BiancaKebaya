# MERN BiancaKebaya

# Lessons
1. Introduction
2. Install Tools
3. Create vite@latest
4. Create Git Repository at Github 
# beginning 
1. create a new repository on the command line
    echo "# BiancaKebaya" >> README.md
    git init
    git add .
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/Ron1Adi/BiancaKebaya.git
    git push -u origin main
# ending 

# beginning
1. via https 
    or push an existing repository from the command line
    git remote add origin https://github.com/Ron1Adi/BiancaKebaya.git
    git branch -M main
    git push -u origin main

2. or push an existing repository from the command line
    git remote add origin git@github.com:Ron1Adi/BiancaKebaya.git
    git branch -M main
    git push -u origin main
# ending
5. Lists Products
    1. create products array
    2. add products images
    3. render products
    4. style products 
6. Add routing
    1. npm i react-router-dom
    2. create route for home screen
    3. create router for product screen
7. Create NodeJS-Server
    1. run npm init in the root folder
    2. update package.json set type:module
    3. add .js to imports
    4. npm install express
    5. create server.js 
    6. add start command as node backend/server.js 
    7. require express 
    8. create router for / return backend is ready
    9. move products.js from frontend to backend 
   10. create route for /api/products 
   11. return products 
   12. run npm start 
8. Fetch Products from Backend
    1. set proxy in package.json
    2. npm install axios
    3. use state hook
    4. use effect hook
    5. use reducer hook
9. Manage State By Reducer Hook 
    1. define reducer
    2. update fetch data
    3. get state from useReducer
10. Add bootstrap UI Framework
    1. npm install react-bootstrap bootstrap
    2. update App.js
11. Create Product and Rating Component
    1. create rating component 
    2. create product component
    3. use rating component in product component
