# Instructions for Running Appium Test Cases with Jenkins
By following these steps, you should be able to run appium test cases with regtest efficiently on jenkins. 

### Prerequisite
   ##### Please Note: 
   - Ensure you have installed everthing on your system as the root user.
 
1: Install Docker-Compose
  
   - Ensure you have Docker-Compose installed on your system.
   - [Docker-Compose Installation Guide](https://docs.docker.com/compose/install/)

2: Install Android Studio
    
   - Download and set up Android Studio on your system.
   - [Android Studio Setup Guide](https://developer.android.com/studio/install)

3: Install Appium

   - Install Appium on your system.
   - [Appium Installation Guide](https://appium.io/docs/en/2.2/quickstart/install/)

4: Install NodeJs 17 or above

   - Install Node and npm on your system.
   - [Node Installation Guide](https://nodejs.org/en/download)

5: Install Java 18

   - Install java on your system.
   - [Java Installation Guide](https://www.oracle.com/java/technologies/javase/jdk18-archive-downloads.html)

6: Install uiautomator2

   - Install uiautomator2 on your system.
   - [uiautomator2 Installation Guide](https://appium.io/docs/en/2.1/quickstart/uiauto2-driver/)


## Jenkins Setup 
   - Install Jenkins [Jenkins Installation Guide.](https://www.jenkins.io/doc/book/installing/linux/#debianubuntu)
   - Change the user as root in jenkins.service for permission
   - ![image](https://github.com/rgb-tools-devs/iris-wallet-android/assets/150464893/b1a3b1a2-d600-4eda-a061-3a41ad20cf46)
   - ![image](https://github.com/rgb-tools-devs/iris-wallet-android/assets/150464893/c520d198-4f54-4d6f-8787-0da979d32b60)
   - Set the environment variable
    ![image](https://github.com/rgb-tools-devs/iris-wallet-android/assets/150464893/376d1f0b-1553-4bdb-b74e-d068131e1d25)
     If the environment variable is not set here, you can still add it inside the Jenkinsfile like this
    ![image](https://github.com/rgb-tools-devs/iris-wallet-android/assets/150464893/ab44a703-31f6-4fd4-9a79-7032d72878d8)
   - Add Gradle and Allure Plugin
     ![image](https://github.com/rgb-tools-devs/iris-wallet-android/assets/150464893/71fbb456-f43b-497c-8615-713d107a041f)
     ![image](https://github.com/rgb-tools-devs/iris-wallet-android/assets/150464893/2231ae86-7abc-4eff-8b30-236a74d4eea4)
     ##### Jenkins Email-Notification Setup 
      - Here, we need to enable two-step authentication, for which the email is used for SMTP authentication. Afterward, go to the Google Account management page and search for "App Passwords." Then,             create an app password for authentication.
     ![image](https://github.com/rgb-tools-devs/iris-wallet-android/assets/150464893/955983b2-1aad-4c5f-9a48-5a52fd6957ac)
     ![image](https://github.com/rgb-tools-devs/iris-wallet-android/assets/150464893/bc035928-6bf5-4adb-bbbd-e70d28fd918c)
     ##### Create a job with Jenkins 
   
     - Enter Job Name, select job style as pipeline and click ok.
       ![image](https://github.com/rgb-tools-devs/iris-wallet-android/assets/150464893/75436e00-da96-44c7-9847-079584c2c95f)
     - Configure the jenkins file from Github Project
       ![image](https://github.com/rgb-tools-devs/iris-wallet-android/assets/150464893/4a2b0d6d-481b-4685-8071-a3677e2a946d)
     - Click on build now and see the status  
       ![image](https://github.com/rgb-tools-devs/iris-wallet-android/assets/150464893/c1274a2b-0078-4e37-aef1-867ea3f65fd0)
     - Click on allure result to see test results
       ![image](https://github.com/rgb-tools-devs/iris-wallet-android/assets/150464893/c20ab401-360f-49b0-b53b-409441bf1146)

### Additional Resources

   - [Appium Documentation](https://appium.io/docs/en/2.2/)
   - [Docker Documentation](https://docs.docker.com/)
   - [Android Studio Testing Guide](https://developer.android.com/studio/test)
