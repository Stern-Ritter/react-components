import React from 'react';
import Title from '../title/title';
import TextBlock from '../text-block/text-block';
import SpaceBlock from '../space-block/space-block';
import ToggleBlock from '../toggle-block/toggle-block';
import Image from '../image/image';

function App() {
  return (
    <>
      <Title level={1}>1. Пробуждение Левиафана</Title>
      <Title level={2}>2. Война Калибана</Title>
      <Title level={3}>3. Врата Абаддона</Title>
      <Title level={4}>4. Пожар Сиболы</Title>
      <Title level={5}>5. Игры Немезиды</Title>
      <Title level={6}>6. Пепел Вавилона</Title>
      <SpaceBlock
        blockHeight={32}
        separatorHeight={2}
        separatorColor="#483D8B"
      />
      <TextBlock fontFamily="Roboto" fontSize="24" color="#4169E1">
        &laquo;Высокие моральные качества человека никогда не&nbsp;должны мешать
        ему совершать добрые дела.&raquo;&nbsp;&mdash; &copy;&nbsp;Айзек Азимов.
        Академия
      </TextBlock>
      <TextBlock fontFamily="Oxygen" fontSize="28" color="#DC143C">
        Насилие&nbsp;&mdash; последний козырь дилетантов.
        &mdash;&nbsp;&copy;&nbsp;Айзек Азимов. Академия
      </TextBlock>
      <TextBlock fontFamily="Ubuntu" fontSize="20" color="#4682B4">
        Violence is&nbsp;the last refuge of&nbsp;the incompetent.
        &mdash;&nbsp;&copy;&nbsp;Айзек Азимов. Академия
      </TextBlock>
      <SpaceBlock
        blockHeight={48}
        separatorHeight={1}
        separatorColor="#8B0000"
      />
      <ToggleBlock title="Цитата Дэн Симмонс - 'Эндимион'">
        <TextBlock fontFamily="Oxygen" fontSize="24" color="#000000">
          &laquo;Никогда не&nbsp;пренебрегай знаниями, Рауль. В&nbsp;жизни
          человека, который стремится постичь, как устроена вселенная,важнее
          знаний только любовь и&nbsp;честность&raquo;.
        </TextBlock>
      </ToggleBlock>
      <ToggleBlock title="Цитата Анджей Сапковский - 'Ведьмак'">
        <TextBlock fontFamily="Oxygen" fontSize="24" color="#000000">
          Зло&nbsp;&mdash; это зло, Стрегобор,&nbsp;&mdash; серьезно сказал
          ведьмак, вставая. &mdash;&nbsp;Меньшее, большее, среднее&nbsp;&mdash;
          все едино, пропорции условны, а&nbsp;границы размыты.
        </TextBlock>
      </ToggleBlock>
      <ToggleBlock title="Цитата Джеймс Кори - 'Пробуждение Левиафана'">
        <TextBlock fontFamily="Oxygen" fontSize="24" color="#000000">
          Чем хороша потеря иллюзий,&nbsp;&mdash; думал&nbsp;он,&nbsp;&mdash;
          так это тем, что можно больше не&nbsp;притворяться.
        </TextBlock>
      </ToggleBlock>
      <SpaceBlock
        blockHeight={48}
        separatorHeight={1}
        separatorColor="#8B0000"
      />
      <Image
        width={200}
        height={200}
        src={
          'https://mir-s3-cdn-cf.behance.net/projects/max_808/558f0885127607.Y3JvcCwxNDAwLDEwOTUsMCw1OTI.jpg'
        }
        alt={'Дэн Симмонс - Эндимион'}
      />
      <TextBlock fontFamily="Ubuntu" fontSize="20" color="#191970">
        Дэн Симмонс&nbsp;&mdash; &rsquo;Эндимион&rsquo;
      </TextBlock>
      <SpaceBlock
        blockHeight={48}
        separatorHeight={1}
        separatorColor="#8B0000"
      />
      <Image
        width={300}
        height={300}
        src={
          'https://avatars.mds.yandex.net/get-zen_doc/1708669/pub_5e30260228a79920baedbdff_5e302cb3447a0e3ce191a90b/scale_1200'
        }
        alt={'Джеймс Кори - Пробуждение Левиафана'}
      />
      <TextBlock fontFamily="Ubuntu" fontSize="20" color="#191970">
        Джеймс Кори&nbsp;&mdash; &rsquo;Пробуждение Левиафана&rsquo;
      </TextBlock>
      <SpaceBlock
        blockHeight={48}
        separatorHeight={1}
        separatorColor="#8B0000"
      />
      <Image
        width={400}
        height={250}
        src={'https://video.kinoafisha.info/news/8342581_886703989311.jpg'}
        alt={'Лю Цысинь - Задача трёх тел'}
      />
      <TextBlock fontFamily="Ubuntu" fontSize="20" color="#191970">
        Лю&nbsp;Цысинь&nbsp;&mdash; &rsquo;Задача трёх тел&rsquo;
      </TextBlock>
    </>
  );
}

export default App;
