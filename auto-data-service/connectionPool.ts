import{Pool, PoolClient, QueryResult}from 'pg'
import { log } from './log';

/*
    Sets up a connection to the database.
    The database may be local or in the cloud.
    Environment variables are used so the correct connection is made when
    this service is ran local or within the cloud.
    The systems environment variables will need to be set in both locations.
*/
const connectionPool:Pool=new Pool({
    host:       process.env['PG_HOST'],
    user:       process.env['PG_USER'],
    password:   process.env['PG_PASSWORD'],
    database:   process.env['PG_DATABASE'],
    port:       5432,
    max:        2
});

/*
    Performs a sql query on the database.

    query           is the sql query to perform.
    queryParams     may be passed in as paramaterized values for the query. (optional)

    returns an array of rows from the database which are represented as json objects.
    This makes sure to release the client. Not releasing the client may cause errors.
*/
export async function performQuery(query:string,queryParams?:any)
{
    log(`performQuery() has been reached`)
    let client:PoolClient=await connectionPool.connect()

    try
    {
        let result:QueryResult=await client.query(query,queryParams);

        //log(`result=`,result)
        log(`result.rows=`,result.rows)
        return result.rows
    }
    catch(e)
    {
        throw new Error(`   ${e.message}`)
    }
    finally
    {
        log(`performQuery() Releasing client`);
        client && client.release()
    }

    //rs.json(users)
}