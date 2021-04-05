pipeline {
  agent {
    node {
      label 'build'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}