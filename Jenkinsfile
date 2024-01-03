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
        stage('Download') {
            steps {
                bat 'echo "artifact file" > **/index.html'
            }
        }
    }
     post {
        always {
             archiveArtifacts artifacts: '**/index.html'
            
            emailext (
                attachmentsPattern: '**/index.html',
                body: 'Build finished successfully. Here is the attachment. ${FILE,path="http://localhost:7000/job/test%20git/15/execution/node/3/ws/cypress/reports/html/index"}',
                recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
                subject: 'Test',
            )
        }
    }
}
