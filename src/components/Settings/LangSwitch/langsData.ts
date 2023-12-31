export type LangData = {
  [key: string]: {
    [key: string]: {
      [key: string]: (string | { [key: string]: string })
    }
  }
}

export const langsData: LangData = {
  en: {
    pageHome: {
      h1: 'Keyboard Racing',
      description: `Improve your keyboard skills in a game where you need
     to overtake your opponent on a typewriter and not break`,
      btnRules: 'Rules',
      btnStartNow: 'Start Now!',
      ctaText: 'Start your race! Find out your typing speed and accuracy. Do various races, improve your skills and compete with others. Try different languages and see your results in the "Statistics" section.',
    },
    pageGame: {
      hideShowKeyboardBtn: 'Hide / Show keyboard',
      textWindow: {
        startMessage: 'Click me to Start',
        continueMessage: 'Click me to Continue',
        gameOverMessage: 'Game over!',
      },
      trafficLight: {
        elapsedTime: 'Elapsed time',
        speed: 'Speed',
        accuracy: 'Accuracy',
        elapsedTimeUnit: 'min:sec',
        speedUnit: 'char/min',
        accuracyUnit: '%',
      },
      keyLangBtn: {
        ru: 'Layout: Ru',
        en: 'Layout: En',
      },
      newGameBtn: 'New Game',
    },
    pageStatistic: {
      h1: 'Statistic',
      h2Best: 'Your best results:',
      countRaces: 'Races',
      bestTime: 'Best time',
      speed: 'Speed',
      speedMeasure: 'chars / min',
      accuracy: 'Accuracy',
      driver: 'Driver',
      name: 'Name:',
      status: 'Status:',
      start: 'First start:',
      startRace: 'Start race',
      photo: 'Change photo',
      award: 'Awards:',
      sp100: 'Speed over 100',
      sp200: 'Speed over 200',
      sp300: 'Speed over 300',
      acc: 'Accuracy 100%',
      chartName: 'Speed and Accuracy statistics of the last 10 races:',
      statusDescription: 'The status depends on the number of races. Gain experience and get a TEAMLEAD status.',
    },
    pageNotFound: {
      notFound: 'Page Not Found',
    },
    menuMain: {
      about: 'About',
      race: 'Race',
      stats: 'Stats',
      rules: 'Rules',
    },
    menuSettings: {
      settingsBtn: 'Settings',
      lightBtn: 'Light',
      darkBtn: 'Dark',
      enBtn: 'En',
      ruBtn: 'Ru',
      onBtn: 'On',
      offBtn: 'Off',
    },
    menuLogin: {
      logIn: 'LogIn',
      logOut: 'LogOut',
      email: 'E-mail',
      password: 'Password',
      btnLogin: 'Login',
      wrong: 'Wrong E-mail or Password',
    },
    footer: {
      sign: '© 2023. Special for RS School',
    },
    dataStatus: {
      noDataFirstRace: 'Not started yet',
      noDataTenRaces: 'To get statistics, you must complete the race.',
    },
    misc: {
      loading: 'Loading...',
    },
    modal: {
      modalName: 'Rules',
      modalText: 'To start the game, go to the "Race" section. Click on the box and print the suggested text. If you win, your results are saved (only available to authorized users). You can track them in the "Statistics" section. And also get awards for your best races!',
    },
  },
  ru: {
    pageHome: {
      h1: 'Клавиатурные гонки',
      description: `Совершенствуйте свои навыки клавиатуры в игре, где вам нужно
      обогнать соперника на машинке и не сломаться`,
      btnRules: 'Правила',
      btnStartNow: 'Начать!',
      ctaText: 'Начни свою гонку! Узнай свою скорость печати и точность. Делай различные заезды, совершенствуй свои навыки и соревнуйся с другими. Попробуй разные языки, и смотри свои результаты в разделе "Статистика".',
    },
    pageGame: {
      hideShowKeyboardBtn: 'Скрыть / Показать клавиатуру',
      textWindow: {
        startMessage: 'Нажми меня для начала',
        continueMessage: 'Нажми меня для продолжения',
        gameOverMessage: 'Игра окончена!',
      },
      trafficLight: {
        elapsedTime: 'Пройденное время',
        speed: 'Скорость',
        accuracy: 'Точность',
        elapsedTimeUnit: 'мин:сек',
        speedUnit: 'зн/мин',
        accuracyUnit: '%',
      },
      keyLangBtn: {
        ru: 'Раскладка: Рус',
        en: 'Раскладка: Англ',
      },
      newGameBtn: 'Новая игра',
    },
    pageStatistic: {
      h1: 'Статистика',
      h2Best: 'Твои лучшие результаты:',
      countRaces: 'Заезды',
      bestTime: 'Лучшее время',
      speed: 'Скорость',
      speedMeasure: 'симв / мин',
      accuracy: 'Точность',
      driver: 'Водитель',
      name: 'Имя:',
      status: 'Статус:',
      start: 'Первый старт:',
      startRace: 'Начать гонку',
      photo: 'Сменить фото',
      award: 'Награды:',
      sp100: 'Скорость более 100',
      sp200: 'Скорость более 200',
      sp300: 'Скорость более 300',
      acc: 'Аккуратность 100%',
      chartName: 'Статистика Скорости и Аккуратности 10 последних заездов:',
      statusDescription: 'Статус зависит от количества заездов. Набирайся опыта и получи статус ТИМЛИД.',
    },
    pageNotFound: {
      notFound: 'Страница не найдена',
    },
    menuMain: {
      about: 'Об игре',
      race: 'Гонка',
      stats: 'Статистика',
      rules: 'Правила',
    },
    menuSettings: {
      settingsBtn: 'Настройки',
      lightBtn: 'Светлая',
      darkBtn: 'Тёмная',
      enBtn: 'Англ',
      ruBtn: 'Рус',
      onBtn: 'Вкл',
      offBtn: 'Выкл',
    },
    menuLogin: {
      logIn: 'Войти',
      logOut: 'Выйти',
      email: 'Почта',
      password: 'Пароль',
      btnLogin: 'Войти',
      wrong: 'Неверный логин или пароль',
    },
    footer: {
      sign: '© 2023. Специально для RS School',
    },
    dataStatus: {
      noDataFirstRace: 'Ещё не стартовал',
      noDataTenRaces: 'Для получения статистики необходимо закончить заезд.',
    },
    misc: {
      loading: 'Загрузка...',
    },
    modal: {
      modalName: 'Правила',
      modalText: 'Чтобы начать игру заходи в раздел "Гонка". Кликай на окошко и печетай предложенный текст. В случае победы твои результаты сохраняются (доступно только авторизованным пользователям). Отследить их ты можешь в разделе "Статистика". А также получить награды за свои лучшие заезды!',
    },
  },
};
