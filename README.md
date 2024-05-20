# AJAX Type-Ahead Feature with Vanilla JavaScript

This project is an AJAX type-ahead feature built using vanilla JavaScript. It provides real-time search suggestions as users type into a search input field, fetching country data from the [REST Countries API](https://restcountries.com/v3.1/all).

## Features

- **Real-time Search Suggestions**: Provides dynamic search suggestions as users type.
- **AJAX Fetch**: Uses the Fetch API to retrieve country data.
- **Debouncing**: Reduces the number of API calls to improve performance.
- **User Feedback**: Displays a "Not found" message if the query does not match any country.
- **User-Friendly Interface**: Includes smooth interactions and clean design.

## Project Structure

```
├── index.html      # HTML file containing the structure of the web page
├── style.css       # CSS file for styling the web page
└── script.js       # JavaScript file containing the logic for the type-ahead feature
```

## Setup Instructions

1. **Clone the Repository**: 
    ```bash
    git clone git@github.com:Blazing-Mike/main-stage-one-week-5.git
    cd main-stage-one-week-5
    ```

2. **Open the Project**:
    - Open `index.html` in your preferred web browser to view and test the type-ahead feature.

## Usage

1. **Start Typing**: Begin typing a country name into the search input field.
2. **View Suggestions**: As you type, suggestions will appear in a dropdown list below the input field.
3. **Select a Suggestion**: Click on a suggestion to populate the input field with the selected country name.
4. **Not Found**: If no matches are found for your query, a "Not found" message will be displayed.

## Technologies Used

- **HTML**: For the structure of the web page.
- **CSS**: For styling the web page.
- **JavaScript**: For implementing the type-ahead feature and handling AJAX requests.


