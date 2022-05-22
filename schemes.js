import { z } from 'zod';

const idName = z.string().min(1);
const mysqlId = z.number().int().positive();

export {
	idName,
	mysqlId
};
