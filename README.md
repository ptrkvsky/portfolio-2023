# 👨‍💻 My React Portfolio - Showcasing My Latest Works

Welcome to my personal portfolio at [https://developpeur-web.tech/](https://developpeur-web.tech/), where you can explore my journey and expertise as a React freelance developer. This project serves as a showcase of my passion for web development and my dedication to crafting intuitive and dynamic user experiences. Inside, you'll find a collection of projects that reflect my diverse skill set, from front-end design to back-end functionality. I've poured my creativity and technical prowess into each project, aiming to demonstrate the versatility and quality of my work. Whether you're looking for innovative web applications, beautifully designed interfaces, or efficient code solutions, you'll discover a range of examples that illustrate my commitment to excellence in web development. Feel free to explore, and don't hesitate to reach out

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── documentation/
│   ├── ADR_preloader.md
│   └── >...
├── public/
│   ├── favicon.svg
│   └── assets/
│       └── images/
│           ├── image1.jpg
│           ├── image2.png
│           └── ...
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── project/
│   │       ├── [...id].astro
│   │       └── ...
│   ├── features/
│   │   └── feature1/
│   │       ├── feature1.ts
│   │       └── ...
│   │   └── feature2/
│   │       ├── feature2.ts
│   │       └── ...
│   ├── helpers/
│   │   ├── helper1.ts
│   │   ├── helper2.ts
│   │   └── ...
│   ├── interfaces/
│   │   ├── interface1.ts
│   │   ├── interface2.ts
│   │   └── ...
│   ├── styles/
│   │   ├── style1.css
│   │   ├── style2.css
│   │   └── ...
│   ├── utils/
│   │   ├── util1.ts
│   │   ├── util2.ts
│   │   └── ...
└── package.json

```

Here's an overview of the top-level folders inside the `src` directory:

- **components**:

  - _Description_: The "components" folder typically contains reusable UI components that are used throughout the application. These components help maintain consistency in the user interface and can include things like buttons, forms, headers, and more.

- **pages**:

  - _Description_: The "pages" folder contains the top-level page components or views for your application. Each page represents a distinct route or view in your application. These pages may be composed of components and are responsible for rendering content to the user.

- **features**:

  - _Description_: The "features" folder is where you organize application features or modules. Each feature may encapsulate related functionality, including components, logic, and state management. This structure can promote modularity and maintainability in your codebase.

- **helpers**:

  - _Description_: The "helpers" folder often includes utility functions or helper modules that provide common functionality or assist in various tasks throughout the application. These functions can be used across different parts of the codebase.

- **interfaces**:

  - _Description_: The "interfaces" folder typically contains TypeScript interface definitions. These interfaces define the structure and shape of data objects or API responses used in the application. They help ensure type safety and provide clear documentation for data structures.

- **styles**:

  - _Description_: The "styles" folder houses CSS or other styling files that are used to define the visual appearance of components and pages in your application. This folder helps maintain a separation of concerns between styles and logic.

- **utils**:
  - _Description_: The "utils" folder is a common location for utility functions and helper classes that don't fit into the "helpers" category. These utilities can include functions for data manipulation, date formatting, validation, and other miscellaneous tasks.

These folders are organized to provide a structured and modular approach to developing your application.

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 📊 Managing Data with Headless CMS Sanity

In this project, the data management aspect is seamlessly handled using the headless CMS Sanity. Sanity offers a flexible and intuitive content management system that empowers the seamless creation, editing, and organization of content for your web application. With Sanity, you can effortlessly manage various data types, from text and images to structured content.

The headless CMS approach allows you to separate content management from your application's frontend, providing the freedom to design and structure your content as needed while ensuring it's easily accessible via APIs. This flexibility not only streamlines content updates but also facilitates collaboration between content creators and developers.

Sanity provides a user-friendly interface for content editors to work with, making it an ideal choice for projects that prioritize content management efficiency and scalability. By integrating Sanity into this project, I've ensured that the data driving this portfolio is easily maintainable and adaptable to future needs.

## Usage of Path Aliases

In this project, we've configured TypeScript with path aliases to simplify module imports and enhance code readability. Path aliases allow us to use custom import paths for various parts of the project without needing to specify the full file path each time.

### Path Aliases Configuration

In our `tsconfig.json`, you'll notice the `"paths"` property under `"compilerOptions"`. Here's an example of how it's configured:

```json
"paths": {
 "@assets/*": ["src/assets/*"],
  "@components/*": ["src/components/*"],
  "@features/*": ["src/features/*"],
  "@helpers/*": ["src/helpers/*"],
  "@interfaces/*": ["src/interfaces/*"],
  "@layouts/*": ["src/layouts/*"],
  "@lib/*": ["src/lib/*"],
  "@functions/*": ["src/functions/*"],
  "@posts/*": ["src/posts/*"],
  "@styles/*": ["src/styles/*"],
  "@config": ["src/config.ts"]
}
```

## Styling with Sass

In this project, we utilize Sass (Syntactically Awesome Style Sheets) to enhance the styling and maintainability of our CSS code. Sass is a powerful CSS preprocessor that allows us to write cleaner and more organized stylesheets by providing features like variables, nesting, and mixins.

Our stylesheets are authored in Sass and then compiled into standard CSS during the build process. This approach not only improves the readability of our styles but also facilitates the management of complex styles across the project.

Sass helps us maintain a modular and scalable architecture for our styles, making it easier to create and maintain a consistent and visually appealing user interface.

## Responsive Font Sizing

In this project, we employ responsive font sizing to ensure that the text content adapts to different screen sizes and resolutions. This technique uses CSS to dynamically adjust the font size relative to the viewport width (vw).

### CSS Code for Responsive Font Sizing

Here's the CSS code snippet used in our project to achieve responsive font sizing:

```css
:global(:root) {
  font-size: calc(100vw / 1920 * 10);
}
```

## Libraries Used

Here are some of the key libraries and tools used in this project:

1. **Prettier** - Prettier is an opinionated code formatter that helps maintain a consistent code style across your project.

2. **GreenSock Animation Platform (GSAP)** - GSAP is a powerful and flexible JavaScript animation library for creating smooth and interactive animations in web applications.

3. **Fontsource** - The Fontsource project simplifies using Google Fonts and other open-source fonts. It provides npm modules you can install for the fonts you want to use.

4. **Husky** - is a Git hook manager that simplifies the setup and configuration of pre-commit and pre-push hooks in your Git repository. These hooks automate essential tasks such as code formatting, linting, and running tests before commits are made. In this project, Husky is configured to run several important checks on precommit:

- **ESLint**: ESLint is used to enforce coding standards and catch potential issues in your codebase before they become problems.

- **Playwright**: Playwright is employed for automating end-to-end tests, ensuring that your web application functions correctly across different browsers and environments.

- **Vitest**: Vitest is a testing tool designed for Vue.js applications. It is set up to execute tests on your Vue components, providing confidence in the functionality and reliability of your application.

- **GraphQL Code Generator**: Used to generate types and interfaces from the GraphQL Sanity endpoint. All types goes into SanityGraph

- **Nano Store**: Nano Store is a lightweight and efficient state management library for JavaScript applications. It provides a simple API for managing the state of your application, making it easy to handle complex state logic with minimal boilerplate code.

By running these checks before each commit, Husky helps maintain code quality and consistency while ensuring that your project remains error-free.

## Lighthouse Audit

In this project, I'm committed to delivering a top-notch web experience to users, and one of the ways I ensure this is by regularly conducting Lighthouse audits. Lighthouse is an open-source tool from Google that helps me evaluate and improve the quality of my web applications.

### What I Audit

My Lighthouse audits cover key aspects of web development, including:

- **Performance**: I measure your application's loading speed, responsiveness, and other performance-related metrics to ensure that users experience fast and efficient interactions.

- **Accessibility**: Accessibility is a top priority. I assess your project for adherence to accessibility standards, making sure everyone, regardless of ability, can use your application effectively.

- **Best Practices**: I follow industry best practices and ensure that your codebase aligns with recommended coding standards and security practices.

- **SEO**: Visibility on search engines is crucial. My audits analyze your website's search engine optimization to ensure it's optimized for discoverability.

## Testing with Jest and Playwright

Quality assurance is at the heart of this project, and to ensure that the application functions flawlessly, I employ robust testing methodologies. The primary testing stack includes **Jest** and **Playwright**.

- **Jest**: I use Jest, a widely recognized JavaScript testing framework, to perform unit tests, integration tests, and snapshot testing. Jest provides a comprehensive suite of testing utilities that enable me to verify the correctness of individual components, functions, and modules within the application.

- **Playwright**: For end-to-end testing and ensuring a smooth user experience, I rely on Playwright. Playwright allows me to automate browser interactions, covering critical user journeys to detect any potential issues or regressions. This ensures that the application behaves as expected across different browsers and environments.

Together, Jest and Playwright form a robust testing strategy that not only helps me maintain code quality but also provides confidence that the application functions reliably for users.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm test`                | Run Jest unit tests                              |
| `npm run test:e2e`        | Run Playwright end-to-end tests                  |
| `npm run test:all`        | Run both Jest and Playwright tests               |

```

```
