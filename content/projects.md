---
title: Projects
---

# Projects

Open-source Kubernetes operators and tools built by LogicIQ.

## [Konductor](/konductor/)

![Konductor](/images/konductor.webp)

**Kubernetes operator for workflow coordination and job orchestration.**

Synchronize Kubernetes Jobs, coordinate multi-stage pipelines, and manage complex workflows in your cluster.

- **Barrier** - Synchronize multiple Jobs at coordination points
- **Gate** - Wait for dependencies before starting Jobs  
- **Lease** - Singleton Job execution and leader election
- **Semaphore** - Control concurrent Job execution

[📖 Documentation](/docs/konductor/) | [📁 Repository](https://github.com/LogicIQ/konductor)

---

## [PVC Chonker](/pvc-chonker/)

![PVC Chonker](/images/pvc-chonker.webp)

**Cloud-agnostic Kubernetes operator for automatic PVC expansion.**

Works with any CSI-compatible storage without external dependencies.

- **Cloud Agnostic** - Works with any CSI-compatible storage
- **No External Dependencies** - Self-contained operation
- **Annotation-Based** - Simple configuration through Kubernetes annotations
- **Policy-Based** - Advanced configuration through PVCPolicy custom resources

[📖 Documentation](/docs/pvc-chonker/) | [📁 Repository](https://github.com/LogicIQ/pvc-chonker)

---

## [Secret Santa](/secret-santa/)

![Secret Santa](/images/secret-santa.webp)

**Kubernetes operator for generating secrets with templates.**

Store secrets in multiple destinations with flexible template engine.

- **Multiple Storage** - Kubernetes secrets, AWS Secrets Manager, GCP Secret Manager
- **Template Engine** - Go templates with crypto, random, and TLS generators
- **Create-Once** - Secrets generated once and never modified
- **Cloud Integration** - AWS and GCP authentication support

[📖 Documentation](/docs/secret-santa/) | [📁 Repository](https://github.com/LogicIQ/secret-santa)

---

## Contributing

All projects are open-source and welcome contributions. Check out our [GitHub organization](https://github.com/LogicIQ) to get started.