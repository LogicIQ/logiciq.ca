---
title: PVC Chonker
---

![PVC Chonker](/images/pvc-chonker.webp)

# PVC Chonker

A cloud-agnostic Kubernetes operator for automatic PVC expansion. Works with any CSI-compatible storage without external dependencies.

## Features

- **Cloud Agnostic**: Works with any CSI-compatible storage
- **No External Dependencies**: Self-contained operation without external databases
- **Annotation-Based**: Simple configuration through Kubernetes annotations
- **Policy-Based**: Advanced configuration through PVCPolicy custom resources
- **Cooldown Protection**: Prevents rapid successive expansions
- **Inode Support**: Monitors both storage and inode usage

## Installation

### Helm Chart (Recommended)

```bash
helm repo add logiciq https://logiciq.github.io/helm-charts
helm repo update
helm install pvc-chonker logiciq/pvc-chonker -n pvc-chonker-system --create-namespace
```

## Quick Start

### Basic Usage

Annotate your PVC to enable auto-expansion:

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
  annotations:
    pvc-chonker.io/enabled: "true"
    pvc-chonker.io/threshold: "80%"
    pvc-chonker.io/increase: "20%"
spec:
  accessModes: [ReadWriteOnce]
  storageClassName: your-expandable-storage-class
  resources:
    requests:
      storage: 10Gi
```

### PVCPolicy Configuration

For advanced use cases, configure PVCs using PVCPolicy custom resources:

```yaml
apiVersion: pvc-chonker.io/v1alpha1
kind: PVCPolicy
metadata:
  name: database-policy
  namespace: production
spec:
  selector:
    matchLabels:
      workload: database
  template:
    enabled: true
    threshold: 85.0
    increase: "25%"
    maxSize: "2000Gi"
    cooldown: "30m"
```

## Documentation

- [📖 Complete Documentation](/docs/pvc-chonker/) - Versioned documentation with examples
- [📖 README](https://github.com/LogicIQ/pvc-chonker/blob/main/README.md) - Complete documentation and examples
- [🗺️ ROADMAP](https://github.com/LogicIQ/pvc-chonker/blob/main/docs/ROADMAP.md) - Development roadmap and planned features

## Links

- [📁 Repository](https://github.com/LogicIQ/pvc-chonker)
- [📦 Helm Chart](https://github.com/LogicIQ/helm-charts/tree/main/charts/pvc-chonker)