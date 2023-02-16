import type { Quest } from '@/src/db/quest-entity';
import { QuestCard } from '../quest-card/quest-card';
import * as Styled from './quest-list.styled';

type QuestListProps = {
	quests: Quest[];
};

export const QuestList: React.FC<QuestListProps> = ({ quests }) => {
	return (
		<Styled.QuestList data-id='quest-list'>
			{quests.map((quest) => (
				<Styled.QuestListItem key={quest.id}>
					<QuestCard quest={quest} />
				</Styled.QuestListItem>
			))}
		</Styled.QuestList>
	);
};
