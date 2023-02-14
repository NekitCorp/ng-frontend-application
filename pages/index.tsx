import { questService } from '@/src/services/quest-service';
import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const HomePage: NextPage = () => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['quests'],
		queryFn: questService.getQuests
	});

	if (isLoading) return <>{'Loading...'}</>;

	if (error) return <>{'An error has occurred: ' + error}</>;

	return (
		<>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>

			<main style={{ background: '#fff' }}>
				<ul>
					{data?.map((quest) => (
						<li key={quest.id}>
							<Link href={`/quest/${quest.id}`}>{quest.title}</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
};

export default HomePage;
