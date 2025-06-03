<script lang="ts">
	import ChatsHeader from '../components/chats/ChatsHeader.svelte';
	import RecentChatsList from '../components/chats/RecentChatsList.svelte';
	let { data } = $props();
</script>

<div class="bg-main-l dark:bg-main-d w-[30%] p-1">
	<RecentChatsList {data} />
</div>
