/*

1.What is Emmet?
--->Emmet is a powerfull toolkit for web developer that significantly enhance the efficiency of writing code.
    It save lot of time if you're building a large scale app.
    It allows to easily create nested element in html 
    Emmet is not limited to html, it also provides shortcuts for css

2.Difference between library and framework?
--->Library:
        React is a js library. In library, there is not a specific structure to follow. Library provides built in funcitons and properties, so we can just implement and use it.
        And we can use library anywhere in our program.
    Framework:
        In framework, we have to follow a specific rule. It contain bunch of libraries, tool, and standardized code, and guidelines that help developers to create and maintain application more efficiently.

3.What is CDN? Why we use it?
--> CDN stands for Content Delivery Network. 
    It is used to deliver the content like files(js, css) and any other service you need just put the CDN of it and start using it.
    With the help of CDN we can create our application fast and in a efficient way.
    We use this because it is very fast and it improves the website performance and many more like security, bandwidth saving.


4. Why is 'React' known as 'React'
--->React is a popular javascript library. It known as 'React' because we can render a componenets in  mulitple places if 
    anything changes to that state.
    That's why is called 'Reactive' or 'interactive'


5.What is cross origin in script tag?
-->crossorigin is an attribute in script tag which is used to define how the browser should handle a request made by a script when its loaded from the different origin(domain, protocols,port)
        It has two values
            a. anonymous
            b. use-credentials

6.Difference between 'React' and 'ReactDOM'?
---> React:
        React is a javascript library. It is a core that enable to create and manage the state of component
        React provides fundamental logic for building reusable component.
     ReactDOM: 
        React is a package specifically intended to interact with DOM in the context of "React"
        It act like bridge to interact with 'react dom'


7. What is async and defer in script tag?
--> async:
        It loads script asynchronously while the html is parsing and execute immediately after loading the script from network
    defer:
        It loads script asynchronously while the html is parsing and execute after html parsing is completed.
        Its guaranteed that script load after the html will parse. unlike async

8.What is CORS(Cross Origin Resource Sharing)
---> It is a feature which is used by web browser to control how web pages in one domain interact with resources such as (APIs and data) hosted on other domain.


- What is CORS?
--->
CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to control how web pages in one domain can request and interact with resources (such as data or APIs) hosted on another domain. This security measure is in place to prevent potentially malicious cross-origin requests.


- What is Cross Origin?
--->Cross-origin refers to interactions or requests that occur between different origins on the web. An origin is defined by the combination of the scheme (e.g., http or https), domain (e.g., example.com), and port (if specified) of a web page. If two resources (such as web pages, scripts, or APIs) have the same origin, they are said to be of the same origin. If any of these components differ between resources, they are considered to be from different origins.


- Are subdomain, host, port, protocol fall under Cross-Origin mechanism?
---->Yes, subdomain, host, port, and protocol are all components that contribute to determining the origin of a resource, and they play a crucial role in the Cross-Origin mechanism.


- How does Cross Origin Request Sharing works behind the scenes?
- What is CORS preflight?
--->
CORS preflight is an additional step in the Cross-Origin Resource Sharing (CORS) mechanism that involves sending an HTTP OPTIONS request to the server before making the actual cross-origin request. The purpose of the preflight request is to determine whether the actual request (e.g., a GET, POST, or other HTTP method) from the web page's origin is allowed by the server.


- What is the OPTIONS call?
- What are the additional HTTP Headers required?
- Does server always make Preflight options call in CORS protocol?
----> Acces control allow origin, Acces control allow method, Acces control allow origin headers, Acces control allow credentials, Acces control expose headers, Acces control max age.



- What browser versions support CORS?
- Access Control Allow Origin Error?
- How to solve CORS Error?
- How to resolve CORS issue in Google Chrome?

*/