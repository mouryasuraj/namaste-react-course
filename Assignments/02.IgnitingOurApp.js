/*

1.What is npm?
-->1. NPM or "Node Package manager" or "No Pee Mee". There is no abbreviation for npm for if you search on google 
      "What is the  fullorm of npm"--> it will show "Node Package Manager".
   2. NPM is a package manager.
   3. NPM contains two parts
        a.You can use npm in CLI(Command Line Interface) for publishing or downloading packages
        b.It is an online repository, which contains JavaScript Packages.
   4. package.json is the configure for npm. We can use npm to manage the project dependencies and metadata.
   5. we can install packages using command 'npm i packagename' or 'npm install packagename'
   6. if we want to create package.json then we have to used 'npm init' command and setup the metadata like name, version,  license, discription.
   7. We can uninstall package using 'npm uninstall packagename'. 
   8. It comes preinstalled with Node.js. So, there's no separate installation required.
    


2.What is parcel/webpack? Why do we need it?
--> Parcel 
        1.Parcel is an opensource javascript module bundler with zero config setup
        2.Parcel is very fast due to its amazing features like HMR(Hot Module Replacement), Tree shaking, code splitting, lazy loading, image optimization, Dev server, development target, caching, https
        3.It has file watcher algorithm which is written in c++.
    Webpack
        1.It is also an opensourse javascript module bundler

    Why do we need?
    --> Beacuse it is zero config setup and it is easy to use, fast, versatility, built-in support for features like HMR, code spliting etc.


3.What is .parcel-cache?
--->1. Parcel is a directory created by parcel
    2. It is used to build the app faster because it stores previously processed files and dependencies. Parcel can avoid reduntant work during subsequent builds. This significantly improves build performance, especially in scenarious where the codebase remains relatively stable.
    2. And it will store files in .parcel-cache folder.
    3. It can be regenerated using "npm parcel" command.

4. What is npx?
--->1. npx is a node package executer.
    2. It is commonly used to execute Node.js, particulary those tools and commands that are available on the npm registry.
    3. It simplifies the process of running packages from the command line without having to install them globally.

5. Difference between Dependencies and devDependencies?
--->1.In the context of Node.js and NPM, dependencies and devDependencies refer to two different types of dependencies specifies
    in project's package.json file. These dependencies are used to manage external packages and libraries that Node.js project relies on.
    2.Purpose of dependencies :-> 1.Dependencies are packages that required for the application to run in production.
                                2.They include packages that the application needs during runtime.
    3.Purpose of devDependencies :->1.devDependencies are packages that are only needed during development and testing.
                                  2.They are not required for the application to run in a production environment.  
    4.Command: npm install --production.  This command to used to install only normal dependencies for production
               npm install . This command to used to install both dependencies and devdependencies.
               
6.What is Tree Shaking?
--->1. Tree shaking is a technique used in the context of JavaScript module bundlers like parcel, webpack or rollup to eliminate
        dead(unsed or unreachale) code from the final bundled code. The term 'tree shaking' originates from the concept of shaking a tree and causing the dead leaves to fall off while keeping the live ones. 
    2.Here how tree shaking works:
        1.Tree structure: 
                a.In modern javascript application, code is ofter organized in modules, which are files containing functions, classes or vairables. These modules form a dependency tree where each module depend on other modules.
        2.Import and export statements:
                a.Modules use import and export statement to declare dependencies.
                b.An import statement brings in functionality from another module, and an export statement makes certain functionality available to other modules.
        3.Unused code elimination:
                a.Tree shaking tool analyze the module dependency tree and remove any code which is not in used by the application.
                b.This includes function, classes, variables that are imported but never used.
        4.Minimization of bundle size:
                a.The primaty code of tree shaking is to reduce the size of final bundled JavaScript code. By eliminating the dead code, the resulting bundle sent to the browser is smaller, leading to faster load times for web applications.

7.What is Hot Module Replacement(HMR)?
---->1. HMR stands for Hot Module Replacement
     2. It is an feature that allows develpors to update module in a running application without requiring full page refresh.
     3. HMR significantly speeds up the development workflow by reducing the time it takes to see the effect of code changes. Developers can see result of their changes instantly, whithout refreshing the page.
     4. HMR is not limited to javaScript modules. It can also handle updates to stylesheets, images and other assets, making it a versatile tool for web development.
*/