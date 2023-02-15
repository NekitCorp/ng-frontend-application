import styled from 'styled-components';

export const QuestList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	gap: ${(p) => p.theme.spacing.s};
	padding: ${(p) => p.theme.spacing['5xl']} ${(p) => p.theme.spacing['8xl']};
`;

export const QuestListItem = styled.li``;
