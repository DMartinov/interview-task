import { AdvertHeading } from '@/enums/advertHeading';
import type { IAdvert } from '@/types/avdert';
import { citiesMock } from './cityMock';
import { usersMock } from './usersMock';

export const advertListMock: IAdvert[] = [
  {
    user: usersMock[0],
    city: citiesMock[0],
    date: new Date(2023, 2, 20),
    heading: AdvertHeading.barber,
    post: `Всем привет 🙂
    Меня зовут Анна и вот уже 10 лет я стою на страже красивых волос✨`,
  },
  {
    user: usersMock[1],
    city: citiesMock[1],
    date: new Date(2023, 2, 19),
    heading: AdvertHeading.cleaning,
    post: `Уберусь в вашем доме. Постираю, поглажу, влажная уборка и уборка любых видов. Могу приготовить еду.
    В общем и целом любые виды помощи.`,
  },
  {
    user: usersMock[2],
    city: citiesMock[2],
    date: new Date(2023, 2, 18),
    heading: AdvertHeading.photoVideo,
    post: `Привет! Меня зовут Евгений и я профессиональный фотограф.
    Снимаю индивидуальные и парные фотосессии. Помогу составить образ и подскажу что делать во время съемки! `,
  },
  {
    user: usersMock[2],
    city: citiesMock[2],
    date: new Date(2023, 2, 18),
    heading: AdvertHeading.tutoring,
    post: `Всем привет, предлагаю услуги обучение игре на гитаре для взрослых и детей от 6ти лет, программу обучения подбираю каждому ученику индивидуально, в зависимости от потребностей.`,
  },
];
