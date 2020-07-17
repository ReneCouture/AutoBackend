import React from "react";
import { Alert } from "reactstrap";

/*
	<AlertSuccess message="Things worked!"/>

	Displays a message when it is not an empty string
*/

interface IPAlertSuccess{
	message: String;
}

export function AlertSuccess(props:IPAlertSuccess)
{
	if(props.message=="") return (<></>)

  return <Alert color="primary">{props.message}</Alert>;
}