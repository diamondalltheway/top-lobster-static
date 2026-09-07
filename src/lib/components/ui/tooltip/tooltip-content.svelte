<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';
	let {
		class: className,
		sideOffset = 4,
		children,
		...rest
	}: TooltipPrimitive.ContentProps = $props();
</script>

<TooltipPrimitive.Content
	{sideOffset}
	class={cn(
		'bg-popover text-popover-foreground z-50 overflow-hidden rounded-md border px-3 py-1.5 text-xs',
		className
	)}
	{...rest}
>
	{@render children?.()}
</TooltipPrimitive.Content>
