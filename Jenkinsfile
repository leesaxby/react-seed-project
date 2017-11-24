pipeline {
	agent { docker 'alpine-node:9.2' }
	stages {
		stage('Install Dependencies') {
			steps {
				sh 'yarn install'
			}
		}
		parallel {
			stage('Unit Test') {
				steps {
					sh 'yarn unit'
				}
			}
			stage('End-to-end Test') {
				steps {
					sh 'yarn e2e'
				}
			}
		}
	}
}
