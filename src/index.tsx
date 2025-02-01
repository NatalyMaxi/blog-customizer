import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './page/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	defaultArticleState,
	fontColors,
	contentWidthArr,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import { Sidebar } from './components/sidebar';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);

	const handleAgeChange = () => {
		setArticleState((prevObject) => ({
			...prevObject,
			fontColor: fontColors[5],
			contentWidth: contentWidthArr[1],
		}));
	};

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<button
				style={{
					fontSize: '40px',
					width: '200',
					height: '200',
				}}
				onClick={handleAgeChange}>
				КНОПКA
			</button>
			<Article articleState={articleState} />
			<Sidebar>
				<ArticleParamsForm />
			</Sidebar>
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

// export const defaultArticleState = {
// 	fontFamilyOption: fontFamilyOptions[0],
// 	fontColor: fontColors[0],
// 	backgroundColor: backgroundColors[0],
// 	contentWidth: contentWidthArr[0],
// 	fontSizeOption: fontSizeOptions[0],
// };
