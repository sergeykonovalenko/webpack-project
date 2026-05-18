# 🚀 Webpack Project Template

<div align="center">

![Webpack](https://img.shields.io/badge/webpack-5.104.1-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-339933?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**Профессиональный шаблон для разработки frontend-проектов на базе Webpack 5**

[Возможности](#-возможности) • [Быстрый старт](#-быстрый-старт) • [Документация](#-документация) • [Структура](#-структура-проекта)

</div>

---

## 📋 Содержание

- [О проекте](#-о-проекте)
- [Возможности](#-возможности)
- [Технологии](#-технологии)
- [Требования](#-требования)
- [Быстрый старт](#-быстрый-старт)
- [Скрипты](#-скрипты)
- [Структура проекта](#-структура-проекта)
- [Конфигурация](#-конфигурация)
- [Разработка](#-разработка)
- [Production сборка](#-production-сборка)
- [Браузерная поддержка](#-браузерная-поддержка)
- [Оптимизация](#-оптимизация)
- [Лицензия](#-лицензия)
- [Автор](#-автор)

---

## 📖 О проекте

Современный и гибкий шаблон для разработки frontend-проектов, построенный на базе **Webpack 5**. Включает в себя все необходимые инструменты для комфортной разработки и создания оптимизированных production-сборок.

Этот шаблон идеально подходит для:

- Создания лендингов и многостраничных сайтов
- Быстрого прототипирования
- Разработки корпоративных веб-приложений
- Обучения современным frontend-технологиям

---

## ✨ Возможности

- ⚡ **Быстрая разработка** с Hot Module Replacement (HMR)
- 🎨 **SCSS/SASS** с автопрефиксером и PostCSS
- 🔄 **Babel** для транспиляции современного JavaScript
- 📦 **Code Splitting** для оптимизации загрузки
- 🖼️ **SVG Sprite** для работы с иконками
- 🔤 **Web Fonts** (WOFF/WOFF2) поддержка
- 📱 **Responsive** дизайн из коробки
- 🎯 **jQuery** и современные библиотеки
- 🗜️ **Автоматическая минификация** CSS и JS
- 📊 **Source Maps** для удобной отладки
- 🔍 **Autoprefixer** для кроссбраузерности
- 🚀 **Оптимизированная production-сборка**
- 🔧 **Модульная архитектура** стилей и скриптов

---

## 🛠 Технологии

### Core

- **Webpack 5** - сборщик модулей
- **Webpack Dev Server** - dev-сервер с HMR
- **Babel** - транспиляция ES6+

### Styles

- **SASS/SCSS** - препроцессор
- **PostCSS** - трансформация CSS
- **Autoprefixer** - автоматические вендорные префиксы
- **normalize.css** - сброс стилей

### JavaScript

- **jQuery 3.7.1** - DOM манипуляции
- **@fancyapps/ui** - модальные окна и галереи
- **focus-visible** - управление фокусом
- **Modernizr** - feature detection

### Optimization

- **Terser** - минификация JavaScript
- **CssMinimizerPlugin** - минификация CSS
- **SVG Sprite Loader** - оптимизация SVG
- **Code Splitting** - разделение бандлов

---

## 📦 Требования

Перед началом работы убедитесь, что у вас установлены:

- **Node.js** >= 18.12.0
- **pnpm** >= 10.0.0

Проверить версии:

```bash
node --version
pnpm --version
```

---

## 🚀 Быстрый старт

### 1. Клонирование репозитория

```bash
git clone https://github.com/sergeykonovalenko/webpack-project.git
cd webpack-project
```

### 2. Установка зависимостей

```bash
pnpm install
```

### 3. Запуск dev-сервера

```bash
pnpm start
```

Проект автоматически откроется в браузере по адресу `http://localhost:8080` (или другой доступный порт).

### 4. Сборка для production

```bash
pnpm run build
```

Готовые файлы будут находиться в папке `dist/`.

---

## 📜 Скрипты

| Команда          | Описание                                               |
| ---------------- | ------------------------------------------------------ |
| `pnpm start`      | Запуск dev-сервера с автоматическим открытием браузера |
| `pnpm run build`  | Production-сборка проекта с минификацией               |
| `pnpm run watch`  | Режим отслеживания изменений без dev-сервера           |
| `pnpm run format` | Форматирование кода с помощью Prettier                 |

### Детальное описание команд

#### `pnpm start`

Запускает webpack-dev-server в режиме разработки:

- Включен Hot Module Replacement
- Source maps для отладки
- Автоматическое обновление браузера
- Доступ с других устройств в локальной сети

#### `pnpm run build`

Создает оптимизированную production-сборку:

- Минификация JavaScript (Terser)
- Минификация CSS (CSSNano)
- Транспиляция для старых браузеров (Babel)
- Оптимизация изображений
- Генерация SVG-спрайтов
- Разделение кода на чанки

#### `pnpm run watch`

Наблюдает за изменениями файлов и автоматически пересобирает проект без запуска сервера.

#### `pnpm run format`

Форматирует код в соответствии с настройками Prettier.

---

## 📁 Структура проекта

```
webpack-project/
│
├── dist/                          # Собранные файлы (генерируется автоматически)
│
├── src/                           # Исходные файлы
│   ├── fonts/                     # Веб-шрифты
│   │   ├── OpenSans-Bold.woff
│   │   ├── OpenSans-Bold.woff2
│   │   ├── OpenSans-Light.woff
│   │   ├── OpenSans-Light.woff2
│   │   ├── OpenSans-Regular.woff
│   │   └── OpenSans-Regular.woff2
│   │
│   ├── img/                       # Изображения
│   │   ├── favicon/               # Иконки сайта
│   │   ├── og/                    # Open Graph изображения
│   │   └── svg-sprite/            # SVG иконки для спрайта
│   │
│   ├── inc/                       # HTML-инклюды
│   │   ├── header.html
│   │   └── footer.html
│   │
│   ├── js/                        # JavaScript файлы
│   │   ├── common.js              # Общий функционал
│   │   ├── svg-sprite.js          # Загрузка SVG-спрайта
│   │   └── vendor/                # Сторонние библиотеки
│   │       └── modernizr-custom.js
│   │
│   ├── scss/                      # Стили SCSS
│   │   ├── modules/               # Модули компонентов
│   │   │   ├── _button.scss
│   │   │   ├── _container.scss
│   │   │   ├── _header.scss
│   │   │   ├── _footer.scss
│   │   │   └── ...
│   │   │
│   │   ├── spec/                  # Базовые стили
│   │   │   ├── _variables.scss    # Переменные
│   │   │   ├── _mixins.scss       # Миксины
│   │   │   ├── _fonts.scss        # Подключение шрифтов
│   │   │   ├── _global.scss       # Глобальные стили
│   │   │   └── ...
│   │   │
│   │   └── style.scss             # Главный файл стилей
│   │
│   ├── index.html                 # Главная страница
│   └── index.js                   # Точка входа JavaScript
│
├── webpack.common.js              # Общая конфигурация Webpack
├── webpack.dev.js                 # Конфигурация для разработки
├── webpack.prod.js                # Конфигурация для production
├── postcss.config.js              # Настройки PostCSS
├── package.json                   # Зависимости и скрипты
└── README.md                      # Документация
```

---

## ⚙️ Конфигурация

### Webpack

Проект использует разделенную конфигурацию Webpack:

- **webpack.common.js** - общие настройки для всех окружений
- **webpack.dev.js** - настройки для разработки
- **webpack.prod.js** - настройки для production

#### Основные настройки:

**Code Splitting**

```javascript
splitChunks: {
  cacheGroups: {
    jquery: {
      test: /[\\/]node_modules[\\/](jquery)[\\/]/,
      name: 'jquery',
      chunks: 'all'
    }
  }
}
```

**Aliases и глобальные переменные**

- jQuery доступен глобально как `$` и `jQuery`
- Автоматический импорт модулей

### PostCSS

Конфигурация PostCSS включает:

- **Autoprefixer** - автоматическое добавление вендорных префиксов

### Babel

Транспиляция современного JavaScript для поддержки:

- Браузеров с долей использования более 0.5%
- Последних 2 версий браузеров
- Только поддерживаемых браузеров (`not dead`)

---

## 💻 Разработка

### Добавление новых страниц

1. Создайте HTML файл в папке `src/`:

```html
<!-- src/about.html -->
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>О нас</title>
  </head>
  <body>
    <!-- Ваш контент -->
  </body>
</html>
```

2. Webpack автоматически обнаружит новую страницу и создаст её в `dist/`

### Работа с SCSS

Структура организована по модульному принципу:

```scss
// src/scss/style.scss
@import 'spec/variables';
@import 'spec/mixins';
@import 'spec/fonts';
@import 'spec/global';

@import 'modules/header';
@import 'modules/footer';
@import 'modules/button';
```

### Использование SVG-спрайтов

1. Поместите SVG файлы в `src/img/svg-sprite/`
2. Импортируйте их в JavaScript:

```javascript
import './img/svg-sprite/icon-webpack.svg';
```

3. Используйте в HTML:

```html
<svg class="icon">
  <use xlink:href="img/sprites/general.svg#icon-webpack"></use>
</svg>
```

### HTML-инклюды

Используйте файлы из `src/inc/` для переиспользуемых блоков:

```html
<!-- src/index.html -->
<%= require('html-loader!./inc/header.html').default %>
<main>
  <!-- Основной контент -->
</main>
<%= require('html-loader!./inc/footer.html').default %>
```

---

## 🏗 Production сборка

### Оптимизации в production:

1. **JavaScript**

   - Минификация с Terser
   - Удаление комментариев
   - Tree shaking

2. **CSS**

   - Минификация с CSSNano
   - Удаление неиспользуемых стилей
   - Оптимизация значений

3. **Assets**

   - Копирование шрифтов и изображений
   - Оптимизация SVG
   - Генерация спрайтов

4. **Code Splitting**
   - Разделение vendor-библиотек
   - Lazy loading модулей

### Деплой

После выполнения `pnpm run build` готовая сборка находится в папке `dist/`.

Деплой на различные платформы:

**GitHub Pages:**

```bash
pnpm run build
# Опубликуйте содержимое папки dist/
```

**Netlify:**

```bash
# Build command: pnpm run build
# Publish directory: dist
```

**Vercel:**

```bash
# Build command: pnpm run build
# Output directory: dist
```

---

## 🌐 Браузерная поддержка

Проект поддерживает следующие браузеры:

- ✅ Браузеры с долей использования более 0.5%
- ✅ Последние 2 версии популярных браузеров
- ✅ Только поддерживаемые браузеры (`not dead`)

Настройки можно изменить в `package.json`:

```json
"browserslist": [
  "> 0.5%",
  "last 2 versions",
  "not dead"
]
```

---

## ⚡ Оптимизация

### Рекомендации для лучшей производительности:

1. **Изображения**

   - Используйте WebP формат где возможно
   - Оптимизируйте изображения перед добавлением
   - Используйте SVG для иконок

2. **Шрифты**

   - Используйте WOFF2 формат (лучшее сжатие)
   - Подключайте только необходимые начертания
   - Используйте `font-display: swap`

3. **JavaScript**

   - Импортируйте только необходимые модули
   - Используйте динамические импорты для редко используемого кода
   - Минимизируйте использование тяжелых библиотек

4. **CSS**
   - Удаляйте неиспользуемые стили
   - Используйте CSS-модули для инкапсуляции
   - Оптимизируйте селекторы

---

## 📄 Лицензия

Этот проект распространяется под лицензией **MIT**.

Вы можете свободно использовать, изменять и распространять этот код.

Подробнее см. в файле [LICENSE](LICENSE).

---

## 👤 Автор

**Sergey Konovalenko**

- GitHub: [@sergeykonovalenko](https://github.com/sergeykonovalenko)
- Repository: [webpack-project](https://github.com/sergeykonovalenko/webpack-project)

---

## 🤝 Содействие

Contributions, issues и feature requests приветствуются!

Не стесняйтесь проверять [issues page](https://github.com/sergeykonovalenko/webpack-project/issues).

### Как внести вклад:

1. Форкните проект
2. Создайте ветку для вашей фичи (`git checkout -b feature/AmazingFeature`)
3. Зафиксируйте изменения (`git commit -m 'Add some AmazingFeature'`)
4. Отправьте в ветку (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

---

## 📞 Поддержка

Если у вас возникли вопросы или проблемы:

1. Проверьте [Issues](https://github.com/sergeykonovalenko/webpack-project/issues)
2. Создайте новый Issue с подробным описанием проблемы
3. Убедитесь, что вы используете последнюю версию зависимостей

---

## 📚 Дополнительные ресурсы

- [Webpack Documentation](https://webpack.js.org/)
- [Babel Documentation](https://babeljs.io/docs/)
- [SASS Documentation](https://sass-lang.com/documentation)
- [PostCSS Documentation](https://postcss.org/)

---

<div align="center">

**⭐ Если этот проект был полезен, поставьте звезду на GitHub! ⭐**

Made with ❤️ by Sergey Konovalenko

</div>
