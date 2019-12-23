This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# Components

## Topbar

### props:

#### {Array} SectionList

```javascript
[{
  label: '',
  icon: '',
  url:''
},...]
```
> * `label`: the text will display on topbar.
> * `icon`: the icon will display on topbar.(font-awesome is supported)
> * `url`: click one section and jump to the url. (still under dev).

#### {String} username||'Guest'

user's name to display
