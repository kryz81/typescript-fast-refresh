pipeline {
  agent any
  stages {
    stage('msg') {
      steps {
        echo 'it works'
      }
    }

    stage('build') {
      steps {
        tool(name: 'nodejs', type: 'nodejs')
        sh 'npm run build'
      }
    }

  }
}