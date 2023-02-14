import { Quest, questEntity } from '@/src/db/quest-entity';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

export const getStaticPaths: GetStaticPaths = async () => {
	const quests = await questEntity.getQuests();

	// Get the paths we want to pre-render based on posts
	const paths = quests.map((quest) => ({
		params: { id: String(quest.id) }
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: blocking } will server-render pages
	// on-demand if the path doesn't exist.
	return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<QuestPageProps, { id: string }> = async ({ params }) => {
	if (!params?.id) {
		throw new Error(`Param id not passed.`);
	}

	const quest = await questEntity.getQuest(params.id);

	return { props: { quest } };
};

type QuestPageProps = {
	quest: Quest;
};

const QuestPage: NextPage<QuestPageProps> = ({ quest }) => {
	return (
		<>
			<Head>
				<title>{quest.title}</title>
			</Head>

			<main style={{ background: '#fff', padding: 16 }}>
				<Link href='/'>Back</Link>
				{JSON.stringify(quest, null, 2)}
			</main>
		</>
	);
};

export default QuestPage;
