import { Quest } from '../db/quest-entity';

class QuestService {
	private readonly HOST = process.env.HOST ?? '';
	private readonly QUESTS_API = `${this.HOST}/api/quests`;

	public getQuests = async (): Promise<Quest[]> => {
		const res = await fetch(`${this.QUESTS_API}`);
		return await res.json();
	};

	public getQuest = async (id: number | string): Promise<Quest> => {
		const res = await fetch(`${this.QUESTS_API}/${id}`);
		return await res.json();
	};
}

export const questService = new QuestService();
