pipeline {
  agent any
  stages {
    stage("run backend") {
      steps {
        echo 'execute npm'
        nodejs('Node-18.16'){
          sh 'npm --version'
        } 
      }
    }  

  }
}
