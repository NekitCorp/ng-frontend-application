import styled from 'styled-components';
import { SwordIcon } from '../icons';
import type { DifficultyProps } from './difficulty';

export const Wrapper = styled.div`
	display: flex;
	gap: ${(p) => p.theme.spacing['7xs']};
`;

const SIZES: Record<DifficultyProps['size'], number> = {
	m: 12,
	s: 10
};

export const Icon = styled(SwordIcon)<{ size: DifficultyProps['size']; selected: boolean }>`
	width: ${(p) => SIZES[p.size]}px;
	height: ${(p) => SIZES[p.size]}px;
	color: ${({ theme, selected }) => (selected ? theme.colors.gold : theme.colors.grey)};
	opacity: ${({ selected }) => (selected ? 1 : 0.3)};
`;
