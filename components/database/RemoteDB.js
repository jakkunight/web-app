import React from 'react';
import { mysqlId, nameId } from '../../schemes.js';
import { Remote as Database } from './Database.js'

const RemoteDB = ({ children, baseServerLink, credentials }) => {

	const readTable = async ({ table }) => {
		try{
			const request = {
				action: "READ",
				table: nameId.parse(table),
				credentials
			};
			const response = await fetch(baseServerLink, {
				method: "POST",
				mode: "cors",
				redirect: "follow",
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
				body: requst
			});
			const res = JSON.parse(await response.json());
			if(res.error){
				console.error("FATAL ERROR");
				return -1;
			}else{
				console.log("Transaction complete.");
				return res.data;
			}
		}catch(error){
			console.error(error);
			return -1;
		}
	};
	const searchRow = async ({ table, key, value }) => {
	};
	const findRow = async ({ table, key, value }) => {
	};
	const insertRow = async ({ table, row }) => {
	};
	const updateRow = async ({ table, row, id }) => {
	};
	const deleteRow = async ({ table, id }) => {
	};

	const data = {
		readTable,
		searchRow,
		findRow,
		insertRow,
		updateRow,
		deleteRow
	};
	return (
		<Database.Provider value={data} >
			{children}
		</Database.Provider>
	);
};

export default RemoteDB;
