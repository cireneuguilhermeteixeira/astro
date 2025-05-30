<script>
  let count = 0;
  function increment() {
    count += 1;
  }
</script>

<h2>Hello, I'm a svelte component. Value: {count}</h2>
<button on:click={increment}>Increase value</button>
