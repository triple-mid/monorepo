const COVERS = {
    foreman:
        'https://www.e-xecutive.ru/uploads/article/image/1994366/thumb_ulanov.jpg',
    engineer:
        'https://mgsu.ru/upload/iblock/ce5/ce5097e0fbe17c70dac1ef121f14f42c.jpg',
    architect:
        'https://s0.rbk.ru/v6_top_pics/media/img/3/37/756141764115373.jpg',
    carpenter: 'https://mycalling.ru/wp-content/uploads/2017/10/plotnik.jpg',
    electrician:
        'https://prodpo.ru/thumb/2/oSlafkjJwuE5_zjKNxDZCw/r/d/elektrik-21.jpg',
    painter:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Painter_paints_a_room_arp.jpg/1200px-Painter_paints_a_room_arp.jpg',
    designer:
        'https://cdn.basicdecor.ru/files/media/designer_posts/65/big/157.d6.jpg',
    builder: 'https://s13.stc.yc.kpcdn.net/share/i/12/10458003/wr-960.webp',
    welder: 'https://static.tildacdn.com/tild6536-6264-4235-a531-643431373232/svarshchik-1.jpg',
    craneOperator:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUyerF1MRwBvjLITFWX00KArs3dhUCyICHOw&s',
};

export const FAKE_JOB_VACANCIES = {
    'ООО КрасаваСтрой': [
        {
            title: 'Прораб',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '60000',
            priceTo: '80000',
            place: 'г. Краснодар',
            dateFrom: '2024-09-01',
            dateTo: '2024-12-31',
            requireSelfEmployment: false,
            summary: 'Требуется прораб на строительство жилого комплекса.',
            content:
                'Ищем опытного прораба для работы на строительстве многоквартирного дома. Опыт работы обязателен, умение читать чертежи и управлять бригадой.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Инженер ПТО',
            coverUrl: COVERS.engineer,
            cover: null,
            priceFrom: '50000',
            priceTo: '70000',
            place: 'г. Краснодар',
            dateFrom: '2024-09-15',
            dateTo: '2024-12-15',
            requireSelfEmployment: true,
            summary:
                'Требуется инженер ПТО для работы с проектной документацией.',
            content:
                'Работа с проектной документацией, составление графиков производства работ, контроль за выполнением проектных решений. Опыт работы от 3 лет.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Архитектор',
            coverUrl: COVERS.architect,
            cover: null,
            priceFrom: '70000',
            priceTo: '100000',
            place: 'г. Краснодар',
            dateFrom: '2024-10-01',
            dateTo: '2025-01-01',
            requireSelfEmployment: false,
            summary: 'Требуется архитектор для проектирования жилых зданий.',
            content:
                'Разработка архитектурных решений для новых жилых комплексов. Знание AutoCAD, ArchiCAD. Опыт работы приветствуется.',
            createdAt: '2023-10-01T00:00:00Z',
        },
    ],
    'ИП Иванов И.И.': [
        {
            title: 'Плотник',
            coverUrl: COVERS.carpenter,
            cover: null,
            priceFrom: '40000',
            priceTo: '60000',
            place: 'г. Сочи',
            dateFrom: '2024-09-10',
            dateTo: '2024-11-30',
            requireSelfEmployment: false,
            summary: 'Требуется плотник для строительства частных домов.',
            content:
                'Изготовление и монтаж деревянных конструкций. Опыт работы обязателен, умение работать с различными инструментами.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Электрик',
            coverUrl: COVERS.electrician,
            cover: null,
            priceFrom: '50000',
            priceTo: '75000',
            place: 'г. Сочи',
            dateFrom: '2024-09-20',
            dateTo: '2024-12-20',
            requireSelfEmployment: true,
            summary: 'Требуется электрик для частного строительства.',
            content:
                'Прокладка и подключение электросетей в новых домах. Наличие допуска к электроустановкам, опыт работы от 2 лет.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Маляр',
            coverUrl: COVERS.painter,
            cover: null,
            priceFrom: '45000',
            priceTo: '55000',
            place: 'г. Сочи',
            dateFrom: '2024-10-05',
            dateTo: '2024-12-05',
            requireSelfEmployment: false,
            summary: 'Требуется маляр для отделки фасадов.',
            content:
                'Покраска и отделка фасадов частных домов. Умение работать с различными типами красок и инструментов. Ответственность и аккуратность.',
            createdAt: '2023-10-01T00:00:00Z',
        },
    ],
    'ООО Новорострой': [
        {
            title: 'Дизайнер интерьеров',
            coverUrl: COVERS.designer,
            cover: null,
            priceFrom: '60000',
            priceTo: '85000',
            place: 'г. Новороссийск',
            dateFrom: '2024-09-15',
            dateTo: '2025-01-15',
            requireSelfEmployment: true,
            summary: 'Требуется дизайнер интерьеров для новых проектов.',
            content:
                'Создание дизайн-проектов интерьеров, работа с клиентами. Знание современных тенденций в дизайне, работа в 3D Max, SketchUp.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Каменщик',
            coverUrl: COVERS.builder,
            cover: null,
            priceFrom: '50000',
            priceTo: '70000',
            place: 'г. Новороссийск',
            dateFrom: '2024-09-20',
            dateTo: '2024-12-20',
            requireSelfEmployment: false,
            summary: 'Требуется каменщик для строительства малоэтажных зданий.',
            content:
                'Выполнение кладочных работ, опыт работы с различными материалами. Ответственность и аккуратность.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Прораб',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '70000',
            priceTo: '90000',
            place: 'г. Новороссийск',
            dateFrom: '2024-10-01',
            dateTo: '2025-01-01',
            requireSelfEmployment: false,
            summary: 'Прораб на строительство коттеджного поселка.',
            content:
                'Контроль за строительными работами, управление рабочими, контроль качества и сроков выполнения.',
            createdAt: '2023-10-01T00:00:00Z',
        },
    ],
    'ЗАО ВысотСтрой': [
        {
            title: 'Сварщик',
            coverUrl: COVERS.welder,
            cover: null,
            priceFrom: '60000',
            priceTo: '80000',
            place: 'г. Анапа',
            dateFrom: '2024-09-05',
            dateTo: '2024-12-05',
            requireSelfEmployment: true,
            summary: 'Требуется сварщик для работы на высотных объектах.',
            content:
                'Выполнение сварочных работ на высоте, наличие соответствующих допусков. Опыт работы от 3 лет обязателен.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Прораб',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '80000',
            priceTo: '100000',
            place: 'г. Анапа',
            dateFrom: '2024-09-10',
            dateTo: '2025-01-10',
            requireSelfEmployment: false,
            summary: 'Прораб для строительства высотного жилого комплекса.',
            content:
                'Организация и контроль за всеми этапами строительства, управление рабочими, взаимодействие с заказчиком.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Крановщик',
            coverUrl: COVERS.craneOperator,
            cover: null,
            priceFrom: '70000',
            priceTo: '90000',
            place: 'г. Анапа',
            dateFrom: '2024-09-20',
            dateTo: '2024-12-20',
            requireSelfEmployment: false,
            summary: 'Крановщик на строительство высотных зданий.',
            content:
                'Управление строительным краном, опыт работы обязателен, наличие всех необходимых разрешений.',
            createdAt: '2023-10-01T00:00:00Z',
        },
    ],
    'ИП Смирнов А.В.': [
        {
            title: 'Садовник',
            coverUrl: COVERS.designer,
            cover: null,
            priceFrom: '40000',
            priceTo: '55000',
            place: 'г. Армавир',
            dateFrom: '2024-09-01',
            dateTo: '2024-11-01',
            requireSelfEmployment: false,
            summary: 'Садовник для ухода за ландшафтными проектами.',
            content:
                'Уход за растениями, посадка деревьев и кустарников, работа с различными типами почв и растений.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Ландшафтный дизайнер',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '60000',
            priceTo: '80000',
            place: 'г. Армавир',
            dateFrom: '2024-09-15',
            dateTo: '2025-01-15',
            requireSelfEmployment: true,
            summary: 'Ландшафтный дизайнер для создания уникальных проектов.',
            content:
                'Разработка и реализация ландшафтных проектов, знание современных тенденций в ландшафтном дизайне.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Озеленитель',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '45000',
            priceTo: '65000',
            place: 'г. Армавир',
            dateFrom: '2024-10-01',
            dateTo: '2025-01-01',
            requireSelfEmployment: false,
            summary: 'Озеленитель для благоустройства территории.',
            content:
                'Участие в проектах по озеленению территорий, работа с растениями и почвой, ответственность и аккуратность.',
            createdAt: '2023-10-01T00:00:00Z',
        },
    ],
    'ООО ЦентрСтрой': [
        {
            title: 'Сметчик',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '50000',
            priceTo: '70000',
            place: 'г. Геленджик',
            dateFrom: '2024-09-10',
            dateTo: '2024-11-30',
            requireSelfEmployment: true,
            summary: 'Сметчик для составления и проверки сметной документации.',
            content:
                'Составление сметной документации, контроль за расходом материалов, работа с проектной документацией.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Мастер отделочных работ',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '60000',
            priceTo: '75000',
            place: 'г. Геленджик',
            dateFrom: '2024-09-20',
            dateTo: '2024-12-20',
            requireSelfEmployment: false,
            summary: 'Мастер отделочных работ для ремонта офисных помещений.',
            content:
                'Выполнение отделочных работ в офисных помещениях, знание современных материалов и технологий.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Бригадир',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '70000',
            priceTo: '90000',
            place: 'г. Геленджик',
            dateFrom: '2024-10-01',
            dateTo: '2025-01-01',
            requireSelfEmployment: false,
            summary: 'Бригадир для управления строительными бригадами.',
            content:
                'Управление строительными бригадами, контроль за качеством работ, взаимодействие с заказчиком.',
            createdAt: '2023-10-01T00:00:00Z',
        },
    ],
    'ООО ДачаМастер': [
        {
            title: 'Ремонтник',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '40000',
            priceTo: '60000',
            place: 'г. Туапсе',
            dateFrom: '2024-09-05',
            dateTo: '2024-11-30',
            requireSelfEmployment: false,
            summary: 'Ремонтник для мелких ремонтных работ.',
            content:
                'Выполнение мелких ремонтных работ на дачах, умение работать с различными инструментами и материалами.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Мастер на все руки',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '45000',
            priceTo: '65000',
            place: 'г. Туапсе',
            dateFrom: '2024-09-15',
            dateTo: '2024-12-15',
            requireSelfEmployment: true,
            summary: 'Мастер на все руки для ремонта и отделки.',
            content:
                'Выполнение различных видов ремонта и отделки, опыт работы обязателен.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Сантехник',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '50000',
            priceTo: '70000',
            place: 'г. Туапсе',
            dateFrom: '2024-10-01',
            dateTo: '2025-01-01',
            requireSelfEmployment: false,
            summary: 'Сантехник для установки и ремонта сантехнических систем.',
            content:
                'Установка и ремонт сантехнических систем на дачах, опыт работы обязателен.',
            createdAt: '2023-10-01T00:00:00Z',
        },
    ],
    'ЗАО ЭлитСтройДом': [
        {
            title: 'Декоратор',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '70000',
            priceTo: '100000',
            place: 'г. Майкоп',
            dateFrom: '2024-09-10',
            dateTo: '2024-12-31',
            requireSelfEmployment: true,
            summary: 'Декоратор для элитных интерьеров.',
            content:
                'Создание уникальных дизайнерских решений для элитных интерьеров, знание современных трендов.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Технический специалист',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '80000',
            priceTo: '120000',
            place: 'г. Майкоп',
            dateFrom: '2024-09-20',
            dateTo: '2025-01-20',
            requireSelfEmployment: false,
            summary:
                'Технический специалист для работы с элитной недвижимостью.',
            content:
                'Контроль за техническим состоянием объектов, проведение технических осмотров и ремонтных работ.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Прораб',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '90000',
            priceTo: '110000',
            place: 'г. Майкоп',
            dateFrom: '2024-10-01',
            dateTo: '2025-01-01',
            requireSelfEmployment: false,
            summary: 'Прораб для строительства элитной недвижимости.',
            content:
                'Организация и контроль за всеми этапами строительства, управление рабочими, взаимодействие с клиентами.',
            createdAt: '2023-10-01T00:00:00Z',
        },
    ],
    'ООО КомплексЮг': [
        {
            title: 'Гипсокартонщик',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '50000',
            priceTo: '70000',
            place: 'г. Ейск',
            dateFrom: '2024-09-01',
            dateTo: '2024-11-30',
            requireSelfEmployment: false,
            summary: 'Гипсокартонщик для отделочных работ в новостройках.',
            content:
                'Установка гипсокартонных конструкций, работа с различными типами материалов.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Плиточник',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '60000',
            priceTo: '80000',
            place: 'г. Ейск',
            dateFrom: '2024-09-15',
            dateTo: '2024-12-15',
            requireSelfEmployment: true,
            summary: 'Плиточник для укладки плитки в новостройках.',
            content:
                'Укладка плитки на пол и стены, знание современных материалов и технологий.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Электрик',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '50000',
            priceTo: '75000',
            place: 'г. Ейск',
            dateFrom: '2024-10-01',
            dateTo: '2025-01-01',
            requireSelfEmployment: false,
            summary: 'Электрик для новостроек.',
            content:
                'Прокладка электропроводки и подключение электроприборов в новостройках, опыт работы обязателен.',
            createdAt: '2023-10-01T00:00:00Z',
        },
    ],
    'ООО ЮжСтройПрофи': [
        {
            title: 'Прораб',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '70000',
            priceTo: '90000',
            place: 'г. Славянск-на-Кубани',
            dateFrom: '2024-09-05',
            dateTo: '2025-01-05',
            requireSelfEmployment: false,
            summary: 'Прораб для строительства многоквартирного дома.',
            content:
                'Контроль за всеми этапами строительства, управление рабочими, взаимодействие с заказчиком.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Бригадир',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '65000',
            priceTo: '85000',
            place: 'г. Славянск-на-Кубани',
            dateFrom: '2024-09-15',
            dateTo: '2024-12-15',
            requireSelfEmployment: true,
            summary: 'Бригадир для управления строительными бригадами.',
            content:
                'Управление строительными бригадами, контроль за качеством работ, взаимодействие с клиентами.',
            createdAt: '2023-10-01T00:00:00Z',
        },
        {
            title: 'Маляр',
            coverUrl: COVERS.foreman,
            cover: null,
            priceFrom: '40000',
            priceTo: '60000',
            place: 'г. Славянск-на-Кубани',
            dateFrom: '2024-10-01',
            dateTo: '2025-01-01',
            requireSelfEmployment: false,
            summary: 'Маляр для отделочных работ.',
            content:
                'Покраска и отделка стен в новостройках, умение работать с различными типами красок и инструментов.',
            createdAt: '2023-10-01T00:00:00Z',
        },
    ],
} as const;
