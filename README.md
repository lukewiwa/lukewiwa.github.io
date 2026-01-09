# lukewiwa.com

The Ramblings of Wiwa

## Django-based Setup

This project is built with Django and Wagtail CMS, using S3-compatible object
storage for both the SQLite database and media files.

### Prerequisites

- Python 3.x
- Docker and Docker Compose (for local development)
- S3-compatible object storage (AWS S3, MinIO, etc.)

### Environment Configuration

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your configuration. **Required** variables:
   - `DJANGO_SECRET_KEY`: Django secret key (generate with
     `python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'`)
   - `INITIAL_SUPERUSER_USERNAME`: Username for the initial admin user
   - `INITIAL_SUPERUSER_PASSWORD`: Password for the initial admin user
   - `INITIAL_SUPERUSER_EMAIL`: Email for the initial admin user

## Build Setup (Legacy)

[Install `lume`](https://lumeland.github.io/getting-started/installation/) then
run server with import maps set:

```
deno task lume --serve
```
