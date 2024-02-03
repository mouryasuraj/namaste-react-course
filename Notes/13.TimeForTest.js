/*
// It is a Developer Testing
// Why do we right test cases?
1.

//Type of testing that can developer can do
1.Manual Testing
-->1.Manual testing means that we have to go throught all the components of our app and check whether it's working properly or not
   2.But we cannot check our whole application every time when i change some code in our application.
   3.A single line of code can create bug in anywhere in our program.
   4.


2.Write code for testing:
    There are 3 ways to write code for testing:
    As a developer we are concern about the first two testing: unit, integration
        a.Unit testing:
            1.Unit testing is way to test your application's small unit or component in isolation.
            2.If you want to test a specific unit or component then we can perform unit testing.
            3.Unit testing is a software testing method in which individual units or components of a software application are tested in isolation from the rest of the application. The purpose of unit testing is to validate that each unit of the software performs as designed and meets its specification. A "unit" in this context refers to the smallest testable part of an application, typically a function, method, or procedure.
        b.Integration testing
            1.When more that one component are connected to each other or depend on each other then we have to do integartion testing for this case.
            2.Integration testing is a level of software testing where individual units or components of a system are combined and tested as a group to ensure that they work together seamlessly. The purpose of integration testing is to detect any issues related to the interfaces and interactions between integrated components, as well as to verify that the integrated system functions as expected.
        c.end-to-end testing - e2e testing
            1.It need some tooks like selenium to perform end to end testing
            2.End to end testing is to test as soon as user landed on page and till use leave the page.


// Library to test application for react
1.react testing library - https://testing-library.com/docs/react-testing-library/intro/
2.The react testing library is buil on DOM testing library. If you are using create-react-app then you don't need to integrate into your applicatio, its aleardy come with create-react-app.
3.React testing library uses Jest  - https://jestjs.io/docs/getting-started

// Setup for testing
1.We need react testing library and jest in our application to perform testing becuase jest is a javascript testing library and react testing library uses jest behind the scene.
2.Install:
    a.react testing library : npm i -D @testing-library/react
    b.jest : npm i -D jest
    c.If you're using bable then we have to install required dependencies or if you're using other tool to build project then install according to that tool : npm install --save-dev babel-jest @babel/core @babel/preset-env
    d.configure babel: create babel.configue.js file in the root directory and put the below code to the file:
        module.exports = {
            presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
        };
 */