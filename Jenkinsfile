pipeline {
    agent { label 'windows' } // Specify a Windows agent label here
    
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
}
