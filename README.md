# Тестовое задание iSpring (2025 год) - Части 2(UI) и 3(API)
Ссылка на ТЗ: https://drive.google.com/file/d/1oKEtAySAqiwwdLh3zmnmhyCk-kqMJ4Zk/view?usp=sharing

Ссылка на чек-лист (Часть 1): https://docs.google.com/spreadsheets/d/1b5tbMTCAVAfKeyAU5nYS0c1iQ8TRrhZ3/edit?usp=sharing&ouid=111981749747816404125&rtpof=true&sd=true

### Системные требования для запуска автотестов:
1. ОС: Windows 10 Pro x64 22H2 и новее
1. Процессор: Intel Core i5-4210M и выше
1. RAM: 2 ГБ и выше
1. Chrome Selenium Web Driver: 133.0.6943.99
1. Node.js: v22.14.0
1. Npm: 10.9.2

### Инструкция по запуску автоетстов:
- Выкачить данный репозиторий, разместить в необходимой директории.
- Перейти в корень проекта и выполнить:
```
npm i
```
- Создать и заполнить значения файла _.env_:
```
GITHUB_OWNER=... 			//никнейм с сервиса
GITHUB_REPO=...				//наименование репозитория
GITHUB_MAIL=... 			//подтвержденная почта авторизации
GITHUB_PASS=... 			//пароль от учетной записи
GITHUB_ACCESS_TOKEN=... 		//токен пользователя, созданный в настройках профиля

... - указанные Вами значения
```
- Запустить автотесты из корня проекта:
```
npm run wdio
```
### Ожидаемый результат:
![image](https://github.com/user-attachments/assets/7ae748f2-930a-48be-9759-7ca25ed735ef)


#### Полезные ссылки:
- https://webdriver.io/docs/selectors
- https://mochajs.org
- https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#create-an-issue
