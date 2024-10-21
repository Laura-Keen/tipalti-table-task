## Tipalti React Starter Template

This is a simplified React starter template configured using [Vite](https://vitejs.dev/guide/), a build tool that aims to provide a faster and leaner development experience.

It has minimal dependencies and configuration to allow for easy installation and to allow the candidate to make their own decisions about styling, external libraries and other tooling.

You are free to make changes to the template but please be aware that those reviewing your work will need to be able to install and run it locally without difficulty.

---

## Usage

To use the repository for your challenge submission, please clone the repository and create a new repository on your own Github account . Please DO NOT try to push branches, make pull requests or fork the original source template repository.

### Installation

From the root folder, run `npm install` to install all required dependencies.

### Running Locally

From the root folder, run `npm run dev` to run a local server with hot reloading.

### Notes

If I had more time than the allocated one hour, here are some changes and improvements I would make to my code:

- I would use a function or a package to convert the 'amount' data to currency instead of hardcoding the '£' sign.

- I have reduced padding and margin on mobile devices, but I would spend more time optimising this by considering font size, or maybe truncating or wrapping text.

- I would consider adding a loading state. Since there is a call to an API, if the data took a while to come through, it would be nice for the user to be made aware that something is happening.

- I would add a front-end state in case there is an error loading the data, rather than just having the error catch in the fetch.

- As it stands, I think that an HTML table is fine, but if the app were to be expanded, I would look into using a package for the table that offers more built in functionality, and would be easier to manipulate and expand. In the past I have used Tailwind UI for this.

- I would like to extract more components out and make a proper component library to make the code cleaner and easier to navigate. This could include the page layout, page heading, table headers and table rows.

- I think it would be nice to add a check that there are transactions coming through, and include a loading state to tell a user if there are no transactions - and maybe a button to direct them to another page, rather than just displaying an empty table.

- If the app were to expand, I would consider extracting types out to their own folder so that they are easier to use across the code, and keep typing all in one place.

- I would consider changing the function for converting the time format to a package if the app were to become more complex, or time formatting was needed elsewhere in the app.

- Instead of hard coding the headers array, I could use the transactions object to get the headers. This felt like overkill for the simplicity of this task, but it could be useful if, for example, I didn't know what the headers were going to be, but knew the shape of the data.
