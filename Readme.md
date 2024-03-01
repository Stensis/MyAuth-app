# MyAuth-app

## Overview

This repository contains a simple React Native mobile application developed using Expo and TypeScript. The application implements a token-based authentication system, allowing users to log in, create articles, and view them. This README serves as documentation for the application, detailing its features, requirements, assumptions, hints, and task parameters.

## Task Description

The task involves developing a React Native mobile application with the following features:

### Login System

- Implement a login screen where users can input their credentials (username and password).
- Upon successful login, securely store the authentication token.
- Ensure the token remains valid unless it has expired.

### Article Management

- Allow users to create articles after successful login.
- Each article should have a title, content, and category.
- Users should be able to view articles they have created based on category filters.

### Fake Backend

- Simulate backend services by hardcoding user credentials and article data.
- Define hardcoded articles with titles, content, visibility levels, and user IDs.

### Navigation

- Implement navigation between the login screen, article creation screen, and article viewing screen.

### Error Handling

- Gracefully handle errors, displaying appropriate messages to the user in case of login failures or other issues.

### TypeScript

- Utilize TypeScript for type safety and improved development experience.

## Assumptions

- Backend services are simulated by hardcoding user credentials and article data within the application code.
- Each user has unique login credentials.
- Articles have unique identifiers.
- Authentication tokens should be securely stored and managed within the application.

## Hints

- Utilize AsyncStorage or SecureStore for secure storage of authentication tokens.
- Use React Navigation for navigation between screens.
- Implement form validation for the login screen and article creation screen.

## Task Parameters

- React Native version: 0.73.2
- Expo version: 50.0.2
- TypeScript version: ^5.3.0

## Usage

Follow these steps to run the application:

1. Clone the repository: `git clone https://github.com/Stensis/MyAuth-app.git`
2. Navigate to the project directory: `cd MyAuth-app`
3. Install dependencies: `npm install`
4. Start the Expo development server: `npm start`
5. Use an emulator or scan the QR code with the Expo Go app to run the application on a device.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
