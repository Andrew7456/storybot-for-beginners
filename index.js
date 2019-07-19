const { Bot, Collector, Viewer } = require('storybot');


async function main () {
  /** Здесь пишем код для бота */

  const botController = new Bot({
    database: {
      filename: __dirname + '/storybot.sqlite'
    } // Имя базы данных Mongo DB
  });


  /** Тут добавляем новых ботов и виюверов, а также новые сборщики */

  // Пример добавления бота  
  await addNewBot({
    collector: {
      tokens: ['token1', 'token2']
    },
    viewers: [
      {
        account: {
          username: 'example@domain.com',
          password: 'password'
        },
        reauth: true
      }, // Через запятую добавляем другие виюверы
    ],
    bot: {
      name: 'bot1', // ОБЯЗАТЕЛЬНОЕ УНИКАЛЬНОЕ НАЗВАНИЕ БОТА
      groupIds: [1,2,3]
    }
  });

  await addNewBot({
    bot: { // Настройки бота (имя, группы и т.д)
      name: 'bot1',
      groupIds: [1,2,3]
    },
    viewers: [ // Натсройки виюверов, которые будут смотреть истории
      {
        account: {
          username: 'example@domain.ru',
          password: 'password'
        },
        reauth: false // По документации
      },
      {
        account: {
          username: 'example@domain.ru',
          password: 'password'
        }
      }, // через запятую другие аккаунты
    ],
    collector: { // Коллектор, которы будет искать истории пользователей (токены пользователей)
      tokens: ['token1', 'token2']
    }
  });


  /** Тут уже ваши полномочия все уже */

  console.log('Запускаем ботов ...')
  await botController.startBots();
  console.log('Все боты запущены');


  async function addNewBot (options={}) {
    const collectorOptions = options.collector;
    const viewersOptions = options.viewers;
    const botOptions = options.bot;

    let viewers = [];

    // Добавляем виюверы
    viewersOptions.forEach(viewerOptions => {
      let viewer = new Viewer(viewerOptions);
      viewers.push(viewer);
    });

    let collector = new Collector(collectorOptions);
    console.log(`Добавляем нового бота ${options.bot.name}`);
    botController.addBot({
      viewers,
      collector,
      ...botOptions
    });
    console.log(`Бот ${options.bot.name} добавлен`);
  }

}

main();