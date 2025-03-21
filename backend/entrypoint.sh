#!/bin/bash
set -e

# Wait for database to be ready (if you're using a database)
# sleep 5  # Simple approach
# or use a tool like wait-for-it.sh

# Create initial migrations file if it doesn't exist
python manage.py makemigrations

# Create specific app migrations
python manage.py makemigrations users

# Apply migrations
python manage.py migrate

# Start the Django server
exec "$@"