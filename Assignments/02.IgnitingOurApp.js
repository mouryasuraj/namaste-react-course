/*

1.What is npm?
-->1. NPM or "Node Package manager" or "No Pee Mee". There is no abbreviation for npm  if you search on google 
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
--->1. .parcel-cache is a directory created by parcel
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
               npm install . This command is used to install both dependencies and devdependencies.
               
6.What is Tree Shaking?
--->1. Tree shaking is a technique used in the context of JavaScript module bundlers like parcel, webpack or rollup to eliminate
        dead(unsed or unreachale) code from the final bundled code. The term 'tree shaking' originates from the concept of shaking a tree and causing the dead leaves to fall off while keeping the live ones. 
    2.Here how tree shaking works:
        1.Tree structure: 
                a.In modern javascript application, code is often organized in modules, which are files containing functions, classes or vairables. These modules form a dependency tree where each module depend on other modules.
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

8.List down your favourite 5 superpower of parcel and describe any 3 of them in your own words
--->1.Zero Configuration
    2.Tree Shaking
    3.Code Spliting
    4.Efficient asset handling
    5.HMR

    Describe any 3
        1.Zero Configuration:
                a.Parcel is designed to require minimal to no configuration. This means that we can start using parcel without spending time on complex configuration files.
                b.The zero config approach reduce the barrier to entry and  makes it easy for developers to get started with building web applications.
        2.Code Splitting:
                a.Code splitting is a technique used in web development to split a larger javascript bundle into smaller, more manageable parts.
                b.This can improve the performance of web application by loading only the necessary code for a particular page or feature, reducing the initial page load time and improve performance.
        3.Efficient asset handling
                a.Parcel has built in support for various asset types, including images, fonts, and CSS. It handles these assets efficiently, automatically bundling and optimizing them as needed.
                b.This capability simplifies the development workflow by reducing the manual steps to manage the assets in a project.


9. What is .gitignore? What should we add and not add to it?
--->1.The .gitignore file is a configuration file used by git to specify files and directories that should be ignore when tracking
    changes in a git repository.
    2.It allow you to exclude certain file or pattern from being included in a version control system.
    3.The .gitignore file is used to prevent sensitive or unncessary files from being committed to the repository

    what we can add to it---> Those packages or dependencies we can regenerate that we can add to .gitignore file
                              sensitive information add to .gitignore file
    What we cannot add to it---> Important files which rely on project like source code, api's, configuration files like package.json


10.What is the difference between package.json and package-lock.json?   
---> Package.json:   
            1.Package.json is used to manage metadata about a project, as well as to define project dependencies, scripts and other configurations.
            2.Content:
                a.Project metadata(name, version, license, description, author, etc.)
                b.List of project dependencies and their versions.
                c.scripts to run various task(like start, build, test, etc)
                d.Development tools and other configurations.
            3.NOTE:While package.json specifies the dependencies and their versions, it doesn't gurantee that these versions will be the same across  different development environment.That where package-lock.json comes in.
    Package-lock.json:
            1.Package-lock.json is automatically generated and updated by npm to provide a detailed, version-locked representation of the project's dependency tree
            2.content:
                a.The exact version of all installed dependencies and their transitive dependencies.

11.Why should I not modify package-lock.json?
--->Consistency across environment:     
            1.Package-lock.json ensure that everyone working on the project installed the exact same version of dependencies. If you modify it, you might introduce inconsistencies leading to different version being installed on different machines.
    Reproducibilty:
            1.It help make your project more reproducible.Other developer and development environment can create same dependencies setup, ensuring a consistent and predictable behaviour, which is crucial for collaboration and deployemnt
            2.Npm and yarn are designed to manage and update package-lock.json changes on package.json.
        
12.What is node_moudules? Is it good idea to push it on git?
---> 1.node_modules is a directory create by Node.js or NPM to store the dependencies that your project relies on. When you run 'npm install' command, npm install theses dependencies in the node_modules directory.
     2.No, It is not a good idea to push node_modules to git, here are the reasons:
            1.Size
            2.Duplication-->Each developer working on the project can run 'npm install'
            3.Reproducibility.

13.What is the dist folder?
--->dist stand for 'distribution' commonly used in software development to hold files that are ready to be deployed or distributed to users. It contains the final, optimized and production ready version of your application.

14.What is browserslists 'Read about dif bundlers: vite, webpack, parcel'
--->browserslist is a configuration file and query tool used in web development to specify which browsers your project should support.

15.What is caret(^) and tilda(~);
---> caret(^):
        1.It is a symbol used before where we write version's
        2.It means that whenever a minor update is happen in a package or dependencies it will update it automatically.
    Tilda(~):
        1.It is same as caret but it update the major update.
*/

