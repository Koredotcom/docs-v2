# Contributing to AgenticAI Core SDK

Thank you for your interest in contributing to the AgenticAI Core SDK! This document provides guidelines and instructions for contributing to the project.

## Ways to Contribute

There are many ways to contribute to AgenticAI Core:

- 🐛 **Report Bugs** - Help us identify and fix issues
- ✨ **Suggest Features** - Share ideas for new functionality
- 📝 **Improve Documentation** - Enhance guides, examples, and API docs
- 💻 **Submit Code** - Fix bugs or implement new features
- 🧪 **Write Tests** - Improve test coverage
- 📖 **Share Examples** - Contribute real-world usage examples

## Getting Started

### 1. Fork and Clone

```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/agentic-core.git
cd agentic-core
```

### 2. Set Up Development Environment

```bash
# Create a virtual environment
python3.10 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install in development mode with all dependencies
pip install -e ".[dev,docs]"
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

## Development Workflow

### Running Tests

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=agenticai_core --cov-report=html

# Run specific test file
pytest tests/test_app.py
```

### Code Style

We use the following tools to maintain code quality:

```bash
# Format code with black
black src/

# Sort imports with isort
isort src/

# Lint with ruff
ruff check src/

# Type check with mypy
mypy src/
```

### Pre-commit Checks

Before committing, ensure:

1. ✅ All tests pass
2. ✅ Code is formatted with black
3. ✅ Linting passes
4. ✅ Type hints are added for new code
5. ✅ Docstrings are added for public APIs

### Documentation

When adding or modifying public APIs:

1. **Add Docstrings** - Use Google/NumPy style
2. **Update API Docs** - Add corresponding `.md` files in `docs/api/`
3. **Add Examples** - Include usage examples in docstrings
4. **Update Guides** - Update user guides if needed

Build and preview documentation:

```bash
mkdocs serve
```

## Coding Standards

### Python Style

- Follow PEP 8 guidelines
- Use type hints for function signatures
- Maximum line length: 88 characters (black default)
- Use meaningful variable and function names

### Docstring Format

Use Google-style docstrings:

```python
def my_function(param1: str, param2: int) -> bool:
    """Short description of the function.
    
    Longer description explaining the function's behavior,
    edge cases, and usage patterns.
    
    Args:
        param1: Description of param1.
        param2: Description of param2.
        
    Returns:
        Description of return value.
        
    Raises:
        ValueError: When param2 is negative.
        
    Example:
        ```python
        result = my_function("test", 42)
        print(result)  # True
        ```
    """
    if param2 < 0:
        raise ValueError("param2 must be non-negative")
    return True
```

### Commit Messages

Follow conventional commit format:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```
feat(agent): add support for streaming responses

fix(memory): resolve session cleanup issue

docs(api): add examples for Tool.register decorator
```

## Pull Request Process

### 1. Update Your Branch

Sync with upstream main branch.

<!--
```bash
# Sync with upstream main
git remote add upstream https://github.com/agenticai/agentic-core.git
git fetch upstream
git rebase upstream/main
```
-->

### 2. Push Changes

```bash
git push origin feature/your-feature-name
```

### 3. Create Pull Request

1. Go to GitHub and create a Pull Request
2. Fill out the PR template:
   - **Description**: What does this PR do?
   - **Related Issue**: Link to related issue(s)
   - **Testing**: How was this tested?
   - **Breaking Changes**: Any breaking changes?

### 4. Code Review

- Address reviewer feedback
- Keep the PR focused and small
- Update documentation as needed
- Ensure CI/CD checks pass

### 5. Merge

Once approved, your PR will be merged by a maintainer.

## Reporting Bugs

### Before Reporting

1. Check if the bug has already been reported
2. Try to reproduce with the latest version
3. Gather relevant information

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Create agent with...
2. Call method...
3. See error

**Expected behavior**
What you expected to happen.

**Actual behavior**
What actually happened.

**Environment:**
- Python version:
- AgenticAI Core version:
- OS:

**Additional context**
Any other relevant information.
```

## Suggesting Features

We welcome feature suggestions! Please:

1. Check if similar features have been requested
2. Describe the use case clearly
3. Explain why this would benefit users
4. Consider implementation complexity

### Feature Request Template

```markdown
**Feature Description**
Clear description of the proposed feature.

**Use Case**
Why is this feature needed? What problem does it solve?

**Proposed Solution**
How should this feature work?

**Alternatives Considered**
Other approaches you've thought about.

**Additional Context**
Any other relevant information.
```

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors.

### Our Standards

**Positive behavior:**

- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what's best for the community

**Unacceptable behavior:**

- Harassment, discrimination, or offensive comments
- Trolling, insulting/derogatory comments
- Public or private harassment
- Publishing others' private information

### Enforcement

Instances of unacceptable behavior may be reported to Support.

## Development Setup Details

### Project Structure

```
agentic-core/
├── src/
│   └── agenticai_core/
│       ├── designtime/      # Design-time models
│       ├── runtime/          # Runtime execution
│       ├── api/              # API clients
│       └── cli/              # CLI tools
├── tests/                    # Test suite
├── docs/                     # Documentation source
├── examples/                 # Example applications
└── mkdocs.yml               # Documentation config
```

### Dependencies

Core dependencies:

- `pydantic>=2.0` - Data validation
- `typing-extensions` - Type hints support

Development dependencies:

- `pytest` - Testing framework
- `pytest-cov` - Coverage reporting
- `black` - Code formatter
- `ruff` - Fast Python linter
- `mypy` - Type checker

Documentation dependencies:

- `mkdocs` - Documentation generator
- `mkdocs-material` - Material theme
- `mkdocstrings[python]` - API docs from docstrings

### Running Specific Tests

```bash
# Test specific module
pytest tests/designtime/

# Test with verbose output
pytest -v

# Test with specific marker
pytest -m "not slow"

# Test with debugging
pytest -s --pdb
```

