# Triple Mid Monorepo

## Локальная разработка

### Установка зависимостей

```bash
yarn
```

---

### Запуск cms, инициализация базы данных

```bash
yarn dev:cms
```

- Генерируется схема prisma
- Генерируется схема graphql

---

### Запуск профиля соискателя

```bash
yarn workspace @triplemid/profile codegen
```

- Будет сгенерирован клиент по схеме graphql

```bash
yarn dev:profile
```

---

### Запуск дашборда HR

```bash
yarn workspace @triplemid/hr-dashboard codegen
```

- Будет сгенерирован клиент по схеме graphql

```bash
yarn dev:hr-dashboard
```

---

@note:
Для запуска codegen в watchmode `codegen` заменить на `codegen:watch`.