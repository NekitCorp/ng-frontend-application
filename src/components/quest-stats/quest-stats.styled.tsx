import styled from 'styled-components';

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;

	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;

	tr:not(:last-child) td {
		padding-bottom: ${(p) => p.theme.spacing['4xs']};
	}
`;

export const Name = styled.td`
	color: ${(p) => p.theme.colors.gold};
`;

export const Value = styled.td`
	color: ${(p) => p.theme.colors.white};
`;
