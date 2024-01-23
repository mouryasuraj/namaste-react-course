/*

1.Explore all the ways of writing css?
-->
    1.There are 3 ways of writing css
        a.Inline CSS
        b.Internal CSS
        c.External CSS
    2.Using libraries
        a.tailwindcss
        b.Material UI
        c.Chakra UI
        d.Ant Design
        e.Bootstrap

2.How do we configure tailwind?
--> 
    1.Install tailwindcss and postcss.
        --> npm i -D tailwindcss postcss
    2.Execute tailwindcss.
        --> npx tailwindcss init
    3.Create .postcssrc file in the root folder.
        --> mkdir .postcssrc or by manually 
    4.Inside the .postsccrc write the below code.
        --> {
                "plugins":{
                    "tailwindcss":{}
                }
            }
    5.Inside tailwind.config.js file write the below code.
        --> 
            // @type {import('tailwindcss').config}
                module.exports = {
                    content:[
                        "./src/**{/*}.{html,js,ts,tsx,jsx}"
                    ],
                    theme: {
                        extend: {},
                    },
                    plugins: [],
                }
    6.At the end, inside index.css file, clear all the code inside it and write below code.
        --> 
                @tailwindcss base;
                @tailwindcss components;
                @tailwindcss utilities;

3.In tailwind.config.js, what does all the key mean (content, theme, extend, plugins)
--> 
    1.content:
        The content key is used to specify files or patterns that Tailwind should analyze to generate its utility classes. By default, Tailwind looks for files specified in the purge key (in the production environment), but you can use content to add additional files or patterns to be considered.
    2.theme:
        i.The theme key is used to customize the default styles provided by Tailwind CSS. It allows you to define or override values for colors, spacing, fonts, breakpoints, and more.
        ii.For example, you can customize colors like primary and secondary, set custom font families, adjust spacing scales, and configure responsive breakpoints.
    3.extends:
        i.The extend key is used to extend or override existing styles in Tailwind CSS. It allows you to add new utilities, variants, or extend existing configuration values.
        ii.This is particularly useful when you need to customize Tailwind's default styles beyond what the theme key provides.
    4.plugins:
        i.The plugins key allows you to register third-party plugins or custom plugins to extend Tailwind's functionality. Plugins can add new utilities, variants, or apply other transformations to your styles.
        ii.For example, you might use a plugin for aspect ratio utilities or to generate complex gradients.

5.Why do we have .postcssrc file?
--> 
    The .postcssrc file is a configuration file used to specify settings for PostCSS, a tool that processes CSS with JavaScript plugins. PostCSS is commonly used for various tasks such as autoprefixing, minification, linting, and supporting future CSS features. The configuration file allows you to define the plugins and their options that should be applied during the PostCSS processing of your stylesheets.

*/