# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When we hit https://www.techtonic.com/, domain name, techtonic.com is translated to an IP address which represents the server on which the website is hosted. computer or client will send a http request to the corresponding server to find the website stored in the server. Server searches its Domain Name System (DNS) for the URL and its corresponding IP address and server respond to the client with the IP address of the requested URL. Client then displays the webpage in the compatible browser.

## From start to finish, how does data reach you to be rendered in the browser?

When we hit a url in the browser, the browser checks 4 caches for a DNS record to find the corresponding IP address of the url. First it checks the browser cache where browser maintains a repository of DNS records of websites for a fixed time, which we have previously visited. If IP address is not found then browser checks OS cache. The browser would make a system call to the computer OS to fetch the record since the OS also maintains a cache of DNS records. If not found, it checks router cache. browser communicates with router which maintain its own cache of DNS records. If not found, it checks ISP cache. If the requested url is not in the cache, then ISP's DNS server initiates a DNS query to find the IP address of the server that stores the url. DNS query searches multiple DNS servers on the internet until it finds a match. Once the query finds the match, grab the IP address from the server and come back to the browser. Browser initiates a TCP connection with the server that matches the IP address to begin data transfer. Once the connection is established, browser will send a GET or POST request asking for the webpage. This request will also contain additional information such as browser identification, types of requests that it will accept, and connection headers asking it to keep the TCP connection alive for additional requests. It will also pass information taken from cookies the browser has in store for this domain. The server contains a web server like Apache, IIS which receives the request from the browser and passes it to a request handler to read and generate a response. The request handler is a program that reads the request, its’ headers, and cookies to check what is being requested and also update the information on the server if needed. Then it will assemble a response in a particular format like HTML. The server response contains the web page you requested as well as the status code, compression type, how to cache the page, any cookies to set, privacy information, etc. The browser displays the HTML content in phases. First, it will render the bare bone HTML skeleton. Then it will check the HTML tags and sends out GET requests for additional elements on the web page, such as images, CSS stylesheets, JavaScript files etc. These static files are cached by the browser so it doesn’t have to fetch them again the next time you visit the page. At the end, you’ll see the needed data appearing on your browser.
(Some of the sentences are copied from medium.com blogs.)
## What code is rendered in the browser?

An HTML code is rendered in the browser with CSS, JavaScript files.

## What is the server-side code’s main function?

server-side code is used to interact with permanent storage like databases or files. When a page is requested, the server will find the location or IP address of the url requested and a connection will be established with the client. Then server-side code retrieves data from user input, save it in the database, process the data, retrieves data from database and give it to the client-side code. Also navigate to other pages.

## What is the client-side code’s main function?

client-side code interacts with page's HTML elements, CSS and JavaScript files. Client-side code also call web service to interact with database like event handling, use of retrieved data from the database.

## What is runtime?

Run time is the time between program starts running within the memory until it is closed or terminated. Runtime environment is a set of instructions or a software which are necessary for the proper execution of the program, that are executed while program is running.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

one instance

## How many instances of the server-side code are available at any given time?

one instance of server and instances of running programs at any given time.

## How many instances of the databases connected to the server application are created?

one instance 
