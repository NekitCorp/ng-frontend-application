import type { Quest } from '@/src/db/quest-entity';
import { cinzel } from '@/styles/fonts';
import { Difficulty } from '../difficulty/difficulty';
import { QuestsStat } from '../quest-stats/quest-stats';

import * as Styled from './quest-card.styled';

type QuestCardProps = {
	quest: Quest;
};

export const QuestCard: React.FC<QuestCardProps> = ({ quest }) => {
	return (
		<Styled.Card href={`/quest/${quest.id}`} data-id={`quest-card ${quest.id}`}>
			<Styled.Image src={quest.cover} width={320} height={106} alt={quest.title + 'Image'} />
			<Styled.InfoBlock>
				<Styled.QuestTitle className={cinzel.className}>{quest.title}</Styled.QuestTitle>
				<QuestsStat size='s'>
					<QuestsStat.Row>
						<QuestsStat.Stat name='Skill tree'>
							<Styled.SkillTree>{quest.skillTree}</Styled.SkillTree>
						</QuestsStat.Stat>
						<QuestsStat.Stat name='Difficulty'>
							<Difficulty value={quest.difficulty} size='s' />
						</QuestsStat.Stat>
					</QuestsStat.Row>
					<QuestsStat.Row>
						<QuestsStat.Stat name='Skill'>{quest.skill}</QuestsStat.Stat>
						<QuestsStat.Stat name='Experience'>{quest.experience}</QuestsStat.Stat>
					</QuestsStat.Row>
					<QuestsStat.Row>
						<QuestsStat.Stat name='Type'>{quest.type}</QuestsStat.Stat>
						<QuestsStat.Stat name='Gold'>{quest.gold}</QuestsStat.Stat>
					</QuestsStat.Row>
				</QuestsStat>
			</Styled.InfoBlock>
		</Styled.Card>
	);
};
