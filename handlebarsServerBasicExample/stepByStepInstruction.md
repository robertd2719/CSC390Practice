

Tutorial: Express with Express-Handlebars

Create a Netbeans project (HTML/JS)
Open the terminal and go to the project folder ( ../public_html).
npm install express-generator -g
express handlebarsServerBasicExample --view=express-handlebars

Set the home folder to handlebarsServerBasicExample

=

Enable server restart on file changes

Use the following command in the root directory for the skeleton project:

npm install --save-dev nodemon
If you open your project's package.json file you'll now see a new section with this dependency:
"devDependencies": {
    "nodemon": "^1.14.11"
  }
Because the tool isn't installed globally we can't launch it from the command line (unless we add it to the path) but we can call it from an NPM script because NPM knows all about the installed packages. Find the the scripts section of your package.json. Initially it will contain one line, which begins with "start". Update it by putting a comma at the end of that line, and adding the "devstart" line seen below:
"scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
We can now start the server in almost exactly the same way as previously, but with the devstart command specified:
•	On Windows, use this command:
SET DEBUG=handlebarsServerBasicExample:* & npm run devstart
•	On macOS or Linux, use this command:
DEBUG=handlebarsServerBasicExample:* npm run devstart
=====

import the template engine, express-handlebars, in app.js: var exphbs  = require('express-handlebars');
open app.js and add the following above:
https://github.com/ericf/express-handlebars
// view engine setup
app.engine('hbs', hbs({extname:'hbs', defaultLayout: 'layout', layoutDir: __dirname + '/views/layouts/'}));

===== Hompage ====

Make sure you have index.hbs ( homepage) as follows
<h1>{{title}}</h1>
<p>Welcome to {{title}} Class</p>


Look at layout.hbs and create stylesheets/style.css


=== Test the homepage ===
issue: DEBUG=handlebarsServerBasicExample:* npm run devstart
Open:
 http://localhost:3000

=== Active Learning ==
AL 1) Change the code so that the homepage shows:

CSC 390
Welcome to CSC 390


==== Router =====
At this point we are only serving the homepage:

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

AL 2) Now open localhost:3000/users and localhost:3000/users/21/detail what do you see?
Answer: respond with a resource and Not Found Error 404
AL 2) Chnage the code so that it responds to GET request from the link path localhost:3000/users and 
responds with test: "Not implemented yet."

AL 3) hnage the code so that it responds to GET request from the link path localhost:3000/users/:id/detail and 
responds with test: "Not implemented yet."


=========

Handlebars template Primer

1. Expressions

To build up from the previous example, any data that you print out in an {{ }} expression, will automatically get HTML escaped by handlebars. This is a great security feature, but some times you might wish to print raw HTML.
 In this case you will use the triple curly brace expression {{{ }}}. 

https://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes

context={
    "description": {
      "escaped": "Using {{}} brackets will result in escaped HTML:",
      "unescaped": "Using {{{}}} will leave the context as it is:"
    },
    "example": "<button> Hello </button>"
  };

<div>
  {{description.escaped}}
  {{example}}

  <br><br>

  {{description.unescaped}}
  {{{example}}}
</div>

<div class="content-placeholder"></div>


When using a block expression, you can specify a template section to run if the expression returns a falsy value.
 The section, marked by {{else}} is called an "else section".

<div class="entry">
  {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
  {{else}}
    <h1>Unknown Author</h1>
  {{/if}}

The each block helper

You can iterate over a list using the built-in each helper.
 Inside the block, you can use this to reference the element being iterated over.

<ul class="people_list">
  {{#each people}}
    <li>{{this}}</li>
  {{/each}}
</ul>





{
  people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley"
  ]
}





</div>





==== Active learning ====




Change the view so that the default page renders: the following note: -'s are bullets.
CSC 390
Welcome to CSC 390 Class

Course requirements
-mp1
-mp2
-mp3
-mp4
-fp


=== Git AND git HUB ---

right click on project, TEAM> Git > Initialize
Team > git > add 
Team > git > commit ( update the message please)

Create a remote repo on github and copy the repositories https url ( click on the green "Clone or download" button to see it.






