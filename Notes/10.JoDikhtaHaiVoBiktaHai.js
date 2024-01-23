/*

There are many ways to write css, here are some ways:

1.Normal way by creating file.
2.Sass(Syntectically Awesome Style Sheets). It is also know as SCSS(Sass Cascading Style Sheets). It is the way to write css with more superpowers. It is not the recommended way because as your application grows it might be cause latency
3.styled component: 
    Styled Components is a popular library for styling React components using tagged template literals and the power of JavaScript. It allows you to write your CSS styles directly within your JavaScript code, encapsulating styles to specific components. Styled Components promotes the idea of "CSS-in-JS," where styles are defined alongside the React components they are intended to style.
4.Bootstrap
5.Chakra UI
6.ant design
7.Tailwindcss


In this project we are going to use tailwindcss

// How to configure tailwindcss in your project
1.Go to official website of tailwindcss
2.Pick framwork guides if you are using framwork, just lik parcel
3.intall tailwindcss into your project
    a.npm install -D tailwindcss postcss
    b.npx tailwincss init
4.In the first command, postcss is used to transformed css with javscript
5.second command is initializing the tailwindcss
6.After second command, tailwind.config file is created automatically. This file is used to configure tailwindcss
7.After tailwincss, we have to create configuration file for postcss
    a.create a file in root folder ".postcssrc"
    b.And past the below code in that file.
                {
                    "plugins": {
                        "tailwindcss": {}
                    }
                }
    c.In this configure file, we have to tell postcss that we are using tailwindcss.
8.If we are using tailwindcss, then parcel is used postcssrc to read tailwindcss.
9.In the tailwindcss configuration file , we have content[]. It takes array of file extension that in our project where you can find these extension just use taildcss.
10.
    This is kind of importing tailwindcss into index.css file 
            @tailwind base;
            @tailwind components;
            @tailwind utilities;






*/














