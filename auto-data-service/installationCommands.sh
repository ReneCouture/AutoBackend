
#Installation commands for Express auto-data-service folder
npm i nodemon
npm install --save-dev ts-node @types/express nodemon
npm init -y
tsc --init
npm install @types/express
npm install pg                     #intalls postgres sql express
npm install --save-dev @types/pg   #make it work with type script
npm install --save-dev typescript

#this needs to be in package.json to start the server
#you also need an index.ts file
#"start": "nodemon --exec ts-node index.ts",