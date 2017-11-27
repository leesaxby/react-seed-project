pipeline {
	agent { docker 'mhart/alpine-node:9.2' }
	stages {
		stage('Install Yarn Dependencies') {
			steps {
				sh 'yarn install'
			}
		}
		stage('Lint') {
			steps {
				sh 'yarn lint'
			}
		}
		stage('Unit Test') {
			steps {
				sh 'yarn unit'
			}
		}
		// Todo: Fix issue with chrome not being found.
		// stage('End-to-End Test') {
		// 	steps {
		// 		sh 'yarn e2e'
		// 	}
		// }
	}
}
