import styled from 'styled-components';

export const QuestList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: ${(p) => p.theme.spacing.s} 0;
	display: flex;
	flex-wrap: wrap;
	gap: ${(p) => p.theme.spacing.s};
	justify-content: center;

	${(p) => p.theme.device.tablet} {
		padding: ${(p) => p.theme.spacing['2xl']} ${(p) => p.theme.spacing['5xl']};
	}

	${(p) => p.theme.device.desktop} {
		padding: ${(p) => p.theme.spacing['5xl']} ${(p) => p.theme.spacing['8xl']};
		justify-content: flex-start;
	}
`;

export const QuestListItem = styled.li``;
