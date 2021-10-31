
Welcome to CatsPaw & Woof PetStore
======

## Introduction

This is an illustrative website built for people looking to adopt pets, and the readme is a guide to navigate the website development process in granular detail.


### Step 1: Creating React app
---

First thing first, you need the latest version of Node
https://nodejs.org/en/download/

> > Note : NPM packages are not allowed upper case characters in their name, so if your folder has any capitals, Create react command may not work

Command Line for Terminal to create React App, its is not mandatory to use the below command line to create react app, there are other alternatives to this which can be explrored. For simplicity, and ease I used the below command line.

> > One of the downsides of npx create react app, you get more tools and plugins that needed

`npx create-react-app .`

Links for more information :
https://reactjs.org/docs/create-a-new-react-app.html
https://github.com/facebook/create-react-app#create-react-app--
https://nodejs.org/en/download/

### Step 2: Add .PRETTIERRC
---

create .PRETTIERRC at the root directory, create empty Json object for default settings

>> This step is not necessary, but a nice to have to keep your code organized.  

```
{

}
```

### Step 3: Clean Your App.js
---

```
import './App.css';

function App() {
  return (
    <div className="App">
        <h1> Hello World</h1>
    </div>
  );
}

export default App;
```


### Step 4: Deploy the App into Github Pages
---

1. Install the gh-pages package as a "dev-dependency" of the app
npm install gh-pages --save-dev
2. Modify the package.json file
    * Add "homepage" property 
    ```
    "homepage": "http://{username}.github.io/{repo-name}"
    ```
    ```
    "homepage": "http://Marcellia.github.io/catpawswoof",
    ```
    * so your package.Json should look like 

    ```
        {
    "name": "catpawswoof",
    "homepage": "http://Marcellia.github.io/catpawswoof",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@testing-library/jest-dom": "^5.14.1",
        "@testing-library/react": "^11.2.7",
        "@testing-library/user-event": "^12.8.3",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-scripts": "4.0.3",
        "web-vitals": "^1.1.2"
    },
    ```
    * Add commands in the "Script" section of the package.json
    ```
    "scripts": {
        //...
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
        }
    ```
    * So your script should look like 
    ```
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    ```
3. Generate a production build of your app, and deploy it to GitHub Pages

    * Run the below command line in the Terminal, this will create an optimized production build, and publish the app through github pages
    ```
      npm run deploy
    ``` 

### Step 5: Created a React Functional component for Search Box - SearchBox.js
---

> > Notes: In HTML, 
```<select>  </select>```
<select><option/><option>1</option> <option>2 </option> </select>
creates a drop-down list.

> > React Hook "useState" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function [react-hooks/rules-of-hooks](https://reactjs.org/docs/hooks-rules.html)

### Step 6: Created Results Page
---




## Common Errors 

### At deployment of Github Pages 

```diff
- sh: gh-pages: command not found

```
>> Solution: You are probably missing the gh-pages, and have forgottent to install it. Install the gh-pages package using the below command line in your Terminal [Read more](https://www.npmjs.com/package/gh-pages) 

```
npm install gh-pages --save-dev
```


```diff
- TypeError: Cannot read properties of null (reading 'appendChild')
```

```diff
-dog31.jpg:1 Failed to load resource: net::ERR_CERT_COMMON_NAME_INVALID
```

packages to install

* React-Rounter 
```
npm install react-router-dom
```