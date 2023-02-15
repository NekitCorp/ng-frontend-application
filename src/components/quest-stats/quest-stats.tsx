import { PropsWithChildren } from 'react';
import { Lato } from '@next/font/google';

import * as Styled from './quest-stats.styled';

const lato = Lato({ subsets: ['latin'], weight: ['400'], display: 'swap' });

export const QuestsStat: React.FC<PropsWithChildren> & { Row: typeof Row; Stat: typeof Stat } = ({ children }) => (
	<Styled.Table className={lato.className}>
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
