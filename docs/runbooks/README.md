# Runbooks

## API unavailable

1. Check process: `sdkwork-api-prompts-standalone-gateway` listening on configured bind (default `0.0.0.0:8080`)
2. Check database: `pnpm db:status` and `SDKWORK_DATABASE_URL`
3. Review logs: `RUST_LOG=info` (set `debug` for SQL tracing)

## Database drift

```bash
pnpm db:drift:check
pnpm db:migrate
```

## Contract regression

```bash
pnpm verify
node ../sdkwork-specs/tools/check-api-response-envelope.mjs --workspace .
```

## IAM auth failures

- Confirm `SDKWORK_PROMPTS_REQUIRE_AUTH` and `SDKWORK_PROMPTS_IAM_ENABLED` match deployment profile
- Verify dual-token headers on app/backend routes
- Optional: `SDKWORK_DATABASE_URL` when IAM data is not in prompts DB


<!-- scaffold-module-runbooks:index -->
## Docker 运维四件套（bin/ 标准，OPERATIONS_SPEC.md §7）

| Runbook | 内容 |
| --- | --- |
| [deploy.md](deploy.md) / [deploy.en.md](deploy.en.md) | 安装 / 升级 / 回滚 / 下线（bin/docker-deploy.sh + bin/docker-image.sh） |
| [troubleshooting.md](troubleshooting.md) / [troubleshooting.en.md](troubleshooting.en.md) | 症状 → doctor 检查 → 处置 |
| [backup-restore.md](backup-restore.md) / [backup-restore.en.md](backup-restore.en.md) | 备份 / 校验 / 恢复 / 演练（bin/backup.sh） |
| [log-reference.md](log-reference.md) / [log-reference.en.md](log-reference.en.md) | 健康日志特征与失败签名（bin/docker-deploy.sh logs） |
