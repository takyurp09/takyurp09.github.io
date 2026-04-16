# Repository Guidelines

## Project Structure & Module Organization
This is a single-page personal academic and consultancy website. The project follows a simple static structure:
- **`index.html`**: The main entry point containing all sections (Hero, About, Research, Consulting, etc.).
- **`css/style.css`**: Contains all styling, using a professional academic-consultancy hybrid theme.
- **`js/main.js`**: Handles interactive features including navbar scroll-spy, skill bar animations, modal management, and Chart.js visualizations.
- **`_config.yml`**: Configured for GitHub Pages/Jekyll but with the theme disabled to use plain HTML/CSS.

## Build, Test, and Development Commands
The project does not use a complex build system. For local development and previewing, use:
- **Preview Site**: `live-server --port=8080`
- **Deploy**: Changes are automatically deployed via GitHub Pages when pushed to the `main` branch.

## Coding Style & Naming Conventions
- **HTML/CSS/JS**: Follow standard semantic HTML and clean CSS practices.
- **Interactivity**: External libraries are loaded via CDN (Leaflet.js for maps, Chart.js for data visualization).
- **Animations**: Typing animations and counter effects are implemented in `js/main.js`.

## Testing Guidelines
There is no automated test suite. Manual verification is required:
1. Run the local preview server.
2. Verify responsive design (mobile hamburger menu, grid layouts).
3. Test interactive elements: Topic modals, Chart.js rendering, and the contact form (mailto link).

## Commit & Pull Request Guidelines
Commit messages should be descriptive and concise, summarizing the change (e.g., "Add counters section", "Fix YouTube links"). There are no strict prefix requirements, but clarity is preferred. Deployments are triggered by pushes to the `main` branch.
