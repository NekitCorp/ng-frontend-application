import styled from 'styled-components';
import Link from 'next/link';
import NextImage from 'next/image';

export const Card = styled(Link)`
	display: flex;
	flex-direction: column;
	background: ${(p) => p.theme.colors.lighterBlack};
	border: 1px solid rgba(58, 58, 58, 0.5);
	border-radius: ${(p) => p.theme.radius.xl};
	padding: ${(p) => p.theme.spacing['5xs']};
	text-decoration: none;
`;

export const Image = styled(NextImage)`
	border-radius: ${(p) => p.theme.radius.l};
	object-fit: cover;
`;

export const InfoBlock = styled.div`
	padding: ${({ theme: { spacing } }) => `${spacing['6xs']} ${spacing['5xs']} ${spacing['4xs']} ${spacing['5xs']}`};
`;

export const QuestTitle = styled.h4`
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 19px;
	text-transform: capitalize;

	color: ${(p) => p.theme.colors.white};
	margin: 0;
	margin-bottom: ${(p) => p.theme.spacing['4xs']};
`;

export const SkillTree = styled.span`
	color: ${(p) => p.theme.colors.blue};
`;
