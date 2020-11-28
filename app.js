import { Connection } from 'tedious';  
var config = {  
  server: 'localhost',  //update me
  authentication: {
      type: 'default',
      options: {
          userName: 'your_username', //update me
          password: 'your_password'  //update me
      }
  },
  options: {
      // If you are on Microsoft Azure, you need encryption:
      encrypt: true,
      database: 'medidas'  //update me
  }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
  // If no error, then good to proceed.
  console.log("Connected");  
});  