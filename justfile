# Show available commands
default:
	@just --list

# Install dependencies exactly as locked in package-lock.json
install:
	npm ci

# Serve the site locally, rebuilding and reloading on every change
dev:
	npm run dev

# Build the site into dist/
build:
	npm run build

# Scaffold a draft post: just new-post "My Post Title"
new-post +TITLE:
	npm run new-post -- "{{TITLE}}"

# Type-check the site
typecheck:
	npm run typecheck

# Remove build output
clean:
	rm -rf dist .cache
