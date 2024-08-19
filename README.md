# Travel Journal Project

This is a simple travel journal web app where users can document and showcase their travel experiences. The app presents each trip as a card, featuring key details like the location, dates, description, and a link to view the location on Google Maps. This project is built using React and styled with basic CSS to create a clean and visually appealing layout.

## Features

- **Responsive Card Layout**: Each card displays a travel destination with key information such as the location, dates, and a brief description.
- **Image Support**: Display images representing each destination, with proper scaling to maintain aspect ratio and fit within the card layout.
- **Interactive Elements**: The cards include a link to view the location on Google Maps.
- **Hover Effects**: Cards have a subtle hover effect that adds depth and interactivity.
- **Clean and Modern Design**: The layout is designed to be simple, clean, and easy to navigate.

## Technologies Used

- **React**: The project is built using React, a JavaScript library for building user interfaces.
- **CSS**: Styling is done using CSS with some effects like shadows and hover transitions to make the UI more interactive and appealing.
- **Vite**: Vite is used as the build tool for this React project.

## Project Structure

```
/public
  /assets
    - mount-fuji.webp
    - other-images...
/src
  - App.jsx
  - Card.jsx
  - data.js
  - Navbar.jsx
  - styles.css
  - other-components...
/index.html
/readme.md
```

- **App.jsx**: The main component that renders the navbar, hero section, and all the cards.
- **Card.jsx**: Component responsible for rendering individual cards, each representing a travel destination.
- **data.js**: Contains the data for each travel destination, including title, location, dates, description, image URL, and Google Maps link.
- **styles.css**: Contains all the CSS styling for the project.
- **Navbar.jsx**: Renders the navigation bar at the top of the page.
  
## How to Run the Project

1. **Clone the repository**:
   ```
   git clone https://github.com/your-username/travel-journal.git
   ```

2. **Install dependencies**:
   ```
   cd travel-journal
   npm install
   ```

3. **Start the development server**:
   ```
   npm run dev
   ```

4. **Open the app in your browser**:
   The app will be running on `http://localhost:3000` by default.

## Future Improvements

- **Responsive Design**: Further enhancements to ensure full responsiveness on mobile devices.
- **User Input**: Adding functionality for users to add their own travel experiences to the journal.
- **Search and Filter**: Allowing users to search or filter by location or date.

Feel free to contribute or modify the project to fit your own travel experiences!
