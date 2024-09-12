# wekitsak App

This is a React Native application developed using `create-expo-app`. This README provides setup instructions, details on third-party libraries used, and insights into the UX design choices made.

## Setup Instructions

Follow these steps to run the app on your local machine:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
2. **Install Dependencies**
    Ensure you have Node.js installed. Then, install the necessary dependencies:
   ```bash
   npm install

3. **Start the Expo Development Server**
   Run the following command to start the Expo development server:
   ```bash
   npx expo start

This will open the Expo Developer Tools in your default browser. You can then use the Expo Go app on your iOS or Android device to scan the QR code and view the app.

4. **Running on an Emulator**
   If you prefer to use an emulator, you can use the following commands:
   
> For Android:
   ```bash
   npm run android
```
> For For iOS:
   ```bash
   npm run ios
```
## Third-Party Libraries Used

`expo`: Provides a set of tools and services for developing React Native apps.

`react-navigation`: Library for routing and navigation in React Native apps.

`react-native-vector-icons`: Customizable icons for React Native.

## UX Design Choices

The app's UX design was focused on providing a clean, user-friendly interface with the following considerations:

Sidebar Navigation

The sidebar is designed to be collapsible to provide a more focused view of the main content.
Icons are used for compact navigation when the sidebar is collapsed, and text labels are displayed when the sidebar is expanded.
Top Bar

A consistent top bar with branding and key action buttons ensures easy access to important features and user profile.
Main Content Layout

The main content is organized into clear sections with cards and lists to improve readability and ease of access to information.
Interactive elements such as buttons and scrollable lists are styled to be visually appealing and easy to use.
Responsive Design

The app is designed to be responsive, with adjustments made for different screen sizes to ensure a seamless experience on both iOS and Android devices.

### To use this README template:
1. Copy the content into a new file named `README.md` in your project’s root directory.
2. Adjust the details like the repository URL and any other specifics related to your project.

This README provides a comprehensive overview of how to set up, run, and understand the app's design.
Feel free to explore and provide feedback or contribute to the project!
