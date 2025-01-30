```javascript
// Example using Tailwind's `@apply` directive incorrectly

<div class="bg-gray-100 p-4 @apply text-center">
  <p>This text should be centered.</p>
</div>

//The issue is that @apply only works for utility classes, not for custom classes.
```