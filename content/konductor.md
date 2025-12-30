---
title: Konductor
---

![Konductor](/images/konductor.webp)

# Konductor

Kubernetes operator for workflow coordination and job orchestration. Synchronize Kubernetes Jobs, coordinate multi-stage pipelines, and manage complex workflows in your cluster.

## Features

- **Barrier** - Synchronize multiple Jobs at coordination points
- **Gate** - Wait for dependencies before starting Jobs
- **Lease** - Singleton Job execution and leader election
- **Semaphore** - Control concurrent Job execution
- **CLI** - Command-line tool for workflow management
- **SDK** - Go SDK for programmatic integration

## Installation

### Helm

```bash
# Add the LogicIQ Helm repository
helm repo add logiciq https://logiciq.github.io/helm-charts
helm repo update

# Install konductor
helm install my-konductor logiciq/konductor
```

## Quick Start

### Using kubectl

```bash
# Create a barrier for 3 Jobs
kubectl apply -f - <<EOF
apiVersion: konductor.io/v1
kind: Barrier
metadata:
  name: stage-1-complete
spec:
  expected: 3
EOF

# Check status
kubectl get barrier stage-1-complete
```

### Using CLI

```bash
# Install CLI
go install github.com/LogicIQ/konductor/cli@latest

# Wait for barrier in Job
koncli barrier wait stage-1-complete --timeout 30m
```

### Using SDK

```go
import konductor "github.com/LogicIQ/konductor/sdk/go"

client, _ := konductor.New(nil)

// Wait for dependencies
client.WaitGate(ctx, "dependencies-ready")

// Signal completion
client.ArriveBarrier(ctx, "stage-complete")
```

## Synchronization Primitives

### Barrier
Synchronize multiple processes at a coordination point.

```yaml
apiVersion: konductor.io/v1
kind: Barrier
metadata:
  name: stage-1-complete
spec:
  expected: 3
```

### Gate
Wait for multiple conditions before proceeding.

```yaml
apiVersion: konductor.io/v1
kind: Gate
metadata:
  name: validation-gate
spec:
  conditions:
  - type: Job
    name: data-validation
    state: Complete
```

### Lease
Singleton execution and leader election.

```yaml
apiVersion: konductor.io/v1
kind: Lease
metadata:
  name: daily-report
spec:
  ttl: 1h
```

### Semaphore
Control concurrent Job execution.

```yaml
apiVersion: konductor.io/v1
kind: Semaphore
metadata:
  name: batch-limit
spec:
  permits: 10  # Max 10 concurrent Jobs
```

## Documentation

- [📖 Complete Documentation](/docs/konductor/) - Versioned documentation with examples
- [📖 README](https://github.com/LogicIQ/konductor/blob/main/README.md) - Complete documentation and examples
- [🗺️ ROADMAP](https://github.com/LogicIQ/konductor/blob/main/docs/ROADMAP.md) - Development roadmap and planned features
- [🔧 SDK Documentation](https://github.com/LogicIQ/konductor/blob/main/docs/SDK.md) - Go SDK integration guide

## Links

- [📁 Repository](https://github.com/LogicIQ/konductor)
- [📦 Helm Chart](https://github.com/LogicIQ/helm-charts/tree/main/charts/konductor)