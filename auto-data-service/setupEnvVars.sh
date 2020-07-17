#setup environment variables for connection to the db
#export PG_HOST=database-1.c32anyjmqflo.us-east-1.rds.amazonaws.com


#These may need to be copy pasted into the command line
#Adding quotes doesn't work
export PG_HOST=renedb.c20mrpixdmho.us-east-1.rds.amazonaws.com
export PG_DATABASE=reneDB
export PG_USER=postgres
export PG_PASSWORD=wasspord

echo "These environment variables have been set. Maybe."
echo "PG_HOST     is "$PG_HOST
echo "PG_DATABASE is "$PG_DATABASE
echo "PG_USER     is "$PG_USER
echo "PG_PASSWORD is "$PG_PASSWORD