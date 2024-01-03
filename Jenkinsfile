pipeline {
    agent any
    
    stages {
        stage('Checkout Prod') {
            steps {
                // Checkout the code from the prod branch
                checkout([$class: 'GitSCM', branches: [[name: 'prod']], userRemoteConfigs: [[url: 'https://github.com/nihar554/immi-jenkins-cypress.git']]])
            }
        }
        
        stage('NPM Install') {
            steps {
                // Run npm install with the legacy-peer-deps flag
                sh 'npm install --legacy-peer-deps'
            }
        }
        
        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests using npx
                sh 'npx cypress run'
            }
        }
    }
}
