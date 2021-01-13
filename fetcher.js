//importing request & fs modules from node
const request = require('request');
const fs = require('fs');

const arguments = process.argv;

const args = arguments.slice(2);

const url = args[0];
const path = args[1]; 

const createRequest = function (writingFile){
  request(url,(error, response, body)=>{
    if(error){
      console.log(`Something went wrong with the URL! ${error}`);
    }else {
      //callback function
      writingFile(body);
    }
  });
};


//writingFile is a callback function
const writingFile = body =>{
  fs.writeFile(path, body, (err)=>{
    if (err){
      console.log(`Something went wrong! ${err}`);
    }else{
      console.log(`Downloaded and saved 3261 bytes to ${path}`);
    }
  });
};
createRequest(writingFile);