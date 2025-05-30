<script lang="ts">
	import ChatsHeader from '../components/chats/ChatsHeader.svelte';
	import RecentChatsList from '../components/chats/RecentChatsList.svelte';
	let { data } = $props();
	const getData = async () => {
		try {
			const Fromapi = await fetch('/');
			const datat = await Fromapi.json();
			console.log({ data, Fromapi, datat });
		} catch (error) {
			console.log({ error });
		}
	};
</script>

<div class="bg-main-l dark:bg-main-d w-[30%] p-1">
	<RecentChatsList />
	<button onclick={getData}>click get data</button>
	<p>{JSON.stringify(data)}</p>
</div>
