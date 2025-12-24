---
title: Projects
---

# Kubernetes Operators

## PVC Chonker
**Automatic PVC expansion based on usage thresholds**

[📁 Repository](https://github.com/LogicIQ/pvc-chonker) | [📦 Helm Chart](https://github.com/LogicIQ/helm-charts/tree/main/charts/pvc-chonker)

Cloud-agnostic operator that monitors PVC usage and automatically expands them when reaching configurable thresholds. Works with any CSI-compatible storage.

```bash
helm install pvc-chonker logiciq/pvc-chonker
```

**Example Policy:**
```yaml
apiVersion: pvc-chonker.io/v1alpha1
kind: PVCPolicy
metadata:
  name: database-policy
spec:
  selector:
    matchLabels:
      app: database
  thresholds:
    capacity: 80
  expansion:
    increment: "10Gi"
```

---

## Secret Santa
**Generate secrets with Go templates and crypto functions**

[📁 Repository](https://github.com/LogicIQ/secret-santa) | [📦 Helm Chart](https://github.com/LogicIQ/helm-charts/tree/main/charts/secret-santa)

Kubernetes operator for generating passwords, API keys, certificates, and other sensitive data using Go templates with 100+ built-in functions.

```bash
helm install secret-santa logiciq/secret-santa
```

**Example Secret:**
```yaml
apiVersion: secrets.secret-santa.io/v1alpha1
kind: SecretSanta
metadata:
  name: db-credentials
spec:
  secretName: database-secret
  template: |
    username: admin
    password: {{ randomPassword 16 }}
    api-key: {{ randomString 32 }}
```

---

## Konductor
**Workflow coordination and job orchestration**

[📁 Repository](https://github.com/LogicIQ/konductor) | [📦 Helm Chart](https://github.com/LogicIQ/helm-charts/tree/main/charts/konductor)

Provides barriers, gates, semaphores, and leases for coordinating complex workflows in Kubernetes. Includes CLI tool for interaction.

```bash
helm install konductor logiciq/konductor
```

**Example Barrier:**
```yaml
apiVersion: sync.konductor.io/v1
kind: Barrier
metadata:
  name: processing-barrier
spec:
  parties: 3
  timeout: "10m"
```

---

## Installation

All operators are available via Helm:

```bash
helm repo add logiciq https://logiciq.github.io/helm-charts
helm repo update
```