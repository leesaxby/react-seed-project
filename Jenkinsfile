pipeline {
	agent { docker 'mhart/alpine-node:9.2' }
	stages {
		stage('Install Yarn Dependencies') {
			steps {
				sh 'yarn install'
			}
		}
		stage('Test') {
			steps {
				sh 'yarn unit'
			}
		}
	}
}
