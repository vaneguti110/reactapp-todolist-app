# reactapp-todolist-app

1. Install emmet in your text editor, which is uses for html & css to show up and complete tags in an easy flow.

2. Install node-js and yarn

3. Open the terminal, type the command below to remove global dependencies since when sharing our files it doesn't show all the content that is why we need to remove global dependencies libraries in the location todolist-app,

>yarn global remove babel-cli live-server

or type,

>npm uninstall -g babel-cli live-server

4. When the file is uninstalled, type in the terminal
>live-server babel-cli@6.24.1

5. Type inside of package.json, by default

>"author":"Vanessa Guti"

>"license":"MIT"

>"scripts": {

>>  "serve":"live-server public",
	
>>  "build":"babel src/app.js --out-file=public/scripts/app.js --presets=env, react --watch"

>},

6. Now to run the page live server, type in the terminal in location todolist-app: 
>yarn run serve

it will show the page browser 

It will open the browser using the server and you will see the content from the html display

You should see the following message indicating that the HTTP server is serving port 8000 by default:

>Serving HTTP on 0.0.0.0 port 8000 ...

7. To run the babel page, type in the terminal in location todolist-app: 
>yarn run build

it will show babel src/app.js ...

8. In the terminal type to install webpack,
>yarn add webpack@3.1.0

now we have webpack in the local directory, and in the package.json

9. Type in the package.json file:
>"scripts": {

>>"serve": "live-server public",

>>"build":"webpack",
  
>>"build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env, react --watch"

>},

//we don't need to set build-babel anymore, because webpack do it for us

10. In the terminal type,
>yarn run build

It shows error since we haven't configured the webpack.config.js

11. Create a new file called webpack.config.js inside todolist-app folder, type inside the file

>//entry --> output

>console.log(__dirname);

>const path = require('path');

>module.exports = {

 >> entry: './src/app.js',
	
 >> output: {
	
  >//path.join google node path is to tell to go to this directory
	
   >>>path: 'path.join(__dirname),public',
   >>>filename: 'bundle.js'
	}
>};

12. In the terminal location todolist-app, type 
>node webpack.config.js

We should see the directory \todolist-app

13. Type in the terminal,
>yarn run build

It should show webpack

14. In the terminal type,
>node webpack.config.js

You will see the directory todolist-app/public

15. Type in the terminal, 
>yarn run build

It create a bundle.js, which create a file completely

16. Now, we can delete the scripts in the index.html that mention react and react-dom and add in the script src /bundle.js

17. In the webpack.config.js file, add in "build":"webpack --watch", so when you make a change it will show in the browser
now type,
>yarn run build in the terminal

It will said webpack --watch (leave it open)
You go to the browser in the console it shows this 

When making changes in the file, it will show up here in this terminal while you set the command watch
