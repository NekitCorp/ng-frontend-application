import { QuestList } from '@/src/components/quest-list/quest-list';
import { questService } from '@/src/services/quest-service';
import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['quests'],
		queryFn: questService.getQuests
	});

	if (isLoading) return <>{'Loading...'}</>;

	if (error) return <>{'An error has occurred: ' + error}</>;

	if (!data) return <>{'Data does not exist.'}</>;

	return (
		<>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>

			<QuestList quests={data} />
		</>
	);
};

export default HomePage;
