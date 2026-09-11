# Operator guide

## Standalone deployment

### Docker（bin/ 入口，标准通道）

标准容器通道是 `bin/` 九入口（`MODULE_BIN_SPEC.md`；四件套 runbook 见
`docs/runbooks/`）。镜像构建/部署钩子接线完成后即可用：

```bash
bin/docker-image.sh build                                       # tag 取自 sdkwork.app.config.json
bin/docker-deploy.sh install --environment staging --yes        # install/upgrade/rollback/status/logs
```

### Docker Compose（本地开发直跑）

From `deployments/docker/` (build context is SDKWork workspace root):

```bash
docker compose up -d --build
```

Services: `prompts-api` (8080), `postgres` (5432). 仅作本地开发回退，
不作为安装部署口径。

### Binary

```bash
cargo build --release --bin sdkwork-api-prompts-standalone-gateway
export SDKWORK_PROMPTS_APP_ROOT=/path/to/sdkwork-prompts
export SDKWORK_DATABASE_URL=postgresql://...
./target/release/sdkwork-api-prompts-standalone-gateway
```

## Cloud topology

```bash
pnpm topology:validate
pnpm gateway:validate:cloud
```

Profiles: `specs/topology.spec.json` — `standalone.development` and `cloud.production` (full vocabulary: development|test|staging|production × standalone|cloud).

## Production environment

See `configs/production/.env.production.example`:

- `SDKWORK_PROMPTS_IAM_ENABLED=true`
- `SDKWORK_PROMPTS_IAM_STRICT=true`
- `SDKWORK_PROMPTS_REQUIRE_AUTH=true`

## Health

Infra routes mounted via `sdkwork-web-bootstrap` (readiness on the gateway process).

## Runbooks

See [runbooks/README.md](../../runbooks/README.md).
