
# Test Cases - Registration Flow

**Страница:** https://code-staging-web.on.dev-craft.tech/signup/1  
**Среда:** Dev  
**Тип:** Functional + UI + Validation + Negative testing

## 1. Positive Test Cases

### TC-REG-001 – Successful Registration via "Join" button
**Предусловие:** Потребителят е на Login страницата  
**Стъпки:**
1. Отвори `/login`
2. Кликни на бутона **Join**
3. Попълни валиден email
4. Попълни валидна парола (минимум 12 символа)
5. Приеми Terms & Conditions
6. Кликни **Register**

**Очакван резултат:**
- Появява се съобщение "Verification code sent"
- Показва се форма за въвеждане на код, изпратен на посочения email

---

### TC-REG-002 – Successful Registration via "Join here" button
**Предусловие:** Потребителят е на Login страницата  
**Стъпки:**
1. Отвори `/login`
2. Кликни на **Join here**
3. Попълни валиден email + парола
4. Приеми Terms
5. Кликни **Register**

**Очакван резултат:** Същото като TC-REG-001

---

### TC-REG-003 – Registration with already existing email
**Предусловие:** Съществуващ регистриран потребител  
**Стъпки:**
1. Отвори `/login`
2. Кликни **Join here**
3. Въведи email, който вече е регистриран
4. Попълни парола и приеми Terms
5. Кликни **Register**

**Очакван резултат:** Показва се грешка "User with this email already exist"

---

## 2. Validation & Error Handling Test Cases

### TC-REG-004 – Required field validation messages
**Стъпки:**
1. Отвори signup страницата
2. Кликни в полето Password (без да попълваш нищо)
3. Кликни в полето Email
4. Опитай да регистрираш без да отметнеш Terms

**Очакван резултат:**
- Появяват се "Required field" съобщения за Email и Password
- Появява се "Required field" + червена иконка за Terms checkbox

---

### TC-REG-005 – Email help text appearance
**Стъпки:**
1. Отвори signup
2. Попълни валиден email

**Очакван резултат:** Появява се текст "We will send you a code to verify your email"

---

## 3. Negative Test Cases

- TC-REG-006 – Registration with invalid email format
- TC-REG-007 – Registration with too short password
- TC-REG-008 – Registration without accepting Terms
- TC-REG-009 – Registration with empty email and password
- TC-REG-010 – Verify that verification code screen shows correct email

## 4. Edge Cases & Additional Scenarios

- Регистрация с максимално дълъг email
- Регистрация с парола, съдържаща специални символи
- Бързо кликане на Register бутона (double click prevention)
- Проверка на responsive behavior (mobile view)
- Проверка на accessibility (ARIA labels, focus order)

---

**Статус:** Draft → In Progress  
**Автоматизирани:** TC-REG-001, TC-REG-002, TC-REG-003, TC-REG-004 (частично)  
**Последна актуализация:** 01.04.2026