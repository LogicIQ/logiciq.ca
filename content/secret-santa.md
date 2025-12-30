---
title: Secret Santa
---

![Secret Santa](/images/secret-santa.webp)

# Secret Santa

Kubernetes operator for generating secrets with templates and storing them in multiple destinations.

## Features

- **Multiple Storage**: Kubernetes secrets, AWS Secrets Manager, AWS Parameter Store, GCP Secret Manager
- **Template Engine**: Go templates with crypto, random, and TLS generators
- **Create-Once**: Secrets generated once and never modified
- **Cloud Integration**: AWS and GCP authentication support

## Installation

### Helm (Recommended)

```bash
helm repo add logiciq https://charts.logiciq.ca
helm install secret-santa logiciq/secret-santa
```

## Quick Start

### Basic Password Generation

```yaml
apiVersion: secrets.secret-santa.io/v1alpha1
kind: SecretSanta
metadata:
  name: app-password
spec:
  template: |
    password: {{ .pass.password }}
  generators:
    - name: pass
      type: random_password
      config:
        length: 32
```

### TLS Certificate

```yaml
apiVersion: secrets.secret-santa.io/v1alpha1
kind: SecretSanta
metadata:
  name: tls-cert
spec:
  template: |
    tls.crt: {{ .cert.certificate }}
    tls.key: {{ .key.private_key_pem }}
  generators:
    - name: key
      type: tls_private_key
    - name: cert
      type: tls_self_signed_cert
      config:
        key_pem: "{{ .key.private_key_pem }}"
        subject:
          common_name: example.com
  secretType: kubernetes.io/tls
```

## Documentation

- [📖 Complete Documentation](/docs/secret-santa/) - Versioned documentation with examples
- [📖 README](https://github.com/LogicIQ/secret-santa/blob/main/README.md) - Complete documentation and examples
- [🗺️ ROADMAP](https://github.com/LogicIQ/secret-santa/blob/main/ROADMAP.md) - Development roadmap and planned features

## Links

- [📁 Repository](https://github.com/LogicIQ/secret-santa)
- [📦 Helm Chart](https://github.com/LogicIQ/helm-charts/tree/main/charts/secret-santa)