import { SwordIcon } from '../icons';
import * as Styled from './difficulty.styled';

export type DifficultyProps = {
	value: number;
	size: 's' | 'm';
};

const MAX_VALUE = 5;

export const Difficulty: React.FC<DifficultyProps> = ({ value, size }) => {
	const validatedValue = value < 0 || value > MAX_VALUE ? 0 : value;

	return (
		<Styled.Wrapper>
			{new Array(MAX_VALUE).fill(null).map((_, i) => (
				<Styled.Icon key={i} size={size} selected={validatedValue > i} />
			))}
		</Styled.Wrapper>
	);
};
