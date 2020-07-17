npm i nodemon
npm install --save-dev ts-node @types/express nodemon
npm init -y
tsc --init
npm install @types/express
npm install pg                     #intalls postgres sql express
npm install --save-dev @types/pg   #make it work with type script
npm install --save-dev typescript

#setup environment variables for connection to the db
#export PG_HOST=database-1.c32anyjmqflo.us-east-1.rds.amazonaws.com
export PG_HOST=renedb.c20mrpixdmho.us-east-1.rds.amazonaws.com
export PG_DATABASE=reneDB
export PG_USER=postgres
export PG_PASSWORD=wasspord

#this needs to be in package.json to start the server
#you also need an index.ts file
#"start": "nodemon --exec ts-node index.ts",