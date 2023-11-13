// Notes


// NPM: ---> https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/

// NPM-->1.Npm is everything but not a Node package manager.
//       2.NPM doesn't have full form   ----> https://www.npmjs.com/
//       3.NPM manage packages.
//       4.NPM is a standard repository for all the packages.
//       5.All the packages are hosted in NPM

/*
1.npm init
--> a.It will create package.json file.
    b.Package.json is a configuration for NPM.
    c.Some developers also called dependencies to it.
    d.MOst important package is bundlers(bundlers bundles your app so that it can properly shift to production) bundelers ex: vite, parcel, webpack.
    e.create-react-app uses webpack behind the scenes
    f.There are two types of dependencies are their in our app
        1.devDependencis ---> This devDependencies is used at the time of development process of our app.
        2.normal dependencies ---> And this is used for production.

2.npm install -D parcel
---> 1.npm is a package manager.
     2.-D is telling the package manager that install the dependencies and put into the devDependencies instead of normal dependencies.
     3.parcel is a package or dependencies.
3.What is node_moduels folder
---> It contains all the code of dependencies
    There are lot of other folder are there. Because parcel have its own dependencies and these dependencies have their own dependencies. It is called as transitive dependencies.
4.If i have my package.json and package-lock.json then I can regenerate my node_module folder by using command 'npm install or npm i'

5. What npx parcel index.html does behind the scene?
--->npx means executing a package
--->npx parcel index.html -----> Node execute the bundler parcel and build the code and hosted on localhost:1234



--What parcel is doing for you?---- https://parceljs.org/features/development
1.Dev build
2.local server
3.HMR---> Hot Module Relacement
4.File Watching Algorithm---->Written in c++
5.parcel also caching thing for you--- faster build because of caching
6.image optimization
7.Miniifcation of file
8.Bundling
9.compress the file
10.consistent hashing
11.code splitting
12.Differential Bundling ---- support older browsers
13.Diagnostice
14.Good error handling
15.https
16.Tree shaking --- remove unused code
17.Different dev and production bundles


browserlist----->https://github.com/browserslist/browserslist#query-composition
*/



// Progress of leacture
// Inception - Completed
// Igniting our app - Completed