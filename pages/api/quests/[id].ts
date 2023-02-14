import { questEntity } from '@/src/db/quest-entity';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		if (typeof req.query.id !== 'string') {
			return res.status(404);
		}

		const quest = await questEntity.getQuest(req.query.id);

		// Send a response back to the client
		res.status(200).json(quest);
	} catch (error) {
		// If the request fails, an error will be thrown
		console.error(error);

		// Send an error response back to the client
		res.status(500).json('An error occurred while fetching the data');
	}
}
