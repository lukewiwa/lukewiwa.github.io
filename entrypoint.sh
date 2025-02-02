#!/bin/bash

cd src || return

uv sync

cd ..

exec "$@"
