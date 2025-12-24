# LogicIQ Website

This is the source code for the LogicIQ website at [logiciq.ca](https://logiciq.ca).

## Built With

- [Hugo](https://gohugo.io/) - Static site generator
- [Hextra](https://github.com/imfing/hextra) - Hugo theme

## Development

### Prerequisites

- Hugo (extended version)
- Git

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/LogicIQ/logiciq.ca.git
cd logiciq.ca
```

2. Initialize submodules:
```bash
git submodule update --init --recursive
```

3. Start the development server:
```bash
hugo server --buildDrafts
```

4. Open http://localhost:1313 in your browser

### Building

To build the static site:

```bash
hugo
```

The generated site will be in the `public/` directory.

## Content Structure

- `content/_index.md` - Homepage
- `content/about.md` - About page
- `content/projects.md` - Projects overview
- `content/docs/` - Documentation pages

## Deployment

The site is automatically deployed when changes are pushed to the main branch.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.