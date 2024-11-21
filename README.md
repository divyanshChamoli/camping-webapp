# PeakCamp  🏕️

Welcome to **PeakCamp**, a web application for camping enthusiasts! PeakCamp allows users to create, explore, and review campgrounds, making it easier to plan and share outdoor adventures.  

## Live Demo  
Explore the app here: [PeakCamp](https://peakcamp.vercel.app/)  

## Features  
- **User Authentication**: Secure sign-up and login with password hashing and JWT-based authentication.  
- **Campground Management**:  
  - Create new campgrounds.  
  - Edit or delete your campgrounds.  
  - Upload images using Cloudinary for seamless media storage.  
- **Reviews**:  
  - Add reviews for campgrounds.  
  - Edit or delete your reviews.  
- **Interactive Map**:  
  - View campground locations on a dynamic map powered by Mapbox.  
- **Responsive Design**: Optimized for both desktop and mobile devices.  
- **Validation**: Zod is used to validate user inputs for improved reliability.  

## Tech Stack  

### Frontend  
- **React.js**  
- **TypeScript**  
- **Tailwind CSS**  

### Backend  
- **Node.js**  
- **Express.js**  
- **MongoDB**  
- **JWT** for authentication  
- **Zod** for input validation  
- **bcrypt** for password hashing  

### Additional Tools  
- **Mapbox**: Location display.  
- **Cloudinary**: Image storage.  

## Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/divyanshChamoli/peak-camp.git  
   cd peak-camp
2. Install dependencies for both client and server:
   ```bash
    cd Frontend  
    npm install  
    cd ../Backend  
    npm install  
3. Set up environment variables:
Create a .env file in the Backend directory with the following variables:
   ```bash 
    PORT=3000  
    MONGODB_CONNECTION_STRING=<your_mongodb_uri>  
    JWT_SECRET=<your_jwt_secret>  
    CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>  
    CLOUDINARY_API_KEY=<your_cloudinary_api_key>  
    CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>  
    MAPBOX_ACCESS_TOKEN=<your_mapbox_api_key>  
4. Start the development server:
Start the app 
   ```bash 
    cd Frontend  
    npm start 
    cd Backend  
    npm start 
5. Open the app in your browser at http://localhost:3000.

## Future Enhancements
- Improve search and filtering functionality.
- Enable social media sharing of campgrounds.
- Add more campground categories and tags.
