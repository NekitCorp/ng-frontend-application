import NextImage from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { TitleLineIcon } from '../icons';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: ${(p) => p.theme.spacing['3xs']} 0;

	${(p) => p.theme.device.tablet} {
		padding: ${(p) => p.theme.spacing.s} 0;
	}
`;

export const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background: ${(p) => p.theme.colors.lighterBlack};
	border: 1px solid rgba(58, 58, 58, 0.5);
	border-radius: ${(p) => p.theme.radius.xl};
	padding: ${(p) => p.theme.spacing['6xs']};
`;

export const CloseLink = styled(Link)`
	position: absolute;
	top: ${(p) => p.theme.spacing['2xs']};
	right: ${(p) => p.theme.spacing['2xs']};
`;

export const Image = styled(NextImage)`
	border-radius: ${(p) => p.theme.radius.l};
	object-fit: cover;
`;

export const InfoBlock = styled.div`
	padding: ${({ theme: { spacing } }) => `${spacing['5xs']} ${spacing['3xs']} ${spacing.s} ${spacing['3xs']}`};
`;

export const QuestTitle = styled.h4`
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 27px;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${(p) => p.theme.spacing['3xs']};
	color: ${(p) => p.theme.colors.white};
	margin: 0;
	margin-bottom: ${(p) => p.theme.spacing['6xs']};
`;

export const LeftTitleIcon = styled(TitleLineIcon)`
	width: 149px;
	height: 9px;
`;

export const RightTitleIcon = styled(LeftTitleIcon)`
	transform: rotate(180deg);
`;

export const Description = styled.p`
	margin: 0;
	padding: ${(p) => p.theme.spacing['3xs']} 0;
	color: ${(p) => p.theme.colors.grey};
	min-height: 150px;

	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
`;

export const RewardsTitle = styled.h4`
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 19px;
	text-transform: capitalize;
	color: ${(p) => p.theme.colors.white};
	margin-bottom: ${(p) => p.theme.spacing['5xs']};
`;

export const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Rewards = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: ${(p) => p.theme.spacing['6xs']};
	width: 58px;
	height: 58px;
	border: 1px solid ${(p) => p.theme.colors.gold};
	background: linear-gradient(180deg, rgba(7, 15, 29, 0) 0%, rgba(54, 77, 137, 0.4) 100%);
`;

export const ExpValue = styled.span`
	font-style: normal;
	font-weight: 700;
	font-size: 8px;
	line-height: 11px;
	color: ${(p) => p.theme.colors.white};
`;

export const GoBack = styled(Link)`
	border: 1px solid ${(p) => p.theme.colors.gold};
	border-radius: ${(p) => p.theme.radius.s};
	padding: ${(p) => p.theme.spacing['4xs']} ${(p) => p.theme.spacing['xs']};
	color: ${(p) => p.theme.colors.white};

	text-decoration: none;
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	text-transform: capitalize;
`;
