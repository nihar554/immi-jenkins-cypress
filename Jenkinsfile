pipeline {
   agent any // Specify a Windows agent label here
    
    stages {
        stage('Checkout Prod') {
            steps {
                // Checkout the code from the prod branch
                checkout([$class: 'GitSCM', branches: [[name: 'prod']], userRemoteConfigs: [[url: 'https://github.com/nihar554/immi-jenkins-cypress.git']]])
            }
        }
        
        stage('NPM Install') {
            steps {
                // Run npm install with the legacy-peer-deps flag on Windows
                bat 'npm install --legacy-peer-deps'
            }
        }
        
        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests using npx on Windows
                bat 'npx cypress run'
            }
        }
 
    }
     post {
        always {
             archiveArtifacts artifacts: '**/html/index.html'
            
            emailext (
                attachmentsPattern: '**/html/index.html',
                body: 'Build finished successfully. Here is the attachment.',
                recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
                subject: 'Test',
                to:'soni.tizil@gmail.com',
                mimeType: 'text/html',
            )
        }
    }
}
