import { lato } from '@/styles/fonts';
import { PropsWithChildren } from 'react';

import * as Styled from './quest-stats.styled';

export type QuestsStatProps = {
	size: 's' | 'm';
};

export const QuestsStat: React.FC<PropsWithChildren<QuestsStatProps>> & { Row: typeof Row; Stat: typeof Stat } = ({
	children,
	size
}) => (
	<Styled.Table className={lato.className} size={size}>
		<tbody>{children}</tbody>
	</Styled.Table>
);

const Row: React.FC<PropsWithChildren> = ({ children }) => <tr>{children}</tr>;

type StatProps = {
	name: string;
};

const Stat: React.FC<PropsWithChildren<StatProps>> = ({ name, children }) => (
	<>
		<Styled.Name>{name}</Styled.Name>
		<Styled.Value>{children}</Styled.Value>
	</>
);

QuestsStat.Row = Row;
QuestsStat.Stat = Stat;
