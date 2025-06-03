import type { $ZodIssue } from 'zod/v4/core';

export const formatZodIssues = (issues: $ZodIssue[]) => {
	return issues.map((issue) => ({
		message: issue.message,
		field: issue.path[0]
	}));
};
