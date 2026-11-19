# Blackened Sound

Веб-приложение для поиска музыки: показывает топ метал-треков и ищет песни через [Last.fm API](https://www.last.fm/api). Дипломный проект курса по frontend-разработке.

**Демо:** https://folqdee.github.io/template/

## Возможности

- Топ-200 треков по тегу «metal» с подгрузкой по кнопке «Показать ещё»
- Поиск трека по названию (Enter в строке поиска)
- Карточка трека: обложка, исполнитель, ссылка на страницу трека на Last.fm
- Обработка ошибок сети и пустого результата поиска

## Стек

React 18, TypeScript, Context API, Fetch API, CSS, Create React App.

## Структура

```
src/
  App.tsx              — корневой компонент
  context.tsx          — общее состояние результатов поиска (Context API)
  constants.ts         — адрес API и ключ
  components/
    Input.tsx          — строка поиска
    Main.tsx           — список треков, топ и «Показать ещё»
    TrackCard.tsx      — карточка трека
    ArtistModal.tsx    — окно с информацией об исполнителе
    getApiData.ts      — запросы к API с обработкой ошибок
```

## Запуск

```
npm install
npm start
```

Приложение откроется на http://localhost:3000.

Сборка для продакшена: `npm run build`. При каждом пуше в `main` GitHub Actions собирает проект и публикует его на GitHub Pages.
