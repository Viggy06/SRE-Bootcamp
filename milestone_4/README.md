## 🚀 Milestone 4: Setup CI Pipeline

### 📌 Description

The CI pipeline runs the following steps:

* Install dependencies
* Run tests
* Perform linting
* Build image and push to docker repo

---

## 🛠️ Makefile

```makefile
.PHONY: install lint test

# Install dependencies
install:
	npm install

# Run tests
test:
	npm test

# Lint
lint:
	npm run lint
```

---

## ▶️ Usage

```bash
make install
make test
make lint
```
