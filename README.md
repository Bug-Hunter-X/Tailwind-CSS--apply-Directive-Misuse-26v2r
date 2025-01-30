# Tailwind CSS @apply Directive Misuse
This repository demonstrates a common error when using Tailwind CSS's `@apply` directive.  The `@apply` directive is intended to apply existing utility classes, not custom styles. Applying it to custom classes will not work as expected. This example highlights the correct usage and demonstrates the error.

## Problem
The `@apply` directive is often mistakenly applied to custom CSS classes, expecting it to apply the styles defined within those custom classes.  This does not work. The `@apply` directive is designed to work with predefined utility classes provided by Tailwind CSS.

## Solution
The solution is to use the utility classes directly instead of using the `@apply` directive with custom classes.  Alternatively, create utility classes or use a more appropriate CSS methodology.
