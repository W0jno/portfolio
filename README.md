# PORTFOLIO.SYS

Osobiste portfolio (DevOps / software) jako SPA: Next.js 16, React 19, Tailwind CSS 4, Bun. UI w stylu terminala, treści PL/EN.

Obraz produkcyjny: [`squnior420/w0jno-portfolio`](https://hub.docker.com/r/squnior420/w0jno-portfolio) (`linux/amd64`). Klaster i manifesty Kubernetes są w osobnym repozytorium `homelab-infrastructure`.

## Wymagania

- [Bun](https://bun.sh) **1.4.x** (to samo co `packageManager` w `package.json`)
- Node nie jest potrzebny do `dev` / `build` skryptów — idą przez `bun --bun`
- Do obrazu: Docker (albo Podman)

## Uruchomienie lokalne

```bash
git clone git@github.com:W0jno/portfolio.git
cd portfolio
bun install
bun run dev
```

Otwórz [http://localhost:3000](http://localhost:3000). Domyślnie przekierowanie na `/about`.

| Ścieżka | Widok |
|---------|--------|
| `/about` | O mnie, praca, edukacja |
| `/projects` | Lista projektów |
| `/projects/:id` | Szczegóły projektu |
| `/skills` | Stack w sekcjach |
| `/api/health` | JSON `{ "status": "ok" }` (sondy k8s) |

Język: przełącznik **PL / EN** w sidebarze (zapis w `localStorage`).

```bash
bun run build    # produkcyjny build Next (standalone)
bun run lint
```

Po `build` lokalny start: `bun run start` (port 3000).

## Treści

Nie edytuj copy w komponentach. Zmieniaj:

- `components/about/constants.ts` — bio, praca, szkoła
- `components/projects/constants.ts` — projekty, `githubUrl`
- `components/skills/constants.ts` — grupy technologii
- `components/shell/constants.ts` — nav, linki GitHub/LinkedIn/CV
- `public/resume.pdf` — plik pod `[R] DOWNLOAD RESUME`

## Docker

Wieloetapowy build: Bun instaluje i kompiluje, runtime to **Node 22** + `output: "standalone"` (`node server.js`). W obrazie nie ma nginx.

```bash
docker build -t portfolio:local .
docker run --rm -p 3000:3000 portfolio:local
```

Health:

```bash
curl -i http://127.0.0.1:3000/api/health
```

Gotowy obraz z CI:

```bash
docker pull squnior420/w0jno-portfolio:main
docker run --rm -p 3000:3000 squnior420/w0jno-portfolio:main
```

`.dockerignore` wycina `node_modules`, `.next`, git i sekrety. `bun.lock` **musi** być w repozytorium (`bun install --frozen-lockfile` w Dockerfile).

## CI (GitHub Actions)

Workflow `.github/workflows/docker-ci.yml` na push do `main`:

1. checkout + Buildx  
2. tagi z `docker/metadata-action`  
3. login Docker Hub (`vars.DOCKER_USERNAME`, `secrets.DOCKER_ACCESS_TOKEN`)  
4. build + push, cache GHA (`mode=max`)

Obraz: `docker.io/<DOCKER_USERNAME>/<github.repository_owner>-portfolio` (np. `squnior420/w0jno-portfolio`).

## Kubernetes

Aplikacja nasłuchuje na **3000** (`HOSTNAME=0.0.0.0`). Sondy: `httpGet` `/api/health` port 3000. Service: np. `port: 80` → `targetPort: 3000`.

Deploy (Deployment + Service) należy do `homelab-infrastructure` (`k8s/manifests/`). Apply z maszyny, która ma `kubectl` do k3s (u nas `k3s-master`). Wejście z internetu: Cloudflare Tunnel na Service, bez otwierania 80/443 na routerze.

## Struktura

```text
app/                 # layout, page, /api/health, rewrite SPA
components/          # widoki + shell + LocaleProvider
public/              # statyki (resume.pdf)
Dockerfile
.github/workflows/docker-ci.yml
```

`next.config.ts`: `output: "standalone"` oraz rewrite `/about`, `/projects`, `/skills` → `/` (React Router na kliencie). `/api/*` nie jest przepisywane.
