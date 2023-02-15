import styled from 'styled-components';
import type { QuestsStatProps } from './quest-stats';

const FONT_SIZES: Record<QuestsStatProps['size'], number> = {
	m: 14,
	s: 12
};

const LINE_HEIGHTS: Record<QuestsStatProps['size'], number> = {
	m: 17,
	s: 14
};

export const Table = styled.table<{ size: QuestsStatProps['size'] }>`
	width: 100%;
	border-collapse: collapse;

	font-style: normal;
	font-weight: 400;
	font-size: ${(p) => FONT_SIZES[p.size]}px;
	line-height: ${(p) => LINE_HEIGHTS[p.size]}px;

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
