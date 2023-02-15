import Image from 'next/image';
import React, { PropsWithChildren } from 'react';
import * as Styled from './layout.styled';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<main>
			<Styled.LogoWrapper>
				<Image src='/logo.svg' alt='Node Guardians Logo' width={285} height={35} priority />
			</Styled.LogoWrapper>

			{children}
		</main>
	);
};
