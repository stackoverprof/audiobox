import React from 'react';
import AuthButton from './AuthButton';
import colors from '@core/style/colors';
import CTACreate from './CTACreate';
import TabLink from './TabLink';
import { FaGlobeAmericas, FaHistory } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';

const TabNavigation = () => {
	return (
		<div
			className="flex-cc w-full h-20 bg-base"
			style={{ boxShadow: `0 0 12px ${colors.theme.pink}55` }}
		>
			<div className="flex-be px-4 w-full">
				<TabLink route="/explore" text="Explore" Icon={FaGlobeAmericas} />
				<TabLink route="/history" text="History" Icon={FaHistory} />
				<CTACreate />
				<TabLink route="/library" text="Library" Icon={ImBooks} />
				<AuthButton />
			</div>
		</div>
	);
};

export default TabNavigation;
