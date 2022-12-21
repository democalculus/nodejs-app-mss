const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'https://sonarcloud.io/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Analysis',
	    'sonar.projectKey':'NodeJsEghosaTechNologies',
	    'sonar.login': 'ede2eb6ab3b163f71967572c471153dbddcfdb9e',
      'sonar.organization': 'eagunu-mss-demo',
	    //'sonar.login': 'admin','sonar.login': 'squ_f22484c6fdb242e621bd6d443903b706e0972815',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
