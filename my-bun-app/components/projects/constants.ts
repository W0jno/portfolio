import type { Locale } from "@/app/locale";
import type { ProjectsCopy } from "@/components/projects/copy";

export const projectsCopy: Record<Locale, ProjectsCopy> = {
  pl: {
    label: "PROJECTS",
    openRepo: "OTWORZ_REPO",
    items: [
      {
        id: "lab-core",
        title: "HOMELAB_CORE",
        description:
          "Klaster k3s + MetalLB, GitOps, monitoring stack. Placeholdery pod Twoj lab.",
        tags: ["Kubernetes", "Terraform", "Prometheus"],
        href: "https://github.com/YOUR_HANDLE/homelab-core",
      },
      {
        id: "edge-vpn",
        title: "EDGE_VPN_MESH",
        description:
          "WireGuard mesh miedzy DC i laptopami. Routing policy, kill-switch, audit logow.",
        tags: ["WireGuard", "Linux", "nftables"],
        href: "https://github.com/YOUR_HANDLE/edge-vpn-mesh",
      },
      {
        id: "net-lab",
        title: "BGP_LAB",
        description:
          "Lab EVPN/VXLAN + BGP. Anycast ingress, chaos testy failover.",
        tags: ["BGP", "FRR", "Ansible"],
        href: "https://github.com/YOUR_HANDLE/bgp-lab",
      },
      {
        id: "pipe",
        title: "PIPELINE_FACTORY",
        description:
          "Szablony GitLab CI: lint, terraform plan, canary, rollback. Placeholdery.",
        tags: ["GitLab CI", "Docker", "AWS"],
        href: "https://github.com/YOUR_HANDLE/pipeline-factory",
      },
    ],
  },
  en: {
    label: "PROJECTS",
    openRepo: "OPEN_REPO",
    items: [
      {
        id: "lab-core",
        title: "HOMELAB_CORE",
        description:
          "k3s cluster + MetalLB, GitOps, monitoring stack. Placeholder for your lab.",
        tags: ["Kubernetes", "Terraform", "Prometheus"],
        href: "https://github.com/YOUR_HANDLE/homelab-core",
      },
      {
        id: "edge-vpn",
        title: "EDGE_VPN_MESH",
        description:
          "WireGuard mesh between DC and laptops. Policy routing, kill-switch, audit logs.",
        tags: ["WireGuard", "Linux", "nftables"],
        href: "https://github.com/YOUR_HANDLE/edge-vpn-mesh",
      },
      {
        id: "net-lab",
        title: "BGP_LAB",
        description:
          "EVPN/VXLAN + BGP lab. Anycast ingress, failover chaos tests.",
        tags: ["BGP", "FRR", "Ansible"],
        href: "https://github.com/YOUR_HANDLE/bgp-lab",
      },
      {
        id: "pipe",
        title: "PIPELINE_FACTORY",
        description:
          "GitLab CI templates: lint, terraform plan, canary, rollback. Placeholders.",
        tags: ["GitLab CI", "Docker", "AWS"],
        href: "https://github.com/YOUR_HANDLE/pipeline-factory",
      },
    ],
  },
};
