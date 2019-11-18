# express_Sequelize_RunningQueries_QueryBasedOnID
An express app utilizing sequelize to connect to mySQL and running specific query based on ID. 

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

    cd Desktop

(2) Create a new folder on Desktop: 

    mkdir Express

(3) Navigate to the Express directory: 

    cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

    npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_Sequelize_RunningQueries_: 

    express --view=hbs express_Sequelize_RunningQueries_

(6) Once the process is complete, navigate into the express_Sequelize_RunningQueries_ directory: 

    cd express_Sequelize_RunningQueries_

(7) Now in the express_Sequelize_RunningQueries_ directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_Sequelize_RunningQueries_ directory:

    npm install -save-dev nodemon
    
(10) Install mysql2:

    npm install --save mysql2

(11) Install sequelize: 

    npm install --save sequelize@5.15.1

(12) Open in VS code:

    code . 


VS CODE

(13) Navigate to the routes/index.js file.: ![open index js file (express_Sequelize_RunningQueries_QueryOneActor)](https://user-images.githubusercontent.com/35668707/68999242-04f79700-088c-11ea-8005-c358fecca4e3.JPG)

(14) Require mysql2 in routes/index.js file: ![equire mysql2 in index js file (express_Sequelize_RunningQueries_QueryOneActor)](https://user-images.githubusercontent.com/35668707/68999260-57d14e80-088c-11ea-931f-d12d7416db55.JPG)


COMMAND PROMPT

(15) Install Sequelize CLI commands globally onto your computer: 

    npm install -g sequelize-cli

(16) Create necessary sequelize folders and filed in project:

    sequelize init
    

VS CODE

(17) Open config/config.json file and change settings to connect to the database: ![open config json file (express_Sequelize_RunningQueries_QueryOneActor)](https://user-images.githubusercontent.com/35668707/68999286-cca48880-088c-11ea-9bef-5f85093734ce.JPG)

![update database info in config json file (express_Sequelize_RunningQueries_QueryOneActor)](https://user-images.githubusercontent.com/35668707/68999308-ecd44780-088c-11ea-95d1-60b1011aae85.JPG)

COMMAND PROMPT

(18) Install mysql2 globally so sequelize CLI will be able to connect to the database:

    npm install -g mysql2
    
(19) Install sequelize-auto tool to generate model files: 

    npm install -g sequelize-auto

(20) Generate a model file for the actor table. (-h: IP/Hostname; -d: Database; -u: Username for database; -x: Password for database; -o: directory to place the models; -t: comma-seperated names of tables to import):  

    sequelize-auto -h localhost -d sakila -u root -x Password1! -o "./models" -t actor
    
VS CODE

(21) Open app.js file at the root of the project and include the './model" folder so that the models are available everywhere in the application: ![open app js file (express_Sequelize_RunningQueries_QueryOneActor)](https://user-images.githubusercontent.com/35668707/68999221-ad592b80-088b-11ea-9091-7c67a636e160.JPG)

![require models in app js file (express_Sequelize_RunningQueries_QueryOneActor)](https://user-images.githubusercontent.com/35668707/68999230-d4aff880-088b-11ea-9aaa-0dae418b1aa4.JPG)

(22) Add sequelize sync code above module.exports in the app.js file to ensure that the tables within the models in the project are the same as in the database.: ![add sequelize sync in app js file (express_Sequelize_RunningQueries_QueryOneActor)](https://user-images.githubusercontent.com/35668707/68999272-9a932680-088c-11ea-8bea-2604d3c1637e.JPG)

(23) In the views folder, create a specificActor.hbs file and add code to show the names of the actors.: ![create specificActor hbs file in views folder (express_Sequelize_RunningQueries_QueryOneActor)](https://user-images.githubusercontent.com/35668707/68999372-463c7680-088d-11ea-9db9-7e67db07ac83.JPG)

(24) In the routes/index.js file, require the models.: ![require models in the routes index js file (express_Sequelize_RunningQueries_QueryOneActor)](https://user-images.githubusercontent.com/35668707/68999252-2b1d3700-088c-11ea-8400-bb4d1bddde9b.JPG)

(25) Add a get() route for /specificActor to the routes/index.js file.: ![add get() route for specificActor in index js file (express_Sequelize_RunningQueries_QueryOneActor)](https://user-images.githubusercontent.com/35668707/68999396-7a179c00-088d-11ea-8f7e-b6baa17a7d21.JPG)


COMMAND PROMPT

(26) Run nodemon in terminal to see DB sync'd up: 

    nodemon

WEB BROWSER

(27) Navigate to localhost3000/specificActor to view the list of all actors.: ![navigate to localhost3000-specificActor to view](https://user-images.githubusercontent.com/35668707/68999406-a9c6a400-088d-11ea-9515-5babd2146930.JPG)


NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.
