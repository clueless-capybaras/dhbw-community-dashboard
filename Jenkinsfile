pipeline {
    agent any

    /*environment {
        //Use Pipeline Utility Steps plugin to read information from pom.xml into env variables
        IMAGE = readMavenPom().getArtifactId()
        VERSION = readMavenPom().getVersion()
    }*/

    stages {
        stage('Checkout') {
            steps {
                echo 'checking out the scm'
                checkout scm
            }
        }


        stage('Build') {
            steps {
                echo 'building the application'
                dir('app/frontend') {
                    sh 'npm install'
                    sh 'npm build'
                }
            }
        }

        stage('Test') {
            when {
                expression {
                    BRANCH_NAME == 'main'
                }
            }
            steps {
                echo 'testing the application'
                //junit 'build/junit/*.xml'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'deploying the application'
            }
        }

        //inform about Build Status or Build Status Changes 
        /*post {
            failure {
                // notify users when the Pipeline fails
                mail to: 'team@example.com',
                        subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                        body: "Something is wrong with ${env.BUILD_URL}"
            }
        }*/
    }
}
