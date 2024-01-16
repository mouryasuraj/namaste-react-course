/*

1.What are the various ways to add images into our App? Explain with code example?
--> 
    1.There are many ways to add images to our App
        a.importing images -->
        --> import myImage from 'images/myImage.jpg'
            const MyComponent = () =>{
                return{
                    <img src={myImage} alt="" />
                }
            }
        b.Using css background property:
        -->const MyComponent = () =>{
                return{
                    <div className="image-container">
                        //image will set from css
                    </div>
                }
            } 
            // css file
            .image-container{
                background-image: url('./images/myImage.jpg');
                background-size:cover;
                width:300px;
                height:300px;
            }


2.What would happen if we do console.log(useState())
--> If i console.log(useState()) then it returns an array. First element will be current state which is undefined and second element will be function to update the state.

3.How will useEffect behave if we don't add a dependency array?
--> If we won't add an dependency array which is the optional argument in useEffect hook, then every time the component render useEffect will be called.

4.What is SPA?
-->
    1.SPA stands for Single Paga Application.
    2.If we have to navigate to other page or component then we have to click on any button or any link, so instead for getting whole page refreshed it will only refresh the component that's why we called react application is Single Page Appication.
    3.Key characteristic:
            1.Dynamic updates
            2.client side routing
            3.Asynchronous data loading
            4.Fluid and Responsive UI
            5.Better User Experience

5.What is the difference between client side routing and server side routing?
-->
    1.Client-Side Routing:
        a.Execution Location:
                On the Client: Client-side routing is executed within the user's browser. When a user clicks a link or enters a URL, JavaScript running on the client handles the routing logic without making a request to the server for a new HTML page.
                Page Updates:

        b.Dynamically Updates Content:
                Client-side routing dynamically updates the content of the current page without a full page reload. The initial HTML, CSS, and JavaScript are loaded once, and subsequent updates are managed on the client side.
                User Experience:

        c.Smoother User Experience:
                Client-side routing provides a smoother and more responsive user experience since only the necessary content is updated, and there is no delay from reloading entire pages.
                Examples:

        d.React Router, Vue Router:
                Client-side routing is commonly used in single-page applications (SPAs) with frameworks or libraries like React, Vue.js, and Angular. These frameworks provide tools for client-side routing.

    2.Server-Side Routing:
        a.Execution Location:
                On the Server: Server-side routing involves the server handling navigation requests. When a user clicks a link or enters a URL, the server processes the request and sends back a new HTML page.
                Page Updates:

        b.Full Page Reloads: 
                Server-side routing typically results in full page reloads. Each navigation action triggers a new request to the server for the corresponding HTML page, which is then rendered and sent back to the client.
        c.User Experience:
                Slower Perceived Performance: Server-side routing may lead to a slower perceived performance for users since they experience the delay of waiting for entire pages to reload.
        d.Examples:
                Traditional Web Applications: Many traditional web applications use server-side routing. Each link or URL typically corresponds to a specific route on the server, and clicking a link results in a new HTTP request.


*/