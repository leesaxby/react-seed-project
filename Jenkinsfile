pipeline {
	agent { docker 'mhart/alpine-node:9.2' }
	stages {
		stage('Test') {
			parallel {
				stage('Unit Test') {
					steps {
						sh 'yarn cache clean'
						sh 'yarn install'
						sh 'yarn unit'
					}
				}
				stage('End-to-end Test') {
					steps {
						sh 'yarn cache clean'
						sh 'yarn install'
						sh 'yarn e2e'
					}
				}
			}
		}
	}
}
