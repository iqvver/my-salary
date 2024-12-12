export const MAX_SUBS_AMOUNT = 20_0000
export const MAX_RATING_AMOUNT = 5_000
export const MIN_SUBS_AMOUNT = 0
export const MIN_RATING_AMOUNT = -100
export const DATE_FILTER_MASK = 'YYYY-MM-DD'

export enum NominationEnum {
    RAMA3 = '103001',
    STVORKA3 = '103002',
    IMPOST3 = '103003',
    RAMA5 = '105001',
    STVORKA5 = '105002',
    IMPOST5 = '105003',
    PODSTAV = '506000',
    RAMADV = '103004',
    STVORKADV = '103005',
    SHTAPIK3 = '102400',
    SHTAPIK5 = '152400',
    SHTAPIK32 = '103200',
    SOEDINITEL = '501000',
    POVOROTN = '502000',
    RASHIRITEL = '503000',
}
// export enum NominationEnum {
//     RAMA3 = 'Рама 3',
//     STVORKA3 = 'Створка 3',
//     IMPOST3 = 'Импост 3',
//     RAMA5 = 'Рама 5',
//     STVORKA5 = 'Створка 5',
//     IMPOST5 = 'Импост 5',
//     PODSTAV = 'Подставочник',
//     RAMADV = 'Рама ДВ',
//     STVORKADV = 'Створка ДВ',
//     SHTAPIK3 = 'Штапик 3',
//     SHTAPIK5 = 'Штапик 5',
//     SHTAPIK32 = 'Штапик 32',
//     SOEDINITEL = 'Соединитель',
//     POVOROTN = 'Поворотный',
//     RASHIRITEL = 'Расширитель'
// }

type NominationPriceValueType = 0.3 | 0.6

type NominationInfo = {
    title: string
    nom: number
    long: number
    price: NominationPriceValueType
}

export const nomination: { [key: string]: NominationInfo } = {
    103001: {
        title: 'Рама 3',
        nom: 103001,
        long: 6.5,
        price: 0.6,
    },
    103002: {
        title: 'Створка 3',
        nom: 103002,
        long: 6.5,
        price: 0.6,
    },
    103003: {
        title: 'Импост 3',
        nom: 103003,
        long: 6.5,
        price: 0.6,
    },
    105001: {
        title: 'Рама 5',
        nom: 105001,
        long: 6.5,
        price: 0.6,
    },
    105002: {
        title: 'Створка 5',
        nom: 105002,
        long: 6.5,
        price: 0.6,
    },
    105003: {
        title: 'Импост 5',
        nom: 105003,
        long: 6.5,
        price: 0.6,
    },
    506000: {
        title: 'Подставочник',
        nom: 506000,
        long: 6.0,
        price: 0.3,
    },
    103004: {
        title: 'Рама Дверная',
        nom: 103004,
        long: 6.3,
        price: 0.6,
    },
    103005: {
        title: 'Створка Дверная',
        nom: 103005,
        long: 6.5,
        price: 0.6,
    },
    102400: {
        title: 'Штапик 3',
        nom: 102400,
        long: 6.0,
        price: 0.3,
    },
    152400: {
        title: 'Штапик 5',
        nom: 152400,
        long: 6.0,
        price: 0.3,
    },
    103200: {
        title: 'Штапик 32',
        nom: 103200,
        long: 6.0,
        price: 0.3,
    },
    501000: {
        title: 'Соединитель',
        nom: 501000,
        long: 6.0,
        price: 0.6,
    },
    502000: {
        title: 'Поворотный',
        nom: 502000,
        long: 6.0,
        price: 0.6,
    },
    503000: {
        title: 'Расширитель',
        nom: 503000,
        long: 6.0,
        price: 0.6,
    },
} as const
// export const nomination: Record<NominationEnum, NominationInfo> = {
//     103001: {
//         title: 'Рама 3',
//         nom: 103001,
//         long: 6.5,
//         price: 0.6,
//     },
//     103002: {
//         title: 'Створка 3',
//         nom: 103002,
//         long: 6.5,
//         price: 0.6,
//     },
//     103003: {
//         title: 'Импост 3',
//         nom: 103003,
//         long: 6.5,
//         price: 0.6,
//     },
//     105001: {
//         title: 'Рама 5',
//         nom: 105001,
//         long: 6.5,
//         price: 0.6,
//     },
//     105002: {
//         title: 'Створка 5',
//         nom: 105002,
//         long: 6.5,
//         price: 0.6,
//     },
//     105003: {
//         title: 'Импост 5',
//         nom: 105003,
//         long: 6.5,
//         price: 0.6,
//     },
//     506000: {
//         title: 'Подставочник',
//         nom: 506000,
//         long: 6.0,
//         price: 0.3,
//     },
//     103004: {
//         title: 'Рама Дверная',
//         nom: 103004,
//         long: 6.3,
//         price: 0.6,
//     },
//     103005: {
//         title: 'Створка Дверная',
//         nom: 103005,
//         long: 6.5,
//         price: 0.6,
//     },
//     102400: {
//         title: 'Штапик 3',
//         nom: 102400,
//         long: 6.0,
//         price: 0.3,
//     },
//     152400: {
//         title: 'Штапик 5',
//         nom: 152400,
//         long: 6.0,
//         price: 0.3,
//     },
//     103200: {
//         title: 'Штапик 32',
//         nom: 103200,
//         long: 6.0,
//         price: 0.3,
//     },
//     501000: {
//         title: 'Соединитель',
//         nom: 501000,
//         long: 6.0,
//         price: 0.6,
//     },
//     502000: {
//         title: 'Поворотный',
//         nom: 502000,
//         long: 6.0,
//         price: 0.6,
//     },
//     503000: {
//         title: 'Расширитель',
//         nom: 503000,
//         long: 6.0,
//         price: 0.6,
//     },
// }

export const channelThemeTags = [
    'Недвижимость',
    'Культура и события',
    'Криптовалюты',
    'Маркетинг и PR',
    'Региональные',
    'Строительство и ремонт',
    'Инвестиции',
    'Мотивация и саморазвитие',
    'История',
    'Дети и родители',
    'Хобби и развлечения',
    'Еда и кулинария',
    'Другое',
    'Искусство и дизайн',
    'Любопытные факты',
    'Музыка',
    'Видеоигры',
    'Юмор',
    'Новости и сми',
    'Здоровье и медицина',
    'Красота и уход',
    'Знаменитости и образ жизни',
    'Фитнес',
    'Психология и отношения',
    'Интернет технологии',
    'Образование',
    'Бизнес и стартапы',
    'Сливы',
    'Заработок',
    '18+',
    'Животные',
    'Наука и технологии',
    'Иностранные языки',
    'Спорт',
    'Мода и стиль',
    'Путешествия и туризм',
    'Ставки и азартные игры',
    'Скидки и акции',
    'Религия и духовность',
    'Каталоги каналов и ботов',
    'Узбекские каналы',
    'Кино',
    'Экономика и финансы',
    'Трейдинг',
    'Юриспруденция',
    'Работа и вакансии',
]
