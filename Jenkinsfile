pipeline {
	agent { docker 'mhart/alpine-node:9.2' }
	stages {
		stage('Test') {
			steps {
				sh 'yarn install'
				sh 'yarn unit'
			}
		}
	}
}
