# Setup

Create a MySQL DB `console-admin` and import the sql file into the DB


## Installation

Run the following command from root folder of the cloned project to install all dependencies.

`npm install`

## Verify Setup

In order to verify that everything is setup correctly, run the following command, which should show you the failing tests. This is good! We'll be fixing these tests once we jump into the build step.

`npm run test`

Every time you want to check your work locally you can type that command, and it will report the status of every task in that module.
As you move through the modules, you can run module-specific tests with the script `npm run test:module1`, replacing the number with one that corresponds with the module you are working in.

## Previewing Your Work

In order to see your changes in a browser, you can run `npm start` to start the application, and when you visit `http://localhost:3000` in a browser, you should see a json object rendered.
