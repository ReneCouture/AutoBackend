import { Wish } from "./Wish";
import { throws } from "assert";
import { axiosClient } from "../Other/axios";

/*
	Posts arrayOfData we wish the backend would just manage for us
*/
export async function wishSendData(wish:Wish,arrayOfData:any)
{
	let request={
		wish:wish,
		arrayOfData:arrayOfData
	}

	await axiosClient.post('/postData',request)
}