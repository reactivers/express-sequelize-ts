CREATE DATABASE reactivers WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';

ALTER DATABASE reactivers OWNER TO postgres;

\connect reactivers;

CREATE SCHEMA reactivers;

ALTER SCHEMA reactivers OWNER TO postgres;

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';

SET default_tablespace = '';

SET default_with_oids = false;