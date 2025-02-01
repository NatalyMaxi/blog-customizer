import { CSSProperties, useState } from 'react';
import clsx from 'clsx';
import { ArticleParamsForm } from 'src/components/article-params-form';
import { Sidebar } from 'src/components/sidebar';
import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';
import { Article } from 'src/page/article';
import styles from './App.module.scss';

const App = () => {
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);

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
			<Article />
			<Sidebar>
				<ArticleParamsForm
					setArticleState={setArticleState}
					articleState={articleState}
				/>
			</Sidebar>
		</main>
	);
};

export default App;
