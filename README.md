# Запуска storybot для начинающих ~~программистов~~

1. Скачайте данный репозиторий из github (для Windows желательно установить GitBash)
```shell
git clone https://github.com/ciricc/storybot-for-beginners.git && cd storybot-for-beginners
```
2. Установите Node.JS 10 версии <a href="https://nodejs.org">nodejs.org</a>
3. Откройте командную строку в папке `storybot-for-beginners` (этот шаг можно пропустить, если вы вводили команды из прошлых шагов полностью)
<img src="https://raw.github.com/ciricc/storybot-for-beginners/master/cmd.png" alt="Неоходимо прописать cmd сверху там где путь к папке и нажать Enter"/>
4. Введите команду

```shell
npm i
```

5. Настройте бота по собственным нуждам следуя инструкциям из документации <a href="https://www.npmjs.com/package/storybot">storybot</a>
Для этого достаточно отредактировать файл `index.js`

В этом файле для простоты использования добавлена понятная настройка ботов, чтобы добавить нового бота, нужно просто написать код по примеру из файла
```javascript
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
```

6. Установите Mongo DB и создайте в нем базу данных с запоминающимся названием (по умолчанию это просто `storybot`)
7. Запустите бота через команду
```shell
npm run start
```


<i>Чтобы остановить бота, можно закрыть окно консоли или нажать сочетание `Ctrl + C`</i>