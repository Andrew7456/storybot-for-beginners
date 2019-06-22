const { Bot, Collector, Viewer } = require('storybot');


async function main () {
  /** Здесь пишем код для бота */

  const bot = new Bot({
    dbname: 'storybot' // Имя базы данных Mongo DB
  });


  /** Тут добавляем новых ботов и виюверов, а также новые сборщики */

  

  /** Тут уже ваши полномочия все уже */

  console.log('Запускаем ботов ...')
  await bot.startBots();
  console.log('Все боты запущены');

}

main();