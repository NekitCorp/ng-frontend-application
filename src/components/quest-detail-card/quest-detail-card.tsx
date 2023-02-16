import { QuestDetail } from '@/src/db/quest-entity';
import { cinzel, lato } from '@/styles/fonts';
import Image from 'next/image';
import { Difficulty } from '../difficulty/difficulty';
import { ExpIcon } from '../icons';
import { QuestsStat } from '../quest-stats/quest-stats';
import * as Styled from './quest-detail-card.styled';

type QuestDetailCardProps = {
	quest: QuestDetail;
};

export const QuestDetailCard: React.FC<QuestDetailCardProps> = ({ quest }) => {
	return (
		<Styled.Wrapper data-id='quest-detail-card'>
			<Styled.Card>
				<Styled.CloseLink href='/' data-id='cross-link'>
					<Image src='/cross.svg' alt='Cross icon' width={14} height={14} />
				</Styled.CloseLink>

				<Styled.ImageWrapper>
					<Styled.Image src={quest.cover} fill alt={quest.title + 'Image'} />
				</Styled.ImageWrapper>

				<Styled.InfoBlock>
					<Styled.QuestTitle className={cinzel.className}>
						<Styled.LeftTitleIcon />
						{quest.title}
						<Styled.RightTitleIcon />
					</Styled.QuestTitle>

					<QuestsStat size='m'>
						<QuestsStat.Row>
							<QuestsStat.Stat name='Skill tree'>{quest.skillTree}</QuestsStat.Stat>
							<QuestsStat.Stat name='Difficulty'>
								<Difficulty value={quest.difficulty} size='m' />
							</QuestsStat.Stat>
						</QuestsStat.Row>
						<QuestsStat.Row>
							<QuestsStat.Stat name='Skill'>{quest.skill}</QuestsStat.Stat>
							<QuestsStat.Stat name='Quest type'>{quest.type}</QuestsStat.Stat>
						</QuestsStat.Row>
					</QuestsStat>

					<Styled.Description className={lato.className}>{quest.description}</Styled.Description>

					<Styled.RewardsTitle className={cinzel.className}>QUEST REWARDS</Styled.RewardsTitle>

					<Styled.Footer>
						<Styled.Rewards>
							<ExpIcon />
							<Styled.ExpValue className={cinzel.className}>+{quest.rewards.experience}</Styled.ExpValue>
						</Styled.Rewards>

						<Styled.GoBack className={cinzel.className} href='/' data-id='go-back-button'>
							Go back
						</Styled.GoBack>
					</Styled.Footer>
				</Styled.InfoBlock>
			</Styled.Card>
		</Styled.Wrapper>
	);
};
