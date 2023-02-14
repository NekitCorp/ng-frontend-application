export type Quest = {
	id: number;
	skillTree: string;
	skill: string;
	title: string;
	difficulty: number;
	experience: number;
	gold: number;
	type: string;
	cover: string;
};

export type QuestDetail = Quest & {
	description: string;
	rewards: {
		experience: number;
		gold: number;
	};
};

class QuestEntity {
	public async getQuests(): Promise<Quest[]> {
		// Save the data to the collection
		const getRes = await fetch(`https://dummyjson.com/products?offset=0&limit=10`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then((data) => data.products);

		if (getRes.code) {
			throw new Error('An error occurred while fetching the data');
		}

		return getRes.map((quest: any) => {
			return {
				id: quest.id,
				skillTree: quest.category.replace('-', ' '), // 'home-decoration' => 'home decoration'
				skill: quest.brand,
				title: quest.title,
				difficulty: Math.floor(quest.rating),
				experience: quest.stock * 100,
				gold: quest.price,
				type: '-',
				cover: quest.thumbnail
			};
		});
	}

	public async getQuest(id: string | number): Promise<QuestDetail> {
		// Fetch a product by id
		const questRes = await fetch(`https://dummyjson.com/products/${String(id)}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => response.json());

		if (questRes.code) {
			throw new Error('An error occurred while fetching the data');
		}

		return {
			id: questRes.id,
			skillTree: questRes.category.replace('-', ' '), // 'home-decoration' => 'home decoration'
			skill: questRes.brand,
			title: questRes.title,
			difficulty: Math.floor(questRes.rating),
			experience: questRes.stock * 100,
			gold: questRes.price,
			type: '-',
			cover: questRes.thumbnail,
			description: questRes.description,
			rewards: {
				experience: questRes.stock * 100,
				gold: questRes.price
			}
		};
	}
}

export const questEntity = new QuestEntity();
