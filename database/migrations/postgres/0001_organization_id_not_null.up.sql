-- sdkwork:migration
-- id: 0001_organization_id_not_null
-- engine: postgres
-- module: sdkwork-prompts
-- purpose: Enforce organization_id NOT NULL DEFAULT on all tables in the
--   consolidated baseline. NULL rows (pre-standard data anomalies) are
--   backfilled with the platform sentinel before NOT NULL is set, and
--   NOT NULL columns without an explicit default receive the sentinel
--   default, keeping existing deployments consistent with fresh baseline
--   installs.
-- reversible: false
-- rollback: forward-fix (sentinel backfill is the canonical fix; NULL
--   organization rows are data anomalies)
-- transactional: true
-- lock: lightweight
-- lock_timeout: 2s
-- statement_timeout: 30s

BEGIN;

ALTER TABLE ai_prompt_category ADD COLUMN IF NOT EXISTS organization_id BIGINT NOT NULL DEFAULT 0;
UPDATE ai_prompt_category SET organization_id = 0 WHERE organization_id IS NULL;
ALTER TABLE ai_prompt_category ALTER COLUMN organization_id SET DEFAULT 0;
ALTER TABLE ai_prompt_category ALTER COLUMN organization_id SET NOT NULL;

ALTER TABLE ai_prompt ADD COLUMN IF NOT EXISTS organization_id BIGINT NOT NULL DEFAULT 0;
UPDATE ai_prompt SET organization_id = 0 WHERE organization_id IS NULL;
ALTER TABLE ai_prompt ALTER COLUMN organization_id SET DEFAULT 0;
ALTER TABLE ai_prompt ALTER COLUMN organization_id SET NOT NULL;

ALTER TABLE ai_prompt_version ADD COLUMN IF NOT EXISTS organization_id BIGINT NOT NULL DEFAULT 0;
UPDATE ai_prompt_version SET organization_id = 0 WHERE organization_id IS NULL;
ALTER TABLE ai_prompt_version ALTER COLUMN organization_id SET DEFAULT 0;
ALTER TABLE ai_prompt_version ALTER COLUMN organization_id SET NOT NULL;

ALTER TABLE ai_prompt_binding ADD COLUMN IF NOT EXISTS organization_id BIGINT NOT NULL DEFAULT 0;
UPDATE ai_prompt_binding SET organization_id = 0 WHERE organization_id IS NULL;
ALTER TABLE ai_prompt_binding ALTER COLUMN organization_id SET DEFAULT 0;
ALTER TABLE ai_prompt_binding ALTER COLUMN organization_id SET NOT NULL;

ALTER TABLE ai_prompt_template ADD COLUMN IF NOT EXISTS organization_id BIGINT NOT NULL DEFAULT 0;
UPDATE ai_prompt_template SET organization_id = 0 WHERE organization_id IS NULL;
ALTER TABLE ai_prompt_template ALTER COLUMN organization_id SET DEFAULT 0;
ALTER TABLE ai_prompt_template ALTER COLUMN organization_id SET NOT NULL;

ALTER TABLE ai_prompt_usage ADD COLUMN IF NOT EXISTS organization_id BIGINT NOT NULL DEFAULT 0;
UPDATE ai_prompt_usage SET organization_id = 0 WHERE organization_id IS NULL;
ALTER TABLE ai_prompt_usage ALTER COLUMN organization_id SET DEFAULT 0;
ALTER TABLE ai_prompt_usage ALTER COLUMN organization_id SET NOT NULL;

COMMIT;
