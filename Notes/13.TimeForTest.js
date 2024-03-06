/*
// It is a Developer Testing
// Why do we right test cases?
1.

//Type of testing that can developer can do
1.Manual Testing
-->1.Manual testing means that we have to go through all the components of our app and check whether it's working properly or not
   2.But we cannot check our whole application every time when we change some code in our application.
   3.A single line of code can create bug in anywhere in our program.


2.Write code for testing:
    There are 3 ways to write code for testing:
    As a developer we are concern about the first two testing: unit, integration
        a.Unit testing:
            1.Unit testing is way to test your application's small unit or component in isolation.
            2.If you want to test a specific unit or component then we can perform unit testing.
            3.Unit testing is a software testing method in which individual units or components of a software application are tested in isolation from the rest of the application. The purpose of unit testing is to validate that each unit of the software performs as designed and meets its specification. A "unit" in this context refers to the smallest testable part of an application, typically a function, method, or procedure.
        b.Integration testing
            1.When more than one component are connected to each other or depend on each other then we have to do integartion testing for this case.
            2.Integration testing is a level of software testing where individual units or components of a system are combined and tested as a group to ensure that they work together seamlessly. The purpose of integration testing is to detect any issues related to the interfaces and interactions between integrated components, as well as to verify that the integrated system functions as expected.
        c.end-to-end testing - e2e testing
            1.It need some tooks like selenium to perform end to end testing
            2.End to end testing is used to test, as soon as user landed on page and till use leave the page.


// Library to test application for react
1.react testing library - https://testing-library.com/docs/react-testing-library/intro/
2.The react testing library is buil on DOM testing library. If you are using create-react-app then you don't need to integrate into your application, its aleardy come with create-react-app.
3.React testing library uses Jest  - https://jestjs.io/docs/getting-started

// Setup for testing
1.We need react testing library and jest in our application to perform testing becuase jest is a javascript testing library and react testing library uses jest behind the scene.
2.Install:
    a.react testing library : npm i -D @testing-library/react
    b.jest : npm i -D jest
    c.If you're using bable then we have to install required dependencies or if you're using other tool to build project then install according to that tool : npm install --save-dev babel-jest @babel/core @babel/preset-env
    d.configure babel: create babel.config.js filez in the root directory and put the below code to the file:
        module.exports = {
            presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
        };
    e.Then configure parcelrc file to disable default babel transpilation
    f.Jest configuration --- npx jest --init
        It will ask you some question like
            1.Are you using typescript or not
            2.Where you want to test the application(node or jsDOM(browser like))
                What is jsDOM?
                    1.It is like a browser not actual browser. It gives some super power of browser.
                    2.jsDOM is an library. It is used for testing out application.
            3.Do you want jest to add coverage report
    g.If you are using jest version 28 then we have to install jsdom library separately.
        npm install --save-dev jest-environment-jsdom
        npm install -d jest-environment-jsdom, The above both command are same, both are installing as a dev dependecies


//For writing test cases we have to create folder name as "__test__" anywhere is our folder structure because if we run "npm run test" it will look for this folder for code to test.
or 
you can give file name like
Header.test.js
Header.test.ts
Header.spec.js
Header.test.ts in anywhere in our program 
__ two underscore also known as dunder


1.First we have to create a file for test case like sum.test.js, I have created in the component folder

// React Unit testing
1.Whenver we test component first we have to render that component
2.We can use render method which is come from @testing-library/react 
3.We have to use screen which is given by react testing library for reading the document in the component
4.To make jsx work in testing code, we have to install @babel/preset-react
5.And then we have to include @babel/preset-react to our babel.config.js
        module.exports = {
            presets: [
                ['@babel/preset-env', {targets: {node: 'current'}}],
                ['@babel/preset-react, {runtime:'automatic'}]
            ],
        };
6.Here, in the above code, preset-react means that it help us to write jsx in the test cases beacuse it will convert jsx into normal html code.
7.After this we also get another error of toBeInTheDocument is not a function, to work this code, we have to install another library @testing-library/jest-dom

8.If you want to test according to the group then you can wrap those test cases inside the describe method
--> describe("should", ()=>{
    //test cases
})
9.and we can create nested describe also
10. we can write "it" in the place of "test" both are same
11.If you are doing unit testing then make sure that in that component if any redux code is written , if it is written then wrapped with <Provider></Provider /> at the time of testing that component like:   
        test("SHoul", ()=>{
            <Provider store={appStore}><Header /></Provider>
        }
12.If there is any code or component which is coming from react-router-dom then we have to wrap our component in the BrowserRouter
13.If you want to test the code for onclick event then we have to use fireEvent

// React integration Testing
1.Whenever we are doing render where states are updated on the event click then we have to wrap our render method into the act method act(()=>{
    //component
})
2.This act function come from react-dom/test-utils
3.There are some helper functions in testing afterAll, beforeAll, afterEach, beforeEach
*/