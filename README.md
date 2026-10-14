# Friends Central Perk Fan Experience

A responsive React fan website inspired by *Friends* and the Central Perk cafe. The project turns an existing Friends fan page into a warmer, more interactive cafe-style experience with character profiles, quotes, and a short trivia quiz.

This project was prepared for an IHK frontend certificate exam.

## Problem Statement

The original website presented useful Friends content, but it felt more like a simple static page. For the exam project, the goal was to make the page more engaging, more visual, and easier to explain as a React application without adding a backend, login, or video playback.

The improved site should help visitors quickly understand the six main characters, revisit memorable lines, and test their knowledge in a simple quiz.

## Target Audience

- Friends fans who want a cozy, nostalgic fan experience
- Visitors using phones, tablets, or desktop screens
- IHK examiners reviewing frontend structure, responsiveness, accessibility, and React basics

## Project Objectives

- Create a distinctive Central Perk cafe atmosphere
- Preserve useful existing Friends content and character images
- Replace the bright yellow look with a warmer cafe palette
- Use reusable React components
- Load structured JSON data with `fetch`
- Demonstrate state, props, and event handling
- Support keyboard access and responsive layouts
- Keep the code understandable enough to explain in a presentation

## Implemented Features

- Sticky responsive header with navigation
- Mobile menu for smaller screens
- Hero section with Central Perk inspired cafe illustration
- Short visitor-facing About section
- Character cards for the six main Friends characters
- Expandable character profiles with personality, facts, and a quote
- Chalkboard-style random quote generator
- Five-question "Who said it?" quiz
- Immediate quiz feedback
- Answer locking after selection
- Quiz progress, final score, and restart
- Facts section with key show numbers
- Loading, empty, error, and retry states for JSON loading

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Tailwind CSS import through Vite
- Local JSON files loaded with `fetch`

No backend, database, login, or external API is used.

## React Component Structure

```text
src/
+-- App.jsx
+-- main.jsx
+-- style.css
+-- components/
    +-- About.jsx
    +-- CharacterCard.jsx
    +-- CharacterGrid.jsx
    +-- ErrorMessage.jsx
    +-- Facts.jsx
    +-- Footer.jsx
    +-- Header.jsx
    +-- Hero.jsx
    +-- LoadingMessage.jsx
    +-- Quiz.jsx
    +-- QuoteGenerator.jsx
```

The smallest sensible structure is used:

- `App.jsx` loads the JSON data and decides which sections to show.
- `Header`, `Hero`, `About`, `Facts`, and `Footer` handle page sections.
- `CharacterGrid` receives character data and renders `CharacterCard` components.
- `QuoteGenerator` handles the random quote interaction.
- `Quiz` handles the trivia quiz state and quiz flow.
- `LoadingMessage` and `ErrorMessage` show data-loading states.

## JSON Data Flow

Runtime JSON files are stored in:

```text
public/data/
+-- characters.json
+-- quotes.json
+-- quiz.json
```

`App.jsx` uses `fetch` to load these files:

- `/data/characters.json`
- `/data/quotes.json`
- `/data/quiz.json`

The data is loaded asynchronously with `Promise.all`. The app handles:

- Loading state
- Ready state
- Empty state
- Error state
- Retry action

This is local structured data, not a real API.

## State, Props, and Event Handling

The project demonstrates common React concepts:

- `useState` stores data-loading status, errors, expanded cards, selected quotes, quiz progress, selected answers, score, and mobile menu state.
- `useEffect` loads JSON data and manages quiz focus behavior.
- Props pass data from parent components to child components, for example from `CharacterGrid` to `CharacterCard`.
- Event handlers are used for opening profiles, changing quotes, starting the quiz, selecting answers, moving to the next question, restarting the quiz, and opening the mobile menu.

## Accessibility

Accessibility improvements include:

- Semantic page structure with header, nav, main, sections, and footer
- Skip link to main content
- Native links and buttons for interactive controls
- Visible keyboard focus styles
- `aria-expanded` and `aria-controls` on expandable character profiles
- Accessible mobile menu state with `aria-expanded`
- `aria-live` announcements for quote and quiz feedback
- Focus movement in the quiz after starting, answering, moving to the next question, finishing, and restarting
- Sufficient touch target sizes in responsive checks

Keyboard checks were performed during development for navigation links, hero links, character profile buttons, quote button, and the quiz flow. A final keyboard regression pass should still be repeated before the exam hand-in.

## Responsive Design

The design is mobile-first and uses responsive CSS with flexible grids, `clamp()` typography, shared container widths, and adaptive section spacing.

Responsive checks were performed at:

- 320px
- 390px
- 768px
- 1024px
- 1440px

The checks included header/navigation, hero, About, character cards, expanded profile content, quote section, quiz section, facts section, and footer.

## Setup Instructions

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://127.0.0.1:5173/
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server.
- `npm run build` creates a production build.
- `npm run preview` previews the production build.
- `npm run format` formats project files with Prettier.
- `npm run format:check` checks formatting with Prettier.

## Testing Evidence

Checks actually performed during development:

- Production build with `npm run build` passed.
- Responsive layout checks were performed at 320px, 390px, 768px, 1024px, and 1440px.
- No horizontal overflow was found at those checked widths.
- Mobile navigation menu was checked at 320px, 390px, and 768px.
- Character cards and expanded profile content were checked at all requested widths.
- Quote button was tested with keyboard activation.
- Character profile buttons were tested with keyboard activation.
- Quiz behavior was tested for answer feedback, locking, Next, final score, and Restart.

The Vite build showed a Node deprecation warning about `module.register()`, but the build completed successfully.

## Known Limitations

- This is a frontend-only project with no backend.
- Data is stored in local JSON files, so content changes require editing the project files.
- The quiz has five fixed questions.
- There is no user account, login, or saved quiz history.
- The site is a fan project and does not use official Friends branding assets beyond existing local fan-page images and show references.

## Future Improvements

- Save a favorite character with `localStorage`
- Add character filters
- Add an interactive season timeline
- Add revealable facts
- Add more quiz questions
- Add a final manual accessibility checklist before submission

## Content and Image Sources

- Character names, quotes, and references are inspired by the *Friends* TV show.
- Character images are existing local project assets in the `public/` folder:
  - `Rachel.png`
  - `Monica.png`
  - `Phoebe.png`
  - `ross.png`
  - `Chandler.png`
  - `Joey.png`
- JSON content was written and organized for this exam project.
- The Central Perk hero illustration is created with CSS, not an external image.

This project is for educational and exam purposes only. *Friends* characters and original show material belong to their respective owners.

## Transparent AI Assistance Disclosure

AI assistance was used during development to help plan the React structure, refine the visual design, improve accessibility, write JSON-based content, and prepare documentation. The project remains a learning and exam project, and the code should be reviewed and understood before presentation.
