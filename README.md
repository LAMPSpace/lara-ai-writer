# LARA AI WRITER

# Usage

## Install

1. Clone the repository
```bash
git clone
```

2. Copy the .env.example file to .env
```bash
cd lara-ai-writer
```
```bash
cp .env.example .env
```

3. Install dependencies
```bash
composer install
```
```bash
cd lara-ai-writer-frontend && npm install
```

4. Generate application key
```bash
php artisan key:generate
```

5. Run migrations
```bash
php artisan migrate
```

6. Run the application
```bash
./vendor/bin/sail up
```