# HTML-CSS-JS-Coding-Challenge

# Code Structure

The entry point of the project is "index.html" in where is linked the styles and the JS script.

All HTML template is written in "index.html" file.

For styles is used SCSS. All styles are written in "src/scss/index.scss" file.

Javascript functionality is written in "src/js/index.js" file.
The event listeners are attached to the DOM on window "DOMContentLoaded" to be sure that all HTML elements are loaded
before the event listeners are attached. It would be bettor to use arrow functions but they aren't used to support the IE as well.
Because the script isn't big enough, some functions for handling input, making request, etc... haven't been created.

# Install the project locally

To install the project please follow the steps bellow:

1) Run "npm install command in main directory".
2) Run "npm run start" command to compile SCSS (CSS build files aren't available in the Repo).
3) Visit http://localhost:5000/ to view the project.

# Notes

If there was a much time, it would be better to add and configure Webpack for hot reloading feature, because we need to re-run "npm run start" command for each time when there is a change in the code.