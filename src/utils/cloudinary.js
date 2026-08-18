import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET
    });

})();

const uploadOnCloudinary = async (localFilePath) => {
    
    try {
        if(!localFilePath) return null;
        
        //upload the file
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        });
        
        // file upload complete
        console.log("file is uploaded on cloudinary", response.url);
        return response;
    } 
    
    catch (error) {
        fs.unlinkSync(localFilePath) // it removes the locally stored file
        return null;
    }
};

export {uploadOnCloudinary};