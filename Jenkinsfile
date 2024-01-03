pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your Git repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install' // or yarn install
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests
                sh 'npx cypress run' // adjust this command if Cypress is installed differently
            }
        }
    }

    post {
        always {
            // Any cleanup or final steps
        }
    }
}
