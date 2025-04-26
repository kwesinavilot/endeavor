# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.1.0] - 2025-04-26

### Added
- Centralized configuration management in `config/` folder.
- `.env.example` for environment variable documentation.
- Multi-database config support (Postgres, MySQL, SQLite, MongoDB).
- Authentication config support (Google, Email, Magic Link).
- Prisma ORM and NextAuth.js for authentication and database.
- Prisma schema with basic user/auth models.
- Migration drafts workflow: users can add migration drafts in `prisma/migrations/drafts/`.
- Script (`scripts/append-migrations.js`) to append migration drafts to `schema.prisma`.
- Changelog file using Keep a Changelog format.

### Changed
- `.gitignore` updated to ensure `.env` files are ignored.

### Removed
- N/A

### Fixed
- N/A

[0.1.0]: https://github.com/your-repo/endeavor/releases/tag/v0.1.0
