#!/bin/bash

if [ -n "$CLAUDE_ENV_FILE" ]; then
	eval "$(mise activate bash)"
	mise env >> "$CLAUDE_ENV_FILE"
fi

exit 0
