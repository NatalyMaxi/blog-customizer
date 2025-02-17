import plane from 'src/images/plane.png';
import { Text } from 'src/ui/text';
import { article, IParagraph } from 'src/constants/texts';

import styles from './Article.module.scss';

export const Article = () => {
	return (
		<article className={styles.article}>
			<Text as='h1' size={45} weight={800} uppercase dynamicLite>
				Портрет Западной Швейцарии
			</Text>
			<div className={styles.titleDescription}>
				<Text
					as='p'
					size={22}
					weight={800}
					uppercase
					align='center'
					dynamicLite>
					Примитивист Фиштр расписывает новый бюджетный авиалайнер
				</Text>
			</div>
			<img className={styles.image} src={plane} alt='Картинка самолета' />
			<Text as='figcaption' dynamic size={18} fontStyle='italic'>
				Фото: Hans-Peter Gauster , &quot;Bombardier CSeries CS300 HB-JCA&quot; ©
				2017 CC BY-SA 2.0
			</Text>
			{article.map((paragraph: IParagraph) => {
				return (
					<Text as='p' key={paragraph.id} dynamic size={18}>
						{paragraph.text}
					</Text>
				);
			})}
		</article>
	);
};
