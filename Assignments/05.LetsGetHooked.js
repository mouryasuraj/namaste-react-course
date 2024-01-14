/*

1.What is the difference between Named Export, Default Export and * as export?
---> 1.Named Export:
            a.If you want to export more that one things(variables, functions, or classes) in a single file then we have to use named export.
            b.Example: export const name = "Suraj"
                       export const surname = "Mourya"
                       or
                       export {name, surname}
                       then import it like:
                        import {name, surname} from 'path'
            c.Note: At the time of importing, write exactly the same name used to export
     2.Default Export:
            a.If you want to export a single thing(variables, functions, or classes) then use default export.
            b.Example:  export default const App = () =>{
                    return(
                        <h1>Hello world</h1>
                    )
                }
                or
                export default App
                then import it like:
                    import App from 'path'
            c.We can write any name to import the export default.
     3. * Export(Wildcard, namespace):
            a.If you want to export all the named export then use asterisk(*).
            b.This exports all the named export from  another module as properties of a single object.
            c.It is useful when you want to import multiple exports from a module without listing them individually.
            d.syntax: export const name = "Suraj"
                      export const surname = "Mourya"
                      OR
                      export *
                        then import it
                        import * from 'path'



2.What is the importance of config.js file?
---> 1.Config.js is the common naming convention for a configuration file in software development.
     2. However, it's important to note that the importance of config.js file can vary depending on the context and the specific application for the project.
     3.Here are some general importance of config.js file:
        a.Configuration setting:
                i)A config file often contain configuration setting for an application.
                ii)These setting may include parameters like API keys, database connection strings, features toggles, environment variable and other configuration options.
        b.Separation Concern:
                i)Using  a separate configuration file helps in separating concerns from the main codebase.
                ii)This separation makes it easier to manage and update the configuration setting without modifying the applicaitions core's logic.
        c.Environment Variable:
                i)In some case, a config.js file may be based on environment variable or provide a convenient way to manage environment specific configuration.
        d.Security:
                i)Storing sensitive information like api's and secret token, in a configuation file allows for better security practice.
                ii)It helps to keep sensitive information from the main codebase and prevent accidental exposure.
        e.Maintainability:
                i)Having separate config.js file can enhance code maintainability.
                ii)It provide single point of access for configuration parameters, making it easier for developer to locate and update setting as needed.


3.What is React Hooks?
---> 1. React hooks is just a normal javascript functions which comes with more superpower.
     2. It is a prebuilt function created by Facebook developer.
     3. React hooks are a feature introduced in react 16.8 version that allows functional component to use state and lifecycle features, which were previously available in class components.
     4.Hooks provide more concise and readable way to manage stateful logic, side effects, and other react feature in functional components.

4.Why do we need a useState hooks?
---> 1.It is used to add state to functional component.
     2.Before the introduction of hooks. functional component were stateless, meaning they couldn't manage or maintain state across renders.
     3.The useState hook addresses this limitation and provides a way for functional component to have a local state.
     4.Reasons why hooks are essential:
        a.Stateful login in functional component:
            i.Functional component with hooks can now manage theri own state.
            ii.This is crucial for building dyanmic and interactive UI.
            iii.State allows component to store and update data that affects their rendering.
        b.Avoid class component
        c.We can create multiple state variable in a single component.

*/