import type { Quest } from '@/src/db/quest-entity';
import Link from 'next/link';
import * as Styled from './quest-detail-card.styled';

type QuestDetailCardProps = {
	quest: Quest;
};

export const QuestDetailCard: React.FC<QuestDetailCardProps> = ({ quest }) => {
	return (
		<Styled.Wrapper>
			<Link href='/'>Back</Link>
			{JSON.stringify(quest, null, 2)}
		</Styled.Wrapper>
	);
};
