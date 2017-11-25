pipeline {
	agent { docker 'mhart/alpine-node:9.2' }
	stages {
		stage('Install Yarn Dependencies') {
			steps {
				sh 'yarn install'
			}
		}
		stage('Unit Test') {
			steps {
				sh 'yarn unit'
			}
		}
		stage('End-to-End Test') {
			steps {
				sh 'yarn e2e'
			}
		}
	}
}
