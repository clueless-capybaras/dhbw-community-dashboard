pipeline {
    agent any

    stages {
        stage('docker up') {
            steps {
                sh 'docker-compose -f app/docker-compose.yml up --build --force-recreate -d'
            }
        }
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
