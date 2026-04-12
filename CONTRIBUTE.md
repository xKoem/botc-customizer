# Testing on local environment
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Updating CSS
To update CSS create a new branch and update file:
`botc-customizer\raw_data\styles.css`  
Before each selectable style create a comment with content:
```css
/*
unique_identifier
Section description
 */
```
After that paste your CSS. You can add customizable variables by following standard:
`{{key|default value}}` e.g.:
```css
.class-name{
    color:{{color|#ccc}};
}
```
You can include multiple variables in one section, but make sure keys for this section are unique:
```css
.class-name {{additional_class|.another-class-name}}{
    color:{{color|#ccc}};
    {{custom_style|margin-top: 10em}};
}
```
### Updating project
After all your changes are made on a new branch, push it and create a PR.  
Wait for `Update CSS Templates` GH Action to finish.  
After merging to main all your changes will be automatically deployed.